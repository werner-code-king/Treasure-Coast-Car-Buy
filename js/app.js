(function () {
  "use strict";

  const WEIGHTS = {
    reliability: 0.25,
    resale: 0.20,
    maintenance: 0.20,
    cargo: 0.15,
    price: 0.20,
  };

  // Static — hoisted so it isn't rebuilt (new object + 6 closures) on every filter/sort.
  const SORTERS = {
    value: (a, b) => b._valueScore - a._valueScore,
    priceAsc: (a, b) => a.price.low - b.price.low,
    reliability: (a, b) => b.reliability.value - a.reliability.value,
    resale: (a, b) => b.resale.value - a.resale.value,
    maintenance: (a, b) => a.maintenance.annual - b.maintenance.annual,
    cargo: (a, b) => b.cargo.behind2nd - a.cargo.behind2nd,
  };

  // Populated once in init() for O(1) id -> vehicle lookup (avoids Array#find per click).
  let vehicleById = new Map();

  // Cached element references, filled in init(). Avoids repeated getElementById
  // calls in applyFiltersAndSort(), which runs on every filter/sort interaction.
  const dom = {};

  function normalize(value, min, max, invert) {
    if (max === min) return 50;
    let n = ((value - min) / (max - min)) * 100;
    if (invert) n = 100 - n;
    return n;
  }

  function computeValueScores(vehicles) {
    const prices = vehicles.map((v) => v.price.low);
    const reliabilities = vehicles.map((v) => v.reliability.value);
    const resales = vehicles.map((v) => v.resale.value);
    const maints = vehicles.map((v) => v.maintenance.annual);
    const cargos = vehicles.map((v) => v.cargo.behind2nd);

    const ranges = {
      price: [Math.min(...prices), Math.max(...prices)],
      reliability: [Math.min(...reliabilities), Math.max(...reliabilities)],
      resale: [Math.min(...resales), Math.max(...resales)],
      maintenance: [Math.min(...maints), Math.max(...maints)],
      cargo: [Math.min(...cargos), Math.max(...cargos)],
    };

    vehicles.forEach((v) => {
      const priceScore = normalize(v.price.low, ranges.price[0], ranges.price[1], true);
      const reliabilityScore = normalize(v.reliability.value, ranges.reliability[0], ranges.reliability[1], false);
      const resaleScore = normalize(v.resale.value, ranges.resale[0], ranges.resale[1], false);
      const maintenanceScore = normalize(v.maintenance.annual, ranges.maintenance[0], ranges.maintenance[1], true);
      const cargoScore = normalize(v.cargo.behind2nd, ranges.cargo[0], ranges.cargo[1], false);

      const total =
        priceScore * WEIGHTS.price +
        reliabilityScore * WEIGHTS.reliability +
        resaleScore * WEIGHTS.resale +
        maintenanceScore * WEIGHTS.maintenance +
        cargoScore * WEIGHTS.cargo;

      v._valueScore = Math.round(total);
    });
  }

  function fmtMoney(n) {
    if (n == null) return "—";
    return "$" + n.toLocaleString("en-US");
  }

  function fmtCargo(n) {
    return n == null ? "—" : n + " cu ft";
  }

  function valueLabel(score) {
    if (score >= 75) return "Excellent";
    if (score >= 60) return "Great";
    if (score >= 45) return "Good";
    return "Fair";
  }

  function estBadge(isEstimated) {
    return isEstimated ? '<span class="est-badge" title="Analyst estimate; no single published figure covers this metric across all vehicles">est.</span>' : "";
  }

  function typicalPriceText(v) {
    const p = v.price;
    if (p.typicalLow == null) return "";
    const range = p.typicalHigh ? `${fmtMoney(p.typicalLow)} – ${fmtMoney(p.typicalHigh)}` : `${fmtMoney(p.typicalLow)}+`;
    return `Typical price: ${range}${p.typicalEstimated ? " (est.)" : ""}`;
  }

  // Small builders to cut the repetition in renderCards()/openDetail() down to one line per spec.
  function statCell(label, valueHtml) {
    return `<div><div class="stat-label">${label}</div><div class="stat-value">${valueHtml}</div></div>`;
  }

  function specRow(label, valueHtml) {
    return `<div><span class="spec-label">${label}</span><span class="spec-value">${valueHtml}</span></div>`;
  }

  function renderCards(vehicles) {
    dom.cards.innerHTML = vehicles
      .map(
        (v) => `
      <article class="card" data-id="${v.id}" tabindex="0" role="button" aria-label="View details for ${v.make} ${v.model}">
        <div class="card-top">
          <div>
            <h3 class="card-title">${v.make} ${v.model}</h3>
            <p class="card-class">${v.className} &middot; ${v.trimNote}</p>
          </div>
          <div class="value-badge" title="Value Score">
            <span class="num">${v._valueScore}</span>
            <span class="lbl">${valueLabel(v._valueScore)}</span>
          </div>
        </div>
        <div class="price-row">${fmtMoney(v.price.low)}${v.price.high ? " – " + fmtMoney(v.price.high) : ""}
          ${v.price.avgPaid ? `<div class="avg">Avg. paid: ${fmtMoney(v.price.avgPaid)}</div>` : ""}
          ${typicalPriceText(v) ? `<div class="avg">${typicalPriceText(v)}</div>` : ""}
        </div>
        <div class="stat-grid">
          ${statCell("Reliability", v.reliability.display + estBadge(v.reliability.estimated))}
          ${statCell("5-Yr Resale", v.resale.display + estBadge(v.resale.estimated))}
          ${statCell("Maintenance/yr", fmtMoney(v.maintenance.annual) + estBadge(v.maintenance.estimated))}
          ${statCell("Cargo (2nd row)", fmtCargo(v.cargo.behind2nd))}
          ${statCell("Seats", v.seats + (v.thirdRow !== "No" ? " (3rd row " + v.thirdRow.toLowerCase() + ")" : ""))}
          ${statCell("Towing", v.towing)}
        </div>
        <div class="card-cta">View details &amp; local dealers &rarr;</div>
      </article>
    `
      )
      .join("");
  }

  function renderTable(vehicles) {
    dom.tableBody.innerHTML = vehicles
      .map(
        (v) => `
      <tr data-id="${v.id}">
        <td>${v.make} ${v.model}</td>
        <td>${v.className}</td>
        <td>${fmtMoney(v.price.low)}</td>
        <td>${v._valueScore} (${valueLabel(v._valueScore)})</td>
        <td>${v.reliability.display}${estBadge(v.reliability.estimated)}</td>
        <td>${v.resale.display}${estBadge(v.resale.estimated)}</td>
        <td>${fmtMoney(v.maintenance.annual)}${estBadge(v.maintenance.estimated)}</td>
        <td>${v.drivetrain}</td>
        <td>${v.engine}</td>
        <td>${v.hp}</td>
        <td>${v.torque}</td>
        <td>${v.seats}</td>
        <td>${v.thirdRow}</td>
        <td>${fmtCargo(v.cargo.behind2nd)}</td>
        <td>${fmtCargo(v.cargo.maxCargo)}</td>
        <td>${v.mpgCombined}</td>
        <td>${v.towing}</td>
        <td>${v.groundClearance}</td>
      </tr>
    `
      )
      .join("");
  }

  function openDetail(id) {
    const v = vehicleById.get(id);
    if (!v) return;
    const dealers = DEALERS[v.dealerBrand] || [];

    dom.modalContent.innerHTML = `
      <h2 id="modal-title">${v.make} ${v.model} <span class="modal-meta">(${v.trimNote})</span></h2>
      <p class="modal-subtitle">${v.className}</p>
      <div class="detail-price">${fmtMoney(v.price.low)}${v.price.high ? " – " + fmtMoney(v.price.high) : ""}
        <span class="modal-meta">
          ${v.price.avgPaid ? " &middot; Avg. paid " + fmtMoney(v.price.avgPaid) : ""}${v.price.note ? " &middot; " + v.price.note : ""}
        </span>
        ${typicalPriceText(v) ? `<div class="modal-meta">${typicalPriceText(v)}</div>` : ""}
      </div>

      <div class="detail-section">
        <h3>Value Score: ${v._valueScore} / 100 (${valueLabel(v._valueScore)})</h3>
        <p>Weighted blend of price, reliability, resale value, maintenance cost, and cargo space relative to every SUV in this comparison. <button class="link-btn accent" id="modal-methodology-link">See methodology</button></p>
      </div>

      <div class="detail-section">
        <h3>Reliability &mdash; ${v.reliability.display}${estBadge(v.reliability.estimated)}</h3>
        <p>${v.reliability.detail}</p>
      </div>
      <div class="detail-section">
        <h3>5-Year Resale Value &mdash; ${v.resale.display}${estBadge(v.resale.estimated)}</h3>
        <p>${v.resale.detail}</p>
      </div>
      <div class="detail-section">
        <h3>Maintenance Cost &mdash; ~${fmtMoney(v.maintenance.annual)}/yr${estBadge(v.maintenance.estimated)}</h3>
        <p>${v.maintenance.detail}</p>
      </div>

      <div class="detail-section">
        <h3>Powertrain &amp; Capability</h3>
        <div class="spec-grid">
          ${specRow("Drivetrain", v.drivetrain)}
          ${specRow("Engine", v.engine)}
          ${specRow("Horsepower", v.hp)}
          ${specRow("Torque", v.torque)}
          ${specRow("Seats", v.seats)}
          ${specRow("3rd Row", v.thirdRow)}
          ${specRow("Cargo (behind 2nd row)", fmtCargo(v.cargo.behind2nd))}
          ${specRow("Max Cargo (seats folded)", fmtCargo(v.cargo.maxCargo))}
          ${specRow("MPG Combined", v.mpgCombined)}
          ${specRow("Towing", v.towing)}
          ${specRow("Ground Clearance", v.groundClearance)}
        </div>
        ${v.cargo.note ? `<p>${v.cargo.note}</p>` : ""}
      </div>

      <div class="detail-section">
        <h3>Functionality &amp; Features</h3>
        <ul class="feature-list">${v.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      </div>
      <div class="detail-section">
        <h3>${v.make} Dealers near Port St. Lucie, FL</h3>
        <ul class="dealer-list">
          ${dealers
            .map(
              (d) => `
            <li class="dealer-item">
              <strong>${d.name}</strong>
              ${d.address}<br/>
              ${d.phone} &middot; ${d.distance}<br/>
              <a href="${d.website}" target="_blank" rel="noopener noreferrer">${d.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      <div class="detail-section source-list">
        Sources: ${v.sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a>`).join(" &middot; ")}
      </div>
    `;

    openModal(dom.detailModal);
    dom.modalContent.querySelector("#modal-methodology-link").addEventListener("click", () => {
      closeModal(dom.detailModal);
      openModal(dom.methodologyModal);
    });
  }

  function openModal(modal) {
    modal.hidden = false;
  }

  function closeModal(modal) {
    modal.hidden = true;
  }

  function applyFiltersAndSort() {
    const maxPrice = parseInt(dom.maxPrice.value, 10);
    const minReliabilityOnly = dom.minReliability.checked;
    const thirdRowOnly = dom.thirdRowOnly.checked;
    const classFilter = dom.classSelect.value;
    const sortBy = dom.sortSelect.value;

    let list = SUV_DATA.filter((v) => v.price.low <= maxPrice);
    if (minReliabilityOnly) list = list.filter((v) => v.reliability.value >= 85);
    if (thirdRowOnly) list = list.filter((v) => v.thirdRow !== "No");
    if (classFilter !== "all") list = list.filter((v) => v.className === classFilter);

    list.sort(SORTERS[sortBy] || SORTERS.value);

    renderCards(list);
    renderTable(list);
  }

  // requestAnimationFrame throttle: the price slider fires many `input` events
  // while dragging — coalesce them to at most one re-render per frame.
  function rafThrottle(fn) {
    let scheduled = false;
    return (...args) => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        fn(...args);
      });
    };
  }

  function updateMaxPriceLabel() {
    const cap = parseInt(dom.maxPrice.max, 10);
    const val = parseInt(dom.maxPrice.value, 10);
    dom.maxPriceOut.textContent = val >= cap ? fmtMoney(val) + "+" : fmtMoney(val);
  }

  function init() {
    computeValueScores(SUV_DATA);
    vehicleById = new Map(SUV_DATA.map((v) => [v.id, v]));

    Object.assign(dom, {
      cards: document.getElementById("cards"),
      tableBody: document.querySelector("#compare-table tbody"),
      sortSelect: document.getElementById("sort-select"),
      classSelect: document.getElementById("class-select"),
      maxPrice: document.getElementById("max-price"),
      maxPriceOut: document.getElementById("max-price-out"),
      minReliability: document.getElementById("min-reliability"),
      thirdRowOnly: document.getElementById("third-row-only"),
      detailModal: document.getElementById("detail-modal"),
      modalContent: document.getElementById("modal-content"),
      modalClose: document.getElementById("modal-close"),
      modalBackdrop: document.getElementById("modal-backdrop"),
      methodologyModal: document.getElementById("methodology-modal"),
      openMethodology: document.getElementById("open-methodology"),
      methodologyClose: document.getElementById("methodology-close"),
      methodologyBackdrop: document.getElementById("methodology-backdrop"),
    });

    // Event delegation: one listener per container instead of re-binding a
    // click/keydown handler on every card/row after each re-render.
    dom.cards.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (card) openDetail(card.dataset.id);
    });
    dom.cards.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".card");
      if (!card) return;
      e.preventDefault();
      openDetail(card.dataset.id);
    });
    dom.tableBody.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      if (row) openDetail(row.dataset.id);
    });

    dom.sortSelect.addEventListener("change", applyFiltersAndSort);
    dom.minReliability.addEventListener("change", applyFiltersAndSort);
    dom.thirdRowOnly.addEventListener("change", applyFiltersAndSort);
    dom.classSelect.addEventListener("change", applyFiltersAndSort);

    const onPriceInput = rafThrottle(() => {
      updateMaxPriceLabel();
      applyFiltersAndSort();
    });
    dom.maxPrice.addEventListener("input", onPriceInput);

    dom.modalClose.addEventListener("click", () => closeModal(dom.detailModal));
    dom.modalBackdrop.addEventListener("click", () => closeModal(dom.detailModal));
    dom.openMethodology.addEventListener("click", () => openModal(dom.methodologyModal));
    dom.methodologyClose.addEventListener("click", () => closeModal(dom.methodologyModal));
    dom.methodologyBackdrop.addEventListener("click", () => closeModal(dom.methodologyModal));

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      closeModal(dom.detailModal);
      closeModal(dom.methodologyModal);
    });

    updateMaxPriceLabel();
    applyFiltersAndSort();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
