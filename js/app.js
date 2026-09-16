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

  // Value accessors for the sortable comparison-table columns, keyed by each
  // <th data-key> in index.html. Free-text spec fields (hp, torque, mpg,
  // towing, ground clearance) are reduced to their first number so a column
  // like "1,750–3,500 lb" sorts sensibly by its lower bound.
  const THIRD_ROW_RANK = { No: 0, Available: 1, Yes: 2 };
  const TABLE_COLUMNS = {
    name: (v) => `${v.make} ${v.model} ${v.trimNote}`,
    class: (v) => v.className,
    price: (v) => v.price.low,
    value: (v) => v._valueScore,
    reliability: (v) => v.reliability.value,
    resale: (v) => v.resale.value,
    maintenance: (v) => v.maintenance.annual,
    insurance: (v) => v.insurance.annual,
    drivetrain: (v) => v.drivetrain,
    engine: (v) => v.engine,
    transmission: (v) => v.transmission,
    hp: (v) => parseLeadingNumber(v.hp),
    torque: (v) => parseLeadingNumber(v.torque),
    zeroToSixty: (v) => parseLeadingNumber(v.zeroToSixty),
    seats: (v) => parseLeadingNumber(v.seats),
    thirdRow: (v) => THIRD_ROW_RANK[v.thirdRow] ?? 0,
    cargo: (v) => v.cargo.behind2nd,
    maxCargo: (v) => v.cargo.maxCargo,
    mpgCity: (v) => parseLeadingNumber(v.mpgCity),
    mpgHighway: (v) => parseLeadingNumber(v.mpgHighway),
    mpg: (v) => parseLeadingNumber(v.mpgCombined),
    fuelTank: (v) => parseLeadingNumber(v.fuelTank),
    towing: (v) => parseLeadingNumber(v.towing),
    groundClearance: (v) => parseLeadingNumber(v.groundClearance),
    curbWeight: (v) => parseLeadingNumber(v.curbWeight),
    wheelbase: (v) => parseLeadingNumber(v.wheelbase),
    nhtsa: (v) => v.nhtsa.stars,
    iihs: (v) => v.iihs.rank,
    warrantyBasic: (v) => parseLeadingNumber(v.warrantyBasic),
    warrantyPowertrain: (v) => parseLeadingNumber(v.warrantyPowertrain),
  };

  // { key: null | one of TABLE_COLUMNS, dir: 1 | -1 }. Independent of the
  // "Sort by" dropdown, which only controls card order.
  const tableSort = { key: null, dir: 1 };

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

  // Pulls the first number out of a free-text spec string, e.g. "203 hp" -> 203,
  // "284–295 hp" -> 284, "~7.7\"" -> 7.7. Returns null when there's no number
  // (e.g. "System torque not directly comparable"), which the comparator below
  // always sorts to the end regardless of direction.
  function parseLeadingNumber(str) {
    if (str == null) return null;
    const match = String(str).replace(/,/g, "").match(/-?\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : null;
  }

  function compareByColumn(key, dir) {
    const accessor = TABLE_COLUMNS[key];
    return (a, b) => {
      const av = accessor(a);
      const bv = accessor(b);
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === "string") return av.localeCompare(bv) * dir;
      return (av - bv) * dir;
    };
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
            <h3 class="card-title">${v.make} ${v.model} <span class="card-trim">${v.trimNote}</span></h3>
            <p class="card-class">${v.className}</p>
          </div>
          <div class="value-badge" title="Value Score">
            <span class="num">${v._valueScore}</span>
            <span class="lbl">${valueLabel(v._valueScore)}</span>
          </div>
        </div>
        <div class="price-row">${fmtMoney(v.price.low)}${estBadge(v.price.estimated)}</div>
        <div class="stat-grid">
          ${statCell("Reliability", v.reliability.display + estBadge(v.reliability.estimated))}
          ${statCell("5-Yr Resale", v.resale.display + estBadge(v.resale.estimated))}
          ${statCell("Maintenance/yr", fmtMoney(v.maintenance.annual) + estBadge(v.maintenance.estimated))}
          ${statCell("Insurance/yr", v.insurance.display + estBadge(v.insurance.estimated))}
          ${statCell("Cargo (2nd row)", fmtCargo(v.cargo.behind2nd))}
          ${statCell("Seats", v.seats + (v.thirdRow !== "No" ? " (3rd row " + v.thirdRow.toLowerCase() + ")" : ""))}
          ${statCell("0&ndash;60 mph", v.zeroToSixty)}
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
        <td>${v.make} ${v.model} <span class="table-trim">${v.trimNote}</span></td>
        <td>${v.className}</td>
        <td>${fmtMoney(v.price.low)}${estBadge(v.price.estimated)}</td>
        <td>${v._valueScore} (${valueLabel(v._valueScore)})</td>
        <td>${v.reliability.display}${estBadge(v.reliability.estimated)}</td>
        <td>${v.resale.display}${estBadge(v.resale.estimated)}</td>
        <td>${fmtMoney(v.maintenance.annual)}${estBadge(v.maintenance.estimated)}</td>
        <td>${v.insurance.display}${estBadge(v.insurance.estimated)}</td>
        <td>${v.drivetrain}</td>
        <td>${v.engine}</td>
        <td>${v.transmission}</td>
        <td>${v.hp}</td>
        <td>${v.torque}</td>
        <td>${v.zeroToSixty}</td>
        <td>${v.seats}</td>
        <td>${v.thirdRow}</td>
        <td>${fmtCargo(v.cargo.behind2nd)}</td>
        <td>${fmtCargo(v.cargo.maxCargo)}</td>
        <td>${v.mpgCity}</td>
        <td>${v.mpgHighway}</td>
        <td>${v.mpgCombined}</td>
        <td>${v.fuelTank}</td>
        <td>${v.towing}</td>
        <td>${v.groundClearance}</td>
        <td>${v.curbWeight}</td>
        <td>${v.wheelbase}</td>
        <td>${v.nhtsa.display}${estBadge(v.nhtsa.estimated)}</td>
        <td>${v.iihs.display}${estBadge(v.iihs.estimated)}</td>
        <td>${v.warrantyBasic}</td>
        <td>${v.warrantyPowertrain}</td>
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
      <h2 id="modal-title">${v.make} ${v.model} <span class="modal-meta">(${v.trimNote} trim)</span></h2>
      <p class="modal-subtitle">${v.className}</p>
      <div class="detail-price">${fmtMoney(v.price.low)}${estBadge(v.price.estimated)}
        <span class="modal-meta">MSRP for the ${v.trimNote} trim</span>
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
        <h3>Insurance Cost &mdash; ${v.insurance.display}${estBadge(v.insurance.estimated)}</h3>
        <p>${v.insurance.detail}</p>
      </div>

      <div class="detail-section">
        <h3>Safety &amp; Warranty</h3>
        <div class="spec-grid">
          ${specRow("NHTSA Rating", v.nhtsa.display + estBadge(v.nhtsa.estimated))}
          ${specRow("IIHS Award", v.iihs.display + estBadge(v.iihs.estimated))}
          ${specRow("Basic Warranty", v.warrantyBasic)}
          ${specRow("Powertrain Warranty", v.warrantyPowertrain)}
        </div>
      </div>

      <div class="detail-section">
        <h3>Powertrain &amp; Capability</h3>
        <div class="spec-grid">
          ${specRow("Drivetrain", v.drivetrain)}
          ${specRow("Engine", v.engine)}
          ${specRow("Transmission", v.transmission)}
          ${specRow("Horsepower", v.hp)}
          ${specRow("Torque", v.torque)}
          ${specRow("0&ndash;60 mph", v.zeroToSixty)}
          ${specRow("Seats", v.seats)}
          ${specRow("3rd Row", v.thirdRow)}
          ${specRow("Cargo (behind 2nd row)", fmtCargo(v.cargo.behind2nd))}
          ${specRow("Max Cargo (seats folded)", fmtCargo(v.cargo.maxCargo))}
          ${specRow("MPG City", v.mpgCity)}
          ${specRow("MPG Highway", v.mpgHighway)}
          ${specRow("MPG Combined", v.mpgCombined)}
          ${specRow("Fuel Tank", v.fuelTank)}
          ${specRow("Towing", v.towing)}
          ${specRow("Ground Clearance", v.groundClearance)}
          ${specRow("Curb Weight", v.curbWeight)}
          ${specRow("Wheelbase", v.wheelbase)}
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
    renderTable(tableSort.key ? [...list].sort(compareByColumn(tableSort.key, tableSort.dir)) : list);
  }

  function updateSortIndicators() {
    dom.tableHead.querySelectorAll("th[data-key]").forEach((th) => {
      th.classList.remove("sort-asc", "sort-desc");
      if (th.dataset.key === tableSort.key) {
        th.classList.add(tableSort.dir === 1 ? "sort-asc" : "sort-desc");
      }
    });
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
      tableHead: document.querySelector("#compare-table thead"),
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
      tabCards: document.getElementById("tab-cards"),
      tabTable: document.getElementById("tab-table"),
      panelCards: document.getElementById("panel-cards"),
      panelTable: document.getElementById("panel-table"),
    });

    function activateTab(tabBtn, panel, otherTabBtn, otherPanel) {
      tabBtn.setAttribute("aria-selected", "true");
      otherTabBtn.setAttribute("aria-selected", "false");
      panel.hidden = false;
      otherPanel.hidden = true;
    }
    dom.tabCards.addEventListener("click", () => activateTab(dom.tabCards, dom.panelCards, dom.tabTable, dom.panelTable));
    dom.tabTable.addEventListener("click", () => activateTab(dom.tabTable, dom.panelTable, dom.tabCards, dom.panelCards));

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
    dom.tableHead.addEventListener("click", (e) => {
      const th = e.target.closest("th[data-key]");
      if (!th) return;
      const key = th.dataset.key;
      tableSort.dir = tableSort.key === key ? tableSort.dir * -1 : 1;
      tableSort.key = key;
      updateSortIndicators();
      applyFiltersAndSort();
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
