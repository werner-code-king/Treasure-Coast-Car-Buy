(function () {
  "use strict";

  const WEIGHTS = {
    reliability: 0.25,
    resale: 0.20,
    maintenance: 0.20,
    cargo: 0.15,
    price: 0.20,
  };

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

  function renderCards(vehicles) {
    const container = document.getElementById("cards");
    container.innerHTML = vehicles
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
          <div><div class="stat-label">Reliability</div><div class="stat-value">${v.reliability.display}${estBadge(v.reliability.estimated)}</div></div>
          <div><div class="stat-label">5-Yr Resale</div><div class="stat-value">${v.resale.display}${estBadge(v.resale.estimated)}</div></div>
          <div><div class="stat-label">Maintenance/yr</div><div class="stat-value">${fmtMoney(v.maintenance.annual)}${estBadge(v.maintenance.estimated)}</div></div>
          <div><div class="stat-label">Cargo (2nd row)</div><div class="stat-value">${fmtCargo(v.cargo.behind2nd)}</div></div>
          <div><div class="stat-label">Seats</div><div class="stat-value">${v.seats}${v.thirdRow !== "No" ? " (3rd row " + v.thirdRow.toLowerCase() + ")" : ""}</div></div>
          <div><div class="stat-label">Towing</div><div class="stat-value">${v.towing}</div></div>
        </div>
        <div class="card-cta">View details &amp; local dealers &rarr;</div>
      </article>
    `
      )
      .join("");

    container.querySelectorAll(".card").forEach((el) => {
      el.addEventListener("click", () => openDetail(el.dataset.id));
      el.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") openDetail(el.dataset.id);
      });
    });
  }

  function renderTable(vehicles) {
    const tbody = document.querySelector("#compare-table tbody");
    tbody.innerHTML = vehicles
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

    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.addEventListener("click", () => openDetail(tr.dataset.id));
    });
  }

  function openDetail(id) {
    const v = SUV_DATA.find((x) => x.id === id);
    if (!v) return;
    const dealers = DEALERS[v.dealerBrand] || [];

    const modal = document.getElementById("detail-modal");
    const content = document.getElementById("modal-content");

    content.innerHTML = `
      <h2 id="modal-title">${v.make} ${v.model} <span style="font-weight:400; color:var(--text-dim); font-size:0.9rem;">(${v.trimNote})</span></h2>
      <p style="margin-top:-8px; color:var(--text-dim); font-size:0.85rem;">${v.className}</p>
      <div class="detail-price">${fmtMoney(v.price.low)}${v.price.high ? " – " + fmtMoney(v.price.high) : ""}
        <span style="font-size:0.8rem; font-weight:400; color:var(--text-dim);">
          ${v.price.avgPaid ? " &middot; Avg. paid " + fmtMoney(v.price.avgPaid) : ""}${v.price.note ? " &middot; " + v.price.note : ""}
        </span>
        ${typicalPriceText(v) ? `<div style="font-size:0.8rem; font-weight:400; color:var(--text-dim);">${typicalPriceText(v)}</div>` : ""}
      </div>

      <div class="detail-section">
        <h3>Value Score: ${v._valueScore} / 100 (${valueLabel(v._valueScore)})</h3>
        <p>Weighted blend of price, reliability, resale value, maintenance cost, and cargo space relative to every SUV in this comparison. <button class="link-btn" style="color:var(--accent);" id="modal-methodology-link">See methodology</button></p>
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
          <div><span class="spec-label">Drivetrain</span><span class="spec-value">${v.drivetrain}</span></div>
          <div><span class="spec-label">Engine</span><span class="spec-value">${v.engine}</span></div>
          <div><span class="spec-label">Horsepower</span><span class="spec-value">${v.hp}</span></div>
          <div><span class="spec-label">Torque</span><span class="spec-value">${v.torque}</span></div>
          <div><span class="spec-label">Seats</span><span class="spec-value">${v.seats}</span></div>
          <div><span class="spec-label">3rd Row</span><span class="spec-value">${v.thirdRow}</span></div>
          <div><span class="spec-label">Cargo (behind 2nd row)</span><span class="spec-value">${fmtCargo(v.cargo.behind2nd)}</span></div>
          <div><span class="spec-label">Max Cargo (seats folded)</span><span class="spec-value">${fmtCargo(v.cargo.maxCargo)}</span></div>
          <div><span class="spec-label">MPG Combined</span><span class="spec-value">${v.mpgCombined}</span></div>
          <div><span class="spec-label">Towing</span><span class="spec-value">${v.towing}</span></div>
          <div><span class="spec-label">Ground Clearance</span><span class="spec-value">${v.groundClearance}</span></div>
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

    modal.hidden = false;
    document.getElementById("modal-methodology-link").addEventListener("click", () => {
      modal.hidden = true;
      document.getElementById("methodology-modal").hidden = false;
    });
  }

  function applyFiltersAndSort() {
    const maxPrice = parseInt(document.getElementById("max-price").value, 10);
    const minReliabilityOnly = document.getElementById("min-reliability").checked;
    const thirdRowOnly = document.getElementById("third-row-only").checked;
    const classFilter = document.getElementById("class-select").value;
    const sortBy = document.getElementById("sort-select").value;

    let list = SUV_DATA.filter((v) => v.price.low <= maxPrice);
    if (minReliabilityOnly) list = list.filter((v) => v.reliability.value >= 85);
    if (thirdRowOnly) list = list.filter((v) => v.thirdRow !== "No");
    if (classFilter !== "all") list = list.filter((v) => v.className === classFilter);

    const sorters = {
      value: (a, b) => b._valueScore - a._valueScore,
      priceAsc: (a, b) => a.price.low - b.price.low,
      reliability: (a, b) => b.reliability.value - a.reliability.value,
      resale: (a, b) => b.resale.value - a.resale.value,
      maintenance: (a, b) => a.maintenance.annual - b.maintenance.annual,
      cargo: (a, b) => b.cargo.behind2nd - a.cargo.behind2nd,
    };
    list.sort(sorters[sortBy] || sorters.value);

    renderCards(list);
    renderTable(list);
  }

  function init() {
    computeValueScores(SUV_DATA);

    document.getElementById("sort-select").addEventListener("change", applyFiltersAndSort);
    document.getElementById("min-reliability").addEventListener("change", applyFiltersAndSort);
    document.getElementById("third-row-only").addEventListener("change", applyFiltersAndSort);
    document.getElementById("class-select").addEventListener("change", applyFiltersAndSort);

    const maxPriceInput = document.getElementById("max-price");
    const maxPriceOut = document.getElementById("max-price-out");
    const maxPriceCap = parseInt(maxPriceInput.max, 10);
    maxPriceInput.addEventListener("input", () => {
      const val = parseInt(maxPriceInput.value, 10);
      maxPriceOut.textContent = val >= maxPriceCap ? fmtMoney(val) + "+" : fmtMoney(val);
      applyFiltersAndSort();
    });

    document.getElementById("modal-close").addEventListener("click", () => {
      document.getElementById("detail-modal").hidden = true;
    });
    document.getElementById("modal-backdrop").addEventListener("click", () => {
      document.getElementById("detail-modal").hidden = true;
    });

    document.getElementById("open-methodology").addEventListener("click", () => {
      document.getElementById("methodology-modal").hidden = false;
    });
    document.getElementById("methodology-close").addEventListener("click", () => {
      document.getElementById("methodology-modal").hidden = true;
    });
    document.getElementById("methodology-backdrop").addEventListener("click", () => {
      document.getElementById("methodology-modal").hidden = true;
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.getElementById("detail-modal").hidden = true;
        document.getElementById("methodology-modal").hidden = true;
      }
    });

    applyFiltersAndSort();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
