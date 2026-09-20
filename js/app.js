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

  // Glossary content for the "Criteria & Rankings" tab — one entry per
  // column in the Full Data Table (29 metrics; the 30th is the vehicle
  // name/trim itself, which isn't a "measurement").
  const METRIC_GROUPS = [
    {
      title: "Pricing & Value",
      items: [
        { label: "Starting Price", detail: "MSRP for this specific trim, as published by the manufacturer or KBB/Edmunds." },
        { label: "Value Score", detail: "0–100 blend of price, reliability, resale, maintenance, and cargo, normalized across all 83 rows (25/20/20/15/20% weights)." },
      ],
    },
    {
      title: "Reliability & Ownership Cost",
      items: [
        { label: "Reliability", detail: "J.D. Power / Consumer Reports / Edmunds ratings, converted to a 0–100 scale." },
        { label: "5-Yr Resale", detail: "Percentage of MSRP retained after 5 years (KBB/CarEdge)." },
        { label: "Est. Annual Maintenance", detail: "Estimated yearly maintenance/repair cost (RepairPal, KBB 5-Yr Cost to Own)." },
        { label: "Est. Annual Insurance", detail: "Estimated yearly insurance premium (CarEdge market averages)." },
        { label: "Basic Warranty", detail: "Bumper-to-bumper coverage period." },
        { label: "Powertrain Warranty", detail: "Engine/transmission/drivetrain coverage period." },
      ],
    },
    {
      title: "Performance & Powertrain",
      items: [
        { label: "Drivetrain", detail: "FWD/AWD/4WD availability, standard vs. optional." },
        { label: "Engine", detail: "Displacement and engine type/configuration." },
        { label: "Transmission", detail: "Transmission type (CVT, automatic, eCVT, etc.)." },
        { label: "HP", detail: "Peak horsepower." },
        { label: "Torque", detail: "Peak torque (lb-ft)." },
        { label: "0–60 mph", detail: "Published or tested acceleration time." },
        { label: "Towing", detail: "Maximum tow rating, properly equipped." },
      ],
    },
    {
      title: "Practicality",
      items: [
        { label: "Class", detail: "SUV segment: Compact, Midsize (2-row), or Midsize (3-Row)." },
        { label: "Seats", detail: "Standard seating capacity." },
        { label: "3rd Row", detail: "Whether a 3rd row is standard, available, or not offered." },
        { label: "Cargo (2nd row)", detail: "Cubic feet of cargo space behind the 2nd row." },
        { label: "Max Cargo", detail: "Cubic feet with all rear seats folded flat." },
        { label: "Ground Clearance", detail: "Unladen ground clearance." },
        { label: "Curb Weight", detail: "Manufacturer-published curb weight." },
        { label: "Wheelbase", detail: "Distance between front and rear axles." },
      ],
    },
    {
      title: "Efficiency & Range",
      items: [
        { label: "MPG City / Hwy / Combined", detail: "EPA fuel-economy ratings." },
        { label: "Fuel Tank", detail: "Fuel tank capacity in gallons." },
      ],
    },
    {
      title: "Safety",
      items: [
        { label: "NHTSA Rating", detail: "Overall NHTSA crash-test star rating." },
        { label: "IIHS Award", detail: "IIHS Top Safety Pick / Top Safety Pick+ status." },
      ],
    },
  ];

  // Metrics with a clear "better" direction, used to compute the Category
  // Leaders grid. dir: 1 = lower is better, -1 = higher is better. Purely
  // descriptive columns (class, drivetrain, engine, transmission, seats,
  // 3rd row, curb weight, wheelbase, fuel tank, IIHS) have no single "best"
  // value and are glossary-only.
  const RANKED_METRICS = [
    { label: "Best Value Score", dir: -1, get: (v) => v._valueScore, fmt: (v) => `${v._valueScore} (${valueLabel(v._valueScore)})` },
    { label: "Lowest Starting Price", dir: 1, get: (v) => v.price.low, fmt: (v) => fmtMoney(v.price.low) },
    { label: "Best Reliability", dir: -1, get: (v) => v.reliability.value, fmt: (v) => v.reliability.display },
    { label: "Best 5-Yr Resale", dir: -1, get: (v) => v.resale.value, fmt: (v) => v.resale.display },
    { label: "Lowest Maintenance Cost", dir: 1, get: (v) => v.maintenance.annual, fmt: (v) => fmtMoney(v.maintenance.annual) + "/yr" },
    { label: "Lowest Insurance Cost", dir: 1, get: (v) => v.insurance.annual, fmt: (v) => v.insurance.display },
    { label: "Most Cargo (2nd Row)", dir: -1, get: (v) => v.cargo.behind2nd, fmt: (v) => fmtCargo(v.cargo.behind2nd) },
    { label: "Most Max Cargo", dir: -1, get: (v) => v.cargo.maxCargo, fmt: (v) => fmtCargo(v.cargo.maxCargo) },
    { label: "Best MPG City", dir: -1, get: (v) => parseLeadingNumber(v.mpgCity), fmt: (v) => v.mpgCity },
    { label: "Best MPG Highway", dir: -1, get: (v) => parseLeadingNumber(v.mpgHighway), fmt: (v) => v.mpgHighway },
    { label: "Best MPG Combined", dir: -1, get: (v) => parseLeadingNumber(v.mpgCombined), fmt: (v) => v.mpgCombined },
    { label: "Quickest 0–60 mph", dir: 1, get: (v) => parseLeadingNumber(v.zeroToSixty), fmt: (v) => v.zeroToSixty },
    { label: "Most Horsepower", dir: -1, get: (v) => parseLeadingNumber(v.hp), fmt: (v) => v.hp },
    { label: "Most Torque", dir: -1, get: (v) => parseLeadingNumber(v.torque), fmt: (v) => v.torque },
    { label: "Highest Tow Rating", dir: -1, get: (v) => parseLeadingNumber(v.towing), fmt: (v) => v.towing },
    { label: "Most Ground Clearance", dir: -1, get: (v) => parseLeadingNumber(v.groundClearance), fmt: (v) => v.groundClearance },
    { label: "Longest Basic Warranty", dir: -1, get: (v) => parseLeadingNumber(v.warrantyBasic), fmt: (v) => v.warrantyBasic },
    { label: "Longest Powertrain Warranty", dir: -1, get: (v) => parseLeadingNumber(v.warrantyPowertrain), fmt: (v) => v.warrantyPowertrain },
    { label: "Best NHTSA Rating", dir: -1, get: (v) => v.nhtsa.stars, fmt: (v) => v.nhtsa.display },
  ];

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

  // Picks the single best row for a ranked metric across the *entire*
  // dataset (not the current filter selection) — this tab is a reference,
  // independent of whatever the user has filtered/sorted elsewhere.
  function computeLeader(metric) {
    let best = null;
    let bestVal = null;
    for (const v of SUV_DATA) {
      const val = metric.get(v);
      if (val == null) continue;
      if (bestVal === null || (metric.dir === 1 ? val < bestVal : val > bestVal)) {
        bestVal = val;
        best = v;
      }
    }
    return best;
  }

  function renderCriteria() {
    dom.glossaryList.innerHTML = METRIC_GROUPS.map(
      (group) => `
      <div class="glossary-group">
        <h3>${group.title}</h3>
        <dl class="glossary-dl">
          ${group.items.map((item) => `<dt>${item.label}</dt><dd>${item.detail}</dd>`).join("")}
        </dl>
      </div>
    `
    ).join("");

    dom.leaderGrid.innerHTML = RANKED_METRICS.map((metric) => {
      const winner = computeLeader(metric);
      if (!winner) return "";
      return `
        <article class="leader-card" data-id="${winner.id}" tabindex="0" role="button" aria-label="View details for ${winner.make} ${winner.model}">
          <div class="leader-label">${metric.label}</div>
          <div class="leader-winner">${winner.make} ${winner.model} <span class="leader-trim">${winner.trimNote}</span></div>
          <div class="leader-value">${metric.fmt(winner)}</div>
        </article>
      `;
    }).join("");
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
      tabCriteria: document.getElementById("tab-criteria"),
      panelCards: document.getElementById("panel-cards"),
      panelTable: document.getElementById("panel-table"),
      panelCriteria: document.getElementById("panel-criteria"),
      glossaryList: document.getElementById("glossary-list"),
      leaderGrid: document.getElementById("leader-grid"),
    });

    const tabs = [
      { btn: dom.tabCards, panel: dom.panelCards },
      { btn: dom.tabTable, panel: dom.panelTable },
      { btn: dom.tabCriteria, panel: dom.panelCriteria },
    ];
    function activateTab(activeBtn) {
      tabs.forEach(({ btn, panel }) => {
        const isActive = btn === activeBtn;
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
        panel.hidden = !isActive;
      });
    }
    tabs.forEach(({ btn }) => btn.addEventListener("click", () => activateTab(btn)));

    dom.leaderGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".leader-card");
      if (card) openDetail(card.dataset.id);
    });
    dom.leaderGrid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".leader-card");
      if (!card) return;
      e.preventDefault();
      openDetail(card.dataset.id);
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
    renderCriteria();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
