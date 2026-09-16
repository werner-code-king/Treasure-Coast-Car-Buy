/*
 * SUV data across 30 car-buying and performance metrics, broken out by
 * individual trim level (3-5 trims per model/powertrain, 55 rows total) so
 * price and value comparisons reflect what a specific trim actually costs
 * rather than a nameplate-wide range. Pricing (starting MSRP, resale,
 * maintenance, insurance), safety (NHTSA, IIHS, warranty), and performance
 * (engine, 0-60, transmission, MPG, towing, dimensions) compiled September
 * 2026 from KBB, Edmunds, TrueCar, CarEdge, J.D. Power, RepairPal, Auto
 * Reliability Index, iSeeCars, Cars.com, NHTSA, IIHS, manufacturer trim/
 * pricing pages, and dealership sites. See each vehicle's `sources` array
 * and the "Data & Methodology" panel in the app for details.
 *
 * Fields marked `estimated: true` (including `price.estimated`) are analyst
 * estimates — a trim price interpolated between two published price points,
 * qualitative source language, shared-platform inference (e.g. a hybrid
 * variant assumed to carry over a gas sibling's unconfirmed spec), or a lack
 * of trim-specific data — rather than a figure stated directly by a source.
 * Everything else is stated verbatim by a cited source.
 *
 * Reliability, resale, maintenance, insurance, safety, and powertrain specs
 * are researched at the nameplate/powertrain level (not per trim, since
 * these generally don't vary by trim) and are shared across every trim row
 * within the same model/powertrain family; only price (and occasionally
 * drivetrain availability, noted in the `drivetrain` field) is trim-specific.
 *
 * The Value Score methodology is unchanged: reliability 25% / resale 20% /
 * maintenance 20% / cargo 15% / starting price 20%, normalized across every
 * row in this file. Because reliability/resale/maintenance/cargo are shared
 * within a family, higher trims of the same model score lower on Value only
 * because they cost more for the same core vehicle — the score does not
 * capture the extra content those trims add.
 *
 * Note: Toyota made the RAV4 Hybrid standard across its whole 2026 lineup
 * (no separate gas-only RAV4 is sold this year), so the RAV4 Gas family from
 * earlier versions of this dataset has been merged into RAV4 Hybrid below.
 */

const SUV_DATA = [
  {
    id: "rav4-hybrid-le",
    make: "Toyota",
    model: "RAV4 Hybrid",
    trimNote: "LE",
    className: "Compact SUV",
    drivetrain: "FWD standard (AWD standard on Woodland/Limited; +$1,400 on LE/SE/XLE Premium)",
    price: {
      low: 33350,
      estimated: false
    },
    engine: "2.5L I4 + electric motors",
    hp: "236 hp (system)",
    torque: "System torque not directly comparable to gas engines",
    zeroToSixty: "~7.5 sec",
    transmission: "eCVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "47",
    mpgHighway: "40",
    mpgCombined: "~44",
    fuelTank: "14.5 gal",
    curbWeight: "3,640–3,920 lb",
    wheelbase: "105.9\"",
    towing: "1,750–3,500 lb",
    groundClearance: "~8.1\"",
    reliability: {
      value: 95,
      display: "Top-tier",
      detail: "Shares the RAV4's top-tier reliability reputation; the Hybrid powertrain has been in production since 2016 with a strong track record.",
      estimated: true
    },
    resale: {
      value: 75,
      display: "Excellent",
      detail: "Hybrid RAV4s have historically commanded a resale premium over the gas model due to sustained demand.",
      estimated: true
    },
    maintenance: {
      annual: 650,
      display: "Moderate",
      detail: "Fuel savings help offset ownership cost; hybrid-specific service intervals are similar to the gas model's.",
      estimated: true
    },
    insurance: {
      annual: 1990,
      display: "$1,990/yr",
      detail: "Based on the RAV4 nameplate-wide CarEdge average; not hybrid-specific.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (carried from prior generation)",
      estimated: true
    },
    iihs: {
      rank: 0,
      display: "Not yet rated for MY2026 (redesign under evaluation)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 37.8,
      maxCargo: 70.4
    },
    features: [
      "Toyota's 2026 redesign made Hybrid the RAV4's standard powertrain — there is no separate gas-only model this year.",
      "40+ mpg combined on every trim",
      "Toyota Safety Sense standard"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "Edmunds – 2026 RAV4 Pricing by Trim",
        url: "https://www.edmunds.com/car-news/2026-toyota-rav4-pricing.html"
      },
      {
        label: "J.D. Power – 2026 RAV4",
        url: "https://www.jdpower.com/cars/2026/toyota/rav4"
      },
      {
        label: "RAV4Life – Specs Guide",
        url: "https://rav4life.com/2026-toyota-rav4-specs-guide-engine-mpg-dimensions-towing-trim-breakdown/"
      }
    ]
  },
  {
    id: "rav4-hybrid-se",
    make: "Toyota",
    model: "RAV4 Hybrid",
    trimNote: "SE",
    className: "Compact SUV",
    drivetrain: "FWD standard (AWD standard on Woodland/Limited; +$1,400 on LE/SE/XLE Premium)",
    price: {
      low: 36150,
      estimated: false
    },
    engine: "2.5L I4 + electric motors",
    hp: "236 hp (system)",
    torque: "System torque not directly comparable to gas engines",
    zeroToSixty: "~7.5 sec",
    transmission: "eCVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "47",
    mpgHighway: "40",
    mpgCombined: "~44",
    fuelTank: "14.5 gal",
    curbWeight: "3,640–3,920 lb",
    wheelbase: "105.9\"",
    towing: "1,750–3,500 lb",
    groundClearance: "~8.1\"",
    reliability: {
      value: 95,
      display: "Top-tier",
      detail: "Shares the RAV4's top-tier reliability reputation; the Hybrid powertrain has been in production since 2016 with a strong track record.",
      estimated: true
    },
    resale: {
      value: 75,
      display: "Excellent",
      detail: "Hybrid RAV4s have historically commanded a resale premium over the gas model due to sustained demand.",
      estimated: true
    },
    maintenance: {
      annual: 650,
      display: "Moderate",
      detail: "Fuel savings help offset ownership cost; hybrid-specific service intervals are similar to the gas model's.",
      estimated: true
    },
    insurance: {
      annual: 1990,
      display: "$1,990/yr",
      detail: "Based on the RAV4 nameplate-wide CarEdge average; not hybrid-specific.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (carried from prior generation)",
      estimated: true
    },
    iihs: {
      rank: 0,
      display: "Not yet rated for MY2026 (redesign under evaluation)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 37.8,
      maxCargo: 70.4
    },
    features: [
      "Toyota's 2026 redesign made Hybrid the RAV4's standard powertrain — there is no separate gas-only model this year.",
      "40+ mpg combined on every trim",
      "Toyota Safety Sense standard"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "Edmunds – 2026 RAV4 Pricing by Trim",
        url: "https://www.edmunds.com/car-news/2026-toyota-rav4-pricing.html"
      },
      {
        label: "J.D. Power – 2026 RAV4",
        url: "https://www.jdpower.com/cars/2026/toyota/rav4"
      },
      {
        label: "RAV4Life – Specs Guide",
        url: "https://rav4life.com/2026-toyota-rav4-specs-guide-engine-mpg-dimensions-towing-trim-breakdown/"
      }
    ]
  },
  {
    id: "rav4-hybrid-xle-premium",
    make: "Toyota",
    model: "RAV4 Hybrid",
    trimNote: "XLE Premium",
    className: "Compact SUV",
    drivetrain: "FWD standard (AWD standard on Woodland/Limited; +$1,400 on LE/SE/XLE Premium)",
    price: {
      low: 37550,
      estimated: false
    },
    engine: "2.5L I4 + electric motors",
    hp: "236 hp (system)",
    torque: "System torque not directly comparable to gas engines",
    zeroToSixty: "~7.5 sec",
    transmission: "eCVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "47",
    mpgHighway: "40",
    mpgCombined: "~44",
    fuelTank: "14.5 gal",
    curbWeight: "3,640–3,920 lb",
    wheelbase: "105.9\"",
    towing: "1,750–3,500 lb",
    groundClearance: "~8.1\"",
    reliability: {
      value: 95,
      display: "Top-tier",
      detail: "Shares the RAV4's top-tier reliability reputation; the Hybrid powertrain has been in production since 2016 with a strong track record.",
      estimated: true
    },
    resale: {
      value: 75,
      display: "Excellent",
      detail: "Hybrid RAV4s have historically commanded a resale premium over the gas model due to sustained demand.",
      estimated: true
    },
    maintenance: {
      annual: 650,
      display: "Moderate",
      detail: "Fuel savings help offset ownership cost; hybrid-specific service intervals are similar to the gas model's.",
      estimated: true
    },
    insurance: {
      annual: 1990,
      display: "$1,990/yr",
      detail: "Based on the RAV4 nameplate-wide CarEdge average; not hybrid-specific.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (carried from prior generation)",
      estimated: true
    },
    iihs: {
      rank: 0,
      display: "Not yet rated for MY2026 (redesign under evaluation)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 37.8,
      maxCargo: 70.4
    },
    features: [
      "Toyota's 2026 redesign made Hybrid the RAV4's standard powertrain — there is no separate gas-only model this year.",
      "40+ mpg combined on every trim",
      "Toyota Safety Sense standard"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "Edmunds – 2026 RAV4 Pricing by Trim",
        url: "https://www.edmunds.com/car-news/2026-toyota-rav4-pricing.html"
      },
      {
        label: "J.D. Power – 2026 RAV4",
        url: "https://www.jdpower.com/cars/2026/toyota/rav4"
      },
      {
        label: "RAV4Life – Specs Guide",
        url: "https://rav4life.com/2026-toyota-rav4-specs-guide-engine-mpg-dimensions-towing-trim-breakdown/"
      }
    ]
  },
  {
    id: "rav4-hybrid-woodland",
    make: "Toyota",
    model: "RAV4 Hybrid",
    trimNote: "Woodland",
    className: "Compact SUV",
    drivetrain: "FWD standard (AWD standard on Woodland/Limited; +$1,400 on LE/SE/XLE Premium)",
    price: {
      low: 41350,
      estimated: false
    },
    engine: "2.5L I4 + electric motors",
    hp: "236 hp (system)",
    torque: "System torque not directly comparable to gas engines",
    zeroToSixty: "~7.5 sec",
    transmission: "eCVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "47",
    mpgHighway: "40",
    mpgCombined: "~44",
    fuelTank: "14.5 gal",
    curbWeight: "3,640–3,920 lb",
    wheelbase: "105.9\"",
    towing: "1,750–3,500 lb",
    groundClearance: "~8.1\"",
    reliability: {
      value: 95,
      display: "Top-tier",
      detail: "Shares the RAV4's top-tier reliability reputation; the Hybrid powertrain has been in production since 2016 with a strong track record.",
      estimated: true
    },
    resale: {
      value: 75,
      display: "Excellent",
      detail: "Hybrid RAV4s have historically commanded a resale premium over the gas model due to sustained demand.",
      estimated: true
    },
    maintenance: {
      annual: 650,
      display: "Moderate",
      detail: "Fuel savings help offset ownership cost; hybrid-specific service intervals are similar to the gas model's.",
      estimated: true
    },
    insurance: {
      annual: 1990,
      display: "$1,990/yr",
      detail: "Based on the RAV4 nameplate-wide CarEdge average; not hybrid-specific.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (carried from prior generation)",
      estimated: true
    },
    iihs: {
      rank: 0,
      display: "Not yet rated for MY2026 (redesign under evaluation)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 37.8,
      maxCargo: 70.4
    },
    features: [
      "Toyota's 2026 redesign made Hybrid the RAV4's standard powertrain — there is no separate gas-only model this year.",
      "40+ mpg combined on every trim",
      "Toyota Safety Sense standard"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "Edmunds – 2026 RAV4 Pricing by Trim",
        url: "https://www.edmunds.com/car-news/2026-toyota-rav4-pricing.html"
      },
      {
        label: "J.D. Power – 2026 RAV4",
        url: "https://www.jdpower.com/cars/2026/toyota/rav4"
      },
      {
        label: "RAV4Life – Specs Guide",
        url: "https://rav4life.com/2026-toyota-rav4-specs-guide-engine-mpg-dimensions-towing-trim-breakdown/"
      }
    ]
  },
  {
    id: "rav4-hybrid-limited",
    make: "Toyota",
    model: "RAV4 Hybrid",
    trimNote: "Limited",
    className: "Compact SUV",
    drivetrain: "FWD standard (AWD standard on Woodland/Limited; +$1,400 on LE/SE/XLE Premium)",
    price: {
      low: 44750,
      estimated: false
    },
    engine: "2.5L I4 + electric motors",
    hp: "236 hp (system)",
    torque: "System torque not directly comparable to gas engines",
    zeroToSixty: "~7.5 sec",
    transmission: "eCVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "47",
    mpgHighway: "40",
    mpgCombined: "~44",
    fuelTank: "14.5 gal",
    curbWeight: "3,640–3,920 lb",
    wheelbase: "105.9\"",
    towing: "1,750–3,500 lb",
    groundClearance: "~8.1\"",
    reliability: {
      value: 95,
      display: "Top-tier",
      detail: "Shares the RAV4's top-tier reliability reputation; the Hybrid powertrain has been in production since 2016 with a strong track record.",
      estimated: true
    },
    resale: {
      value: 75,
      display: "Excellent",
      detail: "Hybrid RAV4s have historically commanded a resale premium over the gas model due to sustained demand.",
      estimated: true
    },
    maintenance: {
      annual: 650,
      display: "Moderate",
      detail: "Fuel savings help offset ownership cost; hybrid-specific service intervals are similar to the gas model's.",
      estimated: true
    },
    insurance: {
      annual: 1990,
      display: "$1,990/yr",
      detail: "Based on the RAV4 nameplate-wide CarEdge average; not hybrid-specific.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (carried from prior generation)",
      estimated: true
    },
    iihs: {
      rank: 0,
      display: "Not yet rated for MY2026 (redesign under evaluation)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 37.8,
      maxCargo: 70.4
    },
    features: [
      "Toyota's 2026 redesign made Hybrid the RAV4's standard powertrain — there is no separate gas-only model this year.",
      "40+ mpg combined on every trim",
      "Toyota Safety Sense standard"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "Edmunds – 2026 RAV4 Pricing by Trim",
        url: "https://www.edmunds.com/car-news/2026-toyota-rav4-pricing.html"
      },
      {
        label: "J.D. Power – 2026 RAV4",
        url: "https://www.jdpower.com/cars/2026/toyota/rav4"
      },
      {
        label: "RAV4Life – Specs Guide",
        url: "https://rav4life.com/2026-toyota-rav4-specs-guide-engine-mpg-dimensions-towing-trim-breakdown/"
      }
    ]
  },
  {
    id: "rav4-phev-se",
    make: "Toyota",
    model: "RAV4 Plug-in Hybrid",
    trimNote: "SE",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 42950,
      estimated: false
    },
    engine: "2.5L I4 + larger battery/electric motors",
    hp: "~324 hp (system)",
    torque: "System torque not directly comparable to gas engines",
    zeroToSixty: "5.4 sec",
    transmission: "eCVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "Varies (est.)",
    mpgHighway: "Varies (est.)",
    mpgCombined: "~41 in hybrid mode; 52–54 mi EV-only range",
    fuelTank: "14.5 gal",
    curbWeight: "4,430–4,435 lb",
    wheelbase: "105.9\"",
    towing: "~2,500 lb",
    groundClearance: "~8.1\"",
    reliability: {
      value: 90,
      display: "Excellent",
      detail: "Shares the RAV4 platform's strong reputation, though the larger plug-in battery and charging hardware are newer, less-proven components.",
      estimated: true
    },
    resale: {
      value: 78,
      display: "Excellent",
      detail: "The outgoing RAV4 Prime PHEV held exceptionally strong resale value due to limited supply and EV tax-credit demand; the new PHEV is expected to follow suit.",
      estimated: true
    },
    maintenance: {
      annual: 750,
      display: "Moderate–higher",
      detail: "More complex plug-in hybrid hardware typically costs somewhat more to service than the standard Hybrid.",
      estimated: true
    },
    insurance: {
      annual: 2200,
      display: "$2,200/yr",
      detail: "Estimated above the gas/hybrid RAV4 average given the PHEV's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 0,
      display: "Not yet rated for MY2026",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (+ hybrid battery coverage)",
    cargo: {
      behind2nd: 37.8,
      maxCargo: 70.4
    },
    features: [
      "Quickest RAV4 powertrain — 5.4 sec 0-60",
      "GR Sport is an all-new trim for 2026",
      "Standard AWD on every trim"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "KBB – 2026 RAV4 PHEV Pricing",
        url: "https://www.kbb.com/car-news/2026-toyota-rav4-plug-in-hybrid-arrives-with-lower-price"
      },
      {
        label: "J.D. Power – 2026 RAV4",
        url: "https://www.jdpower.com/cars/2026/toyota/rav4"
      }
    ]
  },
  {
    id: "rav4-phev-woodland",
    make: "Toyota",
    model: "RAV4 Plug-in Hybrid",
    trimNote: "Woodland",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 46750,
      estimated: false
    },
    engine: "2.5L I4 + larger battery/electric motors",
    hp: "~324 hp (system)",
    torque: "System torque not directly comparable to gas engines",
    zeroToSixty: "5.4 sec",
    transmission: "eCVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "Varies (est.)",
    mpgHighway: "Varies (est.)",
    mpgCombined: "~41 in hybrid mode; 52–54 mi EV-only range",
    fuelTank: "14.5 gal",
    curbWeight: "4,430–4,435 lb",
    wheelbase: "105.9\"",
    towing: "~2,500 lb",
    groundClearance: "~8.1\"",
    reliability: {
      value: 90,
      display: "Excellent",
      detail: "Shares the RAV4 platform's strong reputation, though the larger plug-in battery and charging hardware are newer, less-proven components.",
      estimated: true
    },
    resale: {
      value: 78,
      display: "Excellent",
      detail: "The outgoing RAV4 Prime PHEV held exceptionally strong resale value due to limited supply and EV tax-credit demand; the new PHEV is expected to follow suit.",
      estimated: true
    },
    maintenance: {
      annual: 750,
      display: "Moderate–higher",
      detail: "More complex plug-in hybrid hardware typically costs somewhat more to service than the standard Hybrid.",
      estimated: true
    },
    insurance: {
      annual: 2200,
      display: "$2,200/yr",
      detail: "Estimated above the gas/hybrid RAV4 average given the PHEV's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 0,
      display: "Not yet rated for MY2026",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (+ hybrid battery coverage)",
    cargo: {
      behind2nd: 37.8,
      maxCargo: 70.4
    },
    features: [
      "Quickest RAV4 powertrain — 5.4 sec 0-60",
      "GR Sport is an all-new trim for 2026",
      "Standard AWD on every trim"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "KBB – 2026 RAV4 PHEV Pricing",
        url: "https://www.kbb.com/car-news/2026-toyota-rav4-plug-in-hybrid-arrives-with-lower-price"
      },
      {
        label: "J.D. Power – 2026 RAV4",
        url: "https://www.jdpower.com/cars/2026/toyota/rav4"
      }
    ]
  },
  {
    id: "rav4-phev-xse",
    make: "Toyota",
    model: "RAV4 Plug-in Hybrid",
    trimNote: "XSE",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 48650,
      estimated: false
    },
    engine: "2.5L I4 + larger battery/electric motors",
    hp: "~324 hp (system)",
    torque: "System torque not directly comparable to gas engines",
    zeroToSixty: "5.4 sec",
    transmission: "eCVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "Varies (est.)",
    mpgHighway: "Varies (est.)",
    mpgCombined: "~41 in hybrid mode; 52–54 mi EV-only range",
    fuelTank: "14.5 gal",
    curbWeight: "4,430–4,435 lb",
    wheelbase: "105.9\"",
    towing: "~2,500 lb",
    groundClearance: "~8.1\"",
    reliability: {
      value: 90,
      display: "Excellent",
      detail: "Shares the RAV4 platform's strong reputation, though the larger plug-in battery and charging hardware are newer, less-proven components.",
      estimated: true
    },
    resale: {
      value: 78,
      display: "Excellent",
      detail: "The outgoing RAV4 Prime PHEV held exceptionally strong resale value due to limited supply and EV tax-credit demand; the new PHEV is expected to follow suit.",
      estimated: true
    },
    maintenance: {
      annual: 750,
      display: "Moderate–higher",
      detail: "More complex plug-in hybrid hardware typically costs somewhat more to service than the standard Hybrid.",
      estimated: true
    },
    insurance: {
      annual: 2200,
      display: "$2,200/yr",
      detail: "Estimated above the gas/hybrid RAV4 average given the PHEV's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 0,
      display: "Not yet rated for MY2026",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (+ hybrid battery coverage)",
    cargo: {
      behind2nd: 37.8,
      maxCargo: 70.4
    },
    features: [
      "Quickest RAV4 powertrain — 5.4 sec 0-60",
      "GR Sport is an all-new trim for 2026",
      "Standard AWD on every trim"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "KBB – 2026 RAV4 PHEV Pricing",
        url: "https://www.kbb.com/car-news/2026-toyota-rav4-plug-in-hybrid-arrives-with-lower-price"
      },
      {
        label: "J.D. Power – 2026 RAV4",
        url: "https://www.jdpower.com/cars/2026/toyota/rav4"
      }
    ]
  },
  {
    id: "rav4-phev-gr-sport",
    make: "Toyota",
    model: "RAV4 Plug-in Hybrid",
    trimNote: "GR Sport",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 49950,
      estimated: false
    },
    engine: "2.5L I4 + larger battery/electric motors",
    hp: "~324 hp (system)",
    torque: "System torque not directly comparable to gas engines",
    zeroToSixty: "5.4 sec",
    transmission: "eCVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "Varies (est.)",
    mpgHighway: "Varies (est.)",
    mpgCombined: "~41 in hybrid mode; 52–54 mi EV-only range",
    fuelTank: "14.5 gal",
    curbWeight: "4,430–4,435 lb",
    wheelbase: "105.9\"",
    towing: "~2,500 lb",
    groundClearance: "~8.1\"",
    reliability: {
      value: 90,
      display: "Excellent",
      detail: "Shares the RAV4 platform's strong reputation, though the larger plug-in battery and charging hardware are newer, less-proven components.",
      estimated: true
    },
    resale: {
      value: 78,
      display: "Excellent",
      detail: "The outgoing RAV4 Prime PHEV held exceptionally strong resale value due to limited supply and EV tax-credit demand; the new PHEV is expected to follow suit.",
      estimated: true
    },
    maintenance: {
      annual: 750,
      display: "Moderate–higher",
      detail: "More complex plug-in hybrid hardware typically costs somewhat more to service than the standard Hybrid.",
      estimated: true
    },
    insurance: {
      annual: 2200,
      display: "$2,200/yr",
      detail: "Estimated above the gas/hybrid RAV4 average given the PHEV's higher MSRP and repair cost.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 0,
      display: "Not yet rated for MY2026",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (+ hybrid battery coverage)",
    cargo: {
      behind2nd: 37.8,
      maxCargo: 70.4
    },
    features: [
      "Quickest RAV4 powertrain — 5.4 sec 0-60",
      "GR Sport is an all-new trim for 2026",
      "Standard AWD on every trim"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "KBB – 2026 RAV4 PHEV Pricing",
        url: "https://www.kbb.com/car-news/2026-toyota-rav4-plug-in-hybrid-arrives-with-lower-price"
      },
      {
        label: "J.D. Power – 2026 RAV4",
        url: "https://www.jdpower.com/cars/2026/toyota/rav4"
      }
    ]
  },
  {
    id: "crv-lx",
    make: "Honda",
    model: "CR-V",
    trimNote: "LX",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 30920,
      estimated: false
    },
    engine: "1.5L Turbo I4 (Hybrid trims: 2.0L I4 + electric motors)",
    hp: "190 hp (Hybrid: up to 204 hp)",
    torque: "179 lb-ft",
    zeroToSixty: "~7.5 sec (est.)",
    transmission: "CVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "28 (2WD)",
    mpgHighway: "33 (2WD)",
    mpgCombined: "~30 (Hybrid: ~40)",
    fuelTank: "14.0 gal",
    curbWeight: "3,497 lb",
    wheelbase: "106.3\"",
    towing: "1,500 lb (Hybrid: 1,000 lb)",
    groundClearance: "8.2\"",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "Decades-long reputation for reliability; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 71,
      display: "Best in class",
      detail: "Retains 70.99% of MSRP after 5 years — among the best in the compact SUV segment.",
      estimated: false
    },
    maintenance: {
      annual: 600,
      display: "Moderate",
      detail: "KBB 5-yr Cost to Own: $43,895 total ($31,860 out-of-pocket). Edmunds estimates ~$36,935 over 5 years.",
      estimated: true
    },
    insurance: {
      annual: 1932,
      display: "$1,932/yr",
      detail: "Market-average estimate for the CR-V nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 1,
      display: "Tested — no Top Safety Pick award",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 39.3,
      maxCargo: 76.5
    },
    features: [
      "LX/EX/EX-L run the 1.5L turbo gas engine; Sport and Sport Touring switch to the 2.0L hybrid powertrain",
      "Honda Sensing safety suite standard on every trim",
      "76.5 cu ft total passenger + cargo volume"
    ],
    dealerBrand: "honda",
    sources: [
      {
        label: "Edmunds – 2026 CR-V MSRP by Trim",
        url: "https://www.edmunds.com/honda/cr-v/2026/msrp/"
      },
      {
        label: "KBB – CR-V Cost to Own",
        url: "https://www.kbb.com/honda/cr-v/2026/cost-to-own"
      },
      {
        label: "IIHS – 2026 CR-V",
        url: "https://www.iihs.org/ratings/vehicle/honda/cr-v-4-door-suv/2026"
      }
    ]
  },
  {
    id: "crv-ex",
    make: "Honda",
    model: "CR-V",
    trimNote: "EX",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 33900,
      estimated: true
    },
    engine: "1.5L Turbo I4 (Hybrid trims: 2.0L I4 + electric motors)",
    hp: "190 hp (Hybrid: up to 204 hp)",
    torque: "179 lb-ft",
    zeroToSixty: "~7.5 sec (est.)",
    transmission: "CVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "28 (2WD)",
    mpgHighway: "33 (2WD)",
    mpgCombined: "~30 (Hybrid: ~40)",
    fuelTank: "14.0 gal",
    curbWeight: "3,497 lb",
    wheelbase: "106.3\"",
    towing: "1,500 lb (Hybrid: 1,000 lb)",
    groundClearance: "8.2\"",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "Decades-long reputation for reliability; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 71,
      display: "Best in class",
      detail: "Retains 70.99% of MSRP after 5 years — among the best in the compact SUV segment.",
      estimated: false
    },
    maintenance: {
      annual: 600,
      display: "Moderate",
      detail: "KBB 5-yr Cost to Own: $43,895 total ($31,860 out-of-pocket). Edmunds estimates ~$36,935 over 5 years.",
      estimated: true
    },
    insurance: {
      annual: 1932,
      display: "$1,932/yr",
      detail: "Market-average estimate for the CR-V nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 1,
      display: "Tested — no Top Safety Pick award",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 39.3,
      maxCargo: 76.5
    },
    features: [
      "LX/EX/EX-L run the 1.5L turbo gas engine; Sport and Sport Touring switch to the 2.0L hybrid powertrain",
      "Honda Sensing safety suite standard on every trim",
      "76.5 cu ft total passenger + cargo volume"
    ],
    dealerBrand: "honda",
    sources: [
      {
        label: "Edmunds – 2026 CR-V MSRP by Trim",
        url: "https://www.edmunds.com/honda/cr-v/2026/msrp/"
      },
      {
        label: "KBB – CR-V Cost to Own",
        url: "https://www.kbb.com/honda/cr-v/2026/cost-to-own"
      },
      {
        label: "IIHS – 2026 CR-V",
        url: "https://www.iihs.org/ratings/vehicle/honda/cr-v-4-door-suv/2026"
      }
    ]
  },
  {
    id: "crv-ex-l",
    make: "Honda",
    model: "CR-V",
    trimNote: "EX-L",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 36850,
      estimated: false
    },
    engine: "1.5L Turbo I4 (Hybrid trims: 2.0L I4 + electric motors)",
    hp: "190 hp (Hybrid: up to 204 hp)",
    torque: "179 lb-ft",
    zeroToSixty: "~7.5 sec (est.)",
    transmission: "CVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "28 (2WD)",
    mpgHighway: "33 (2WD)",
    mpgCombined: "~30 (Hybrid: ~40)",
    fuelTank: "14.0 gal",
    curbWeight: "3,497 lb",
    wheelbase: "106.3\"",
    towing: "1,500 lb (Hybrid: 1,000 lb)",
    groundClearance: "8.2\"",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "Decades-long reputation for reliability; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 71,
      display: "Best in class",
      detail: "Retains 70.99% of MSRP after 5 years — among the best in the compact SUV segment.",
      estimated: false
    },
    maintenance: {
      annual: 600,
      display: "Moderate",
      detail: "KBB 5-yr Cost to Own: $43,895 total ($31,860 out-of-pocket). Edmunds estimates ~$36,935 over 5 years.",
      estimated: true
    },
    insurance: {
      annual: 1932,
      display: "$1,932/yr",
      detail: "Market-average estimate for the CR-V nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 1,
      display: "Tested — no Top Safety Pick award",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 39.3,
      maxCargo: 76.5
    },
    features: [
      "LX/EX/EX-L run the 1.5L turbo gas engine; Sport and Sport Touring switch to the 2.0L hybrid powertrain",
      "Honda Sensing safety suite standard on every trim",
      "76.5 cu ft total passenger + cargo volume"
    ],
    dealerBrand: "honda",
    sources: [
      {
        label: "Edmunds – 2026 CR-V MSRP by Trim",
        url: "https://www.edmunds.com/honda/cr-v/2026/msrp/"
      },
      {
        label: "KBB – CR-V Cost to Own",
        url: "https://www.kbb.com/honda/cr-v/2026/cost-to-own"
      },
      {
        label: "IIHS – 2026 CR-V",
        url: "https://www.iihs.org/ratings/vehicle/honda/cr-v-4-door-suv/2026"
      }
    ]
  },
  {
    id: "crv-sport-touring-hybrid",
    make: "Honda",
    model: "CR-V",
    trimNote: "Sport Touring Hybrid",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 42250,
      estimated: false
    },
    engine: "1.5L Turbo I4 (Hybrid trims: 2.0L I4 + electric motors)",
    hp: "190 hp (Hybrid: up to 204 hp)",
    torque: "179 lb-ft",
    zeroToSixty: "~7.5 sec (est.)",
    transmission: "CVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "28 (2WD)",
    mpgHighway: "33 (2WD)",
    mpgCombined: "~30 (Hybrid: ~40)",
    fuelTank: "14.0 gal",
    curbWeight: "3,497 lb",
    wheelbase: "106.3\"",
    towing: "1,500 lb (Hybrid: 1,000 lb)",
    groundClearance: "8.2\"",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "Decades-long reputation for reliability; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 71,
      display: "Best in class",
      detail: "Retains 70.99% of MSRP after 5 years — among the best in the compact SUV segment.",
      estimated: false
    },
    maintenance: {
      annual: 600,
      display: "Moderate",
      detail: "KBB 5-yr Cost to Own: $43,895 total ($31,860 out-of-pocket). Edmunds estimates ~$36,935 over 5 years.",
      estimated: true
    },
    insurance: {
      annual: 1932,
      display: "$1,932/yr",
      detail: "Market-average estimate for the CR-V nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 1,
      display: "Tested — no Top Safety Pick award",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 39.3,
      maxCargo: 76.5
    },
    features: [
      "LX/EX/EX-L run the 1.5L turbo gas engine; Sport and Sport Touring switch to the 2.0L hybrid powertrain",
      "Honda Sensing safety suite standard on every trim",
      "76.5 cu ft total passenger + cargo volume"
    ],
    dealerBrand: "honda",
    sources: [
      {
        label: "Edmunds – 2026 CR-V MSRP by Trim",
        url: "https://www.edmunds.com/honda/cr-v/2026/msrp/"
      },
      {
        label: "KBB – CR-V Cost to Own",
        url: "https://www.kbb.com/honda/cr-v/2026/cost-to-own"
      },
      {
        label: "IIHS – 2026 CR-V",
        url: "https://www.iihs.org/ratings/vehicle/honda/cr-v-4-door-suv/2026"
      }
    ]
  },
  {
    id: "cx5-25-s",
    make: "Mazda",
    model: "CX-5",
    trimNote: "2.5 S",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 29990,
      estimated: false
    },
    engine: "2.5L NA I4 w/ cylinder deactivation",
    hp: "187 hp",
    torque: "186 lb-ft",
    zeroToSixty: "8.2 sec",
    transmission: "6-speed automatic",
    thirdRow: "No",
    seats: "5",
    mpgCity: "24",
    mpgHighway: "30",
    mpgCombined: "~26",
    fuelTank: "14.8 gal",
    curbWeight: "3,856 lb",
    wheelbase: "110.8\"",
    towing: "1,500 lb",
    groundClearance: "8.0\"",
    reliability: {
      value: 88,
      display: "Excellent",
      detail: "5-star NHTSA overall safety rating; Mazda's reputation for exceptional reliability continues into the redesign.",
      estimated: true
    },
    resale: {
      value: 68,
      display: "Strong",
      detail: "Multiple reviewers cite strong resale value as a hallmark of the redesigned CX-5.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Low",
      detail: "Well-regarded naturally aspirated engine with standard AWD; ownership costs described as “impressively low” for the class.",
      estimated: true
    },
    insurance: {
      annual: 1947,
      display: "$1,947/yr",
      detail: "CarEdge average for the CX-5 nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: null,
      display: "Selected for testing; stars not yet published",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (Mazda's 100th IIHS safety award)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 33.7,
      maxCargo: 66.5
    },
    features: [
      "All-new 3rd-generation redesign for 2026",
      "Standard AWD and Google built-in infotainment on every trim",
      "IIHS TOP SAFETY PICK+ — Mazda's 100th such award"
    ],
    dealerBrand: "mazda",
    sources: [
      {
        label: "Edmunds – 2026 CX-5 Trim Pricing",
        url: "https://www.sportmazdaorlando.com/2026-mazda-cx-5-trim-levels-pricing-orlando-fl/"
      },
      {
        label: "KBB – 2026 CX-5",
        url: "https://www.kbb.com/mazda/cx-5/"
      },
      {
        label: "Mazda USA News – IIHS TSP+",
        url: "https://news.mazdausa.com/2026-07-09-Mazda-2026-CX-5-Earns-IIHS-TOP-SAFETY-PICK-Award-Marking-Mazdas-100th-IIHS-Top-Safety-Award"
      }
    ]
  },
  {
    id: "cx5-25-s-select",
    make: "Mazda",
    model: "CX-5",
    trimNote: "2.5 S Select",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 31990,
      estimated: false
    },
    engine: "2.5L NA I4 w/ cylinder deactivation",
    hp: "187 hp",
    torque: "186 lb-ft",
    zeroToSixty: "8.2 sec",
    transmission: "6-speed automatic",
    thirdRow: "No",
    seats: "5",
    mpgCity: "24",
    mpgHighway: "30",
    mpgCombined: "~26",
    fuelTank: "14.8 gal",
    curbWeight: "3,856 lb",
    wheelbase: "110.8\"",
    towing: "1,500 lb",
    groundClearance: "8.0\"",
    reliability: {
      value: 88,
      display: "Excellent",
      detail: "5-star NHTSA overall safety rating; Mazda's reputation for exceptional reliability continues into the redesign.",
      estimated: true
    },
    resale: {
      value: 68,
      display: "Strong",
      detail: "Multiple reviewers cite strong resale value as a hallmark of the redesigned CX-5.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Low",
      detail: "Well-regarded naturally aspirated engine with standard AWD; ownership costs described as “impressively low” for the class.",
      estimated: true
    },
    insurance: {
      annual: 1947,
      display: "$1,947/yr",
      detail: "CarEdge average for the CX-5 nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: null,
      display: "Selected for testing; stars not yet published",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (Mazda's 100th IIHS safety award)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 33.7,
      maxCargo: 66.5
    },
    features: [
      "All-new 3rd-generation redesign for 2026",
      "Standard AWD and Google built-in infotainment on every trim",
      "IIHS TOP SAFETY PICK+ — Mazda's 100th such award"
    ],
    dealerBrand: "mazda",
    sources: [
      {
        label: "Edmunds – 2026 CX-5 Trim Pricing",
        url: "https://www.sportmazdaorlando.com/2026-mazda-cx-5-trim-levels-pricing-orlando-fl/"
      },
      {
        label: "KBB – 2026 CX-5",
        url: "https://www.kbb.com/mazda/cx-5/"
      },
      {
        label: "Mazda USA News – IIHS TSP+",
        url: "https://news.mazdausa.com/2026-07-09-Mazda-2026-CX-5-Earns-IIHS-TOP-SAFETY-PICK-Award-Marking-Mazdas-100th-IIHS-Top-Safety-Award"
      }
    ]
  },
  {
    id: "cx5-25-s-preferred",
    make: "Mazda",
    model: "CX-5",
    trimNote: "2.5 S Preferred",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 34250,
      estimated: false
    },
    engine: "2.5L NA I4 w/ cylinder deactivation",
    hp: "187 hp",
    torque: "186 lb-ft",
    zeroToSixty: "8.2 sec",
    transmission: "6-speed automatic",
    thirdRow: "No",
    seats: "5",
    mpgCity: "24",
    mpgHighway: "30",
    mpgCombined: "~26",
    fuelTank: "14.8 gal",
    curbWeight: "3,856 lb",
    wheelbase: "110.8\"",
    towing: "1,500 lb",
    groundClearance: "8.0\"",
    reliability: {
      value: 88,
      display: "Excellent",
      detail: "5-star NHTSA overall safety rating; Mazda's reputation for exceptional reliability continues into the redesign.",
      estimated: true
    },
    resale: {
      value: 68,
      display: "Strong",
      detail: "Multiple reviewers cite strong resale value as a hallmark of the redesigned CX-5.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Low",
      detail: "Well-regarded naturally aspirated engine with standard AWD; ownership costs described as “impressively low” for the class.",
      estimated: true
    },
    insurance: {
      annual: 1947,
      display: "$1,947/yr",
      detail: "CarEdge average for the CX-5 nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: null,
      display: "Selected for testing; stars not yet published",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (Mazda's 100th IIHS safety award)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 33.7,
      maxCargo: 66.5
    },
    features: [
      "All-new 3rd-generation redesign for 2026",
      "Standard AWD and Google built-in infotainment on every trim",
      "IIHS TOP SAFETY PICK+ — Mazda's 100th such award"
    ],
    dealerBrand: "mazda",
    sources: [
      {
        label: "Edmunds – 2026 CX-5 Trim Pricing",
        url: "https://www.sportmazdaorlando.com/2026-mazda-cx-5-trim-levels-pricing-orlando-fl/"
      },
      {
        label: "KBB – 2026 CX-5",
        url: "https://www.kbb.com/mazda/cx-5/"
      },
      {
        label: "Mazda USA News – IIHS TSP+",
        url: "https://news.mazdausa.com/2026-07-09-Mazda-2026-CX-5-Earns-IIHS-TOP-SAFETY-PICK-Award-Marking-Mazdas-100th-IIHS-Top-Safety-Award"
      }
    ]
  },
  {
    id: "cx5-25-s-premium",
    make: "Mazda",
    model: "CX-5",
    trimNote: "2.5 S Premium",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 36900,
      estimated: false
    },
    engine: "2.5L NA I4 w/ cylinder deactivation",
    hp: "187 hp",
    torque: "186 lb-ft",
    zeroToSixty: "8.2 sec",
    transmission: "6-speed automatic",
    thirdRow: "No",
    seats: "5",
    mpgCity: "24",
    mpgHighway: "30",
    mpgCombined: "~26",
    fuelTank: "14.8 gal",
    curbWeight: "3,856 lb",
    wheelbase: "110.8\"",
    towing: "1,500 lb",
    groundClearance: "8.0\"",
    reliability: {
      value: 88,
      display: "Excellent",
      detail: "5-star NHTSA overall safety rating; Mazda's reputation for exceptional reliability continues into the redesign.",
      estimated: true
    },
    resale: {
      value: 68,
      display: "Strong",
      detail: "Multiple reviewers cite strong resale value as a hallmark of the redesigned CX-5.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Low",
      detail: "Well-regarded naturally aspirated engine with standard AWD; ownership costs described as “impressively low” for the class.",
      estimated: true
    },
    insurance: {
      annual: 1947,
      display: "$1,947/yr",
      detail: "CarEdge average for the CX-5 nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: null,
      display: "Selected for testing; stars not yet published",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (Mazda's 100th IIHS safety award)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 33.7,
      maxCargo: 66.5
    },
    features: [
      "All-new 3rd-generation redesign for 2026",
      "Standard AWD and Google built-in infotainment on every trim",
      "IIHS TOP SAFETY PICK+ — Mazda's 100th such award"
    ],
    dealerBrand: "mazda",
    sources: [
      {
        label: "Edmunds – 2026 CX-5 Trim Pricing",
        url: "https://www.sportmazdaorlando.com/2026-mazda-cx-5-trim-levels-pricing-orlando-fl/"
      },
      {
        label: "KBB – 2026 CX-5",
        url: "https://www.kbb.com/mazda/cx-5/"
      },
      {
        label: "Mazda USA News – IIHS TSP+",
        url: "https://news.mazdausa.com/2026-07-09-Mazda-2026-CX-5-Earns-IIHS-TOP-SAFETY-PICK-Award-Marking-Mazdas-100th-IIHS-Top-Safety-Award"
      }
    ]
  },
  {
    id: "cx5-25-s-premium-plus",
    make: "Mazda",
    model: "CX-5",
    trimNote: "2.5 S Premium Plus",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 38990,
      estimated: false
    },
    engine: "2.5L NA I4 w/ cylinder deactivation",
    hp: "187 hp",
    torque: "186 lb-ft",
    zeroToSixty: "8.2 sec",
    transmission: "6-speed automatic",
    thirdRow: "No",
    seats: "5",
    mpgCity: "24",
    mpgHighway: "30",
    mpgCombined: "~26",
    fuelTank: "14.8 gal",
    curbWeight: "3,856 lb",
    wheelbase: "110.8\"",
    towing: "1,500 lb",
    groundClearance: "8.0\"",
    reliability: {
      value: 88,
      display: "Excellent",
      detail: "5-star NHTSA overall safety rating; Mazda's reputation for exceptional reliability continues into the redesign.",
      estimated: true
    },
    resale: {
      value: 68,
      display: "Strong",
      detail: "Multiple reviewers cite strong resale value as a hallmark of the redesigned CX-5.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Low",
      detail: "Well-regarded naturally aspirated engine with standard AWD; ownership costs described as “impressively low” for the class.",
      estimated: true
    },
    insurance: {
      annual: 1947,
      display: "$1,947/yr",
      detail: "CarEdge average for the CX-5 nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: null,
      display: "Selected for testing; stars not yet published",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (Mazda's 100th IIHS safety award)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 33.7,
      maxCargo: 66.5
    },
    features: [
      "All-new 3rd-generation redesign for 2026",
      "Standard AWD and Google built-in infotainment on every trim",
      "IIHS TOP SAFETY PICK+ — Mazda's 100th such award"
    ],
    dealerBrand: "mazda",
    sources: [
      {
        label: "Edmunds – 2026 CX-5 Trim Pricing",
        url: "https://www.sportmazdaorlando.com/2026-mazda-cx-5-trim-levels-pricing-orlando-fl/"
      },
      {
        label: "KBB – 2026 CX-5",
        url: "https://www.kbb.com/mazda/cx-5/"
      },
      {
        label: "Mazda USA News – IIHS TSP+",
        url: "https://news.mazdausa.com/2026-07-09-Mazda-2026-CX-5-Earns-IIHS-TOP-SAFETY-PICK-Award-Marking-Mazdas-100th-IIHS-Top-Safety-Award"
      }
    ]
  },
  {
    id: "forester-gas-base",
    make: "Subaru",
    model: "Forester",
    trimNote: "Base",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 29995,
      estimated: false
    },
    engine: "2.5L naturally aspirated Boxer H4",
    hp: "180 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.2 sec",
    transmission: "Lineartronic CVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "26",
    mpgHighway: "33",
    mpgCombined: "~26–27",
    fuelTank: "16.6 gal",
    curbWeight: "3,510–3,664 lb",
    wheelbase: "105.1\"",
    towing: "1,500 lb",
    groundClearance: "8.7\"",
    reliability: {
      value: 100,
      display: "Excellent",
      detail: "5.0 / 5.0 average consumer reliability rating on Cars.com; standard AWD on every trim.",
      estimated: false
    },
    resale: {
      value: 70,
      display: "#1 in class",
      detail: "Ranked #1 for Projected Resale Value among compact SUVs by J.D. Power (2025); often beats the RAV4 in resale markets.",
      estimated: true
    },
    maintenance: {
      annual: 700,
      display: "Plan ahead",
      detail: "No complimentary scheduled maintenance program — budget for routine service separately.",
      estimated: true
    },
    insurance: {
      annual: 1700,
      display: "$1,700/yr",
      detail: "Multiple sources cite the Forester as having the lowest average insurance cost among compact SUVs, though no exact 2026 figure was published.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 29.6,
      maxCargo: 74.4
    },
    features: [
      "Standard symmetrical AWD, every trim",
      "8.7\" ground clearance — highest in this comparison",
      "Wilderness off-road trim also available (not shown)"
    ],
    dealerBrand: "subaru",
    sources: [
      {
        label: "Subaru Media Center – 2026 Forester Pricing",
        url: "https://media.subaru.com/newsrelease.do?id=2363&mid=143&allImage=1"
      },
      {
        label: "J.D. Power – 2026 Forester",
        url: "https://www.jdpower.com/cars/2026/subaru/forester"
      },
      {
        label: "IIHS – 2026 Forester",
        url: "https://www.iihs.org/ratings/vehicle/subaru/forester-4-door-suv/2026"
      }
    ]
  },
  {
    id: "forester-gas-premium",
    make: "Subaru",
    model: "Forester",
    trimNote: "Premium",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 33445,
      estimated: false
    },
    engine: "2.5L naturally aspirated Boxer H4",
    hp: "180 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.2 sec",
    transmission: "Lineartronic CVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "26",
    mpgHighway: "33",
    mpgCombined: "~26–27",
    fuelTank: "16.6 gal",
    curbWeight: "3,510–3,664 lb",
    wheelbase: "105.1\"",
    towing: "1,500 lb",
    groundClearance: "8.7\"",
    reliability: {
      value: 100,
      display: "Excellent",
      detail: "5.0 / 5.0 average consumer reliability rating on Cars.com; standard AWD on every trim.",
      estimated: false
    },
    resale: {
      value: 70,
      display: "#1 in class",
      detail: "Ranked #1 for Projected Resale Value among compact SUVs by J.D. Power (2025); often beats the RAV4 in resale markets.",
      estimated: true
    },
    maintenance: {
      annual: 700,
      display: "Plan ahead",
      detail: "No complimentary scheduled maintenance program — budget for routine service separately.",
      estimated: true
    },
    insurance: {
      annual: 1700,
      display: "$1,700/yr",
      detail: "Multiple sources cite the Forester as having the lowest average insurance cost among compact SUVs, though no exact 2026 figure was published.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 29.6,
      maxCargo: 74.4
    },
    features: [
      "Standard symmetrical AWD, every trim",
      "8.7\" ground clearance — highest in this comparison",
      "Wilderness off-road trim also available (not shown)"
    ],
    dealerBrand: "subaru",
    sources: [
      {
        label: "Subaru Media Center – 2026 Forester Pricing",
        url: "https://media.subaru.com/newsrelease.do?id=2363&mid=143&allImage=1"
      },
      {
        label: "J.D. Power – 2026 Forester",
        url: "https://www.jdpower.com/cars/2026/subaru/forester"
      },
      {
        label: "IIHS – 2026 Forester",
        url: "https://www.iihs.org/ratings/vehicle/subaru/forester-4-door-suv/2026"
      }
    ]
  },
  {
    id: "forester-gas-limited",
    make: "Subaru",
    model: "Forester",
    trimNote: "Limited",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 37695,
      estimated: false
    },
    engine: "2.5L naturally aspirated Boxer H4",
    hp: "180 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.2 sec",
    transmission: "Lineartronic CVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "26",
    mpgHighway: "33",
    mpgCombined: "~26–27",
    fuelTank: "16.6 gal",
    curbWeight: "3,510–3,664 lb",
    wheelbase: "105.1\"",
    towing: "1,500 lb",
    groundClearance: "8.7\"",
    reliability: {
      value: 100,
      display: "Excellent",
      detail: "5.0 / 5.0 average consumer reliability rating on Cars.com; standard AWD on every trim.",
      estimated: false
    },
    resale: {
      value: 70,
      display: "#1 in class",
      detail: "Ranked #1 for Projected Resale Value among compact SUVs by J.D. Power (2025); often beats the RAV4 in resale markets.",
      estimated: true
    },
    maintenance: {
      annual: 700,
      display: "Plan ahead",
      detail: "No complimentary scheduled maintenance program — budget for routine service separately.",
      estimated: true
    },
    insurance: {
      annual: 1700,
      display: "$1,700/yr",
      detail: "Multiple sources cite the Forester as having the lowest average insurance cost among compact SUVs, though no exact 2026 figure was published.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 29.6,
      maxCargo: 74.4
    },
    features: [
      "Standard symmetrical AWD, every trim",
      "8.7\" ground clearance — highest in this comparison",
      "Wilderness off-road trim also available (not shown)"
    ],
    dealerBrand: "subaru",
    sources: [
      {
        label: "Subaru Media Center – 2026 Forester Pricing",
        url: "https://media.subaru.com/newsrelease.do?id=2363&mid=143&allImage=1"
      },
      {
        label: "J.D. Power – 2026 Forester",
        url: "https://www.jdpower.com/cars/2026/subaru/forester"
      },
      {
        label: "IIHS – 2026 Forester",
        url: "https://www.iihs.org/ratings/vehicle/subaru/forester-4-door-suv/2026"
      }
    ]
  },
  {
    id: "forester-gas-touring",
    make: "Subaru",
    model: "Forester",
    trimNote: "Touring",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 41595,
      estimated: false
    },
    engine: "2.5L naturally aspirated Boxer H4",
    hp: "180 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.2 sec",
    transmission: "Lineartronic CVT",
    thirdRow: "No",
    seats: "5",
    mpgCity: "26",
    mpgHighway: "33",
    mpgCombined: "~26–27",
    fuelTank: "16.6 gal",
    curbWeight: "3,510–3,664 lb",
    wheelbase: "105.1\"",
    towing: "1,500 lb",
    groundClearance: "8.7\"",
    reliability: {
      value: 100,
      display: "Excellent",
      detail: "5.0 / 5.0 average consumer reliability rating on Cars.com; standard AWD on every trim.",
      estimated: false
    },
    resale: {
      value: 70,
      display: "#1 in class",
      detail: "Ranked #1 for Projected Resale Value among compact SUVs by J.D. Power (2025); often beats the RAV4 in resale markets.",
      estimated: true
    },
    maintenance: {
      annual: 700,
      display: "Plan ahead",
      detail: "No complimentary scheduled maintenance program — budget for routine service separately.",
      estimated: true
    },
    insurance: {
      annual: 1700,
      display: "$1,700/yr",
      detail: "Multiple sources cite the Forester as having the lowest average insurance cost among compact SUVs, though no exact 2026 figure was published.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 29.6,
      maxCargo: 74.4
    },
    features: [
      "Standard symmetrical AWD, every trim",
      "8.7\" ground clearance — highest in this comparison",
      "Wilderness off-road trim also available (not shown)"
    ],
    dealerBrand: "subaru",
    sources: [
      {
        label: "Subaru Media Center – 2026 Forester Pricing",
        url: "https://media.subaru.com/newsrelease.do?id=2363&mid=143&allImage=1"
      },
      {
        label: "J.D. Power – 2026 Forester",
        url: "https://www.jdpower.com/cars/2026/subaru/forester"
      },
      {
        label: "IIHS – 2026 Forester",
        url: "https://www.iihs.org/ratings/vehicle/subaru/forester-4-door-suv/2026"
      }
    ]
  },
  {
    id: "forester-hybrid-premium",
    make: "Subaru",
    model: "Forester Hybrid",
    trimNote: "Premium",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 34730,
      estimated: false
    },
    engine: "2.5L Boxer H4 + electric motor",
    hp: "194 hp",
    torque: "199 lb-ft (system)",
    zeroToSixty: "8.8 sec",
    transmission: "Lineartronic CVT (est.)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "35",
    mpgHighway: "34",
    mpgCombined: "35",
    fuelTank: "16.6 gal (est.)",
    curbWeight: "~3,650–3,750 lb (est.)",
    wheelbase: "105.1\"",
    towing: "1,500 lb",
    groundClearance: "8.7\"",
    reliability: {
      value: 90,
      display: "Excellent",
      detail: "Shares the gas Forester's excellent reliability reputation, though Subaru's hybrid system is newer and not yet separately rated.",
      estimated: true
    },
    resale: {
      value: 65,
      display: "Strong",
      detail: "Expected to track close to the gas Forester's #1-in-class resale, though as a newer powertrain it lacks its own track record.",
      estimated: true
    },
    maintenance: {
      annual: 750,
      display: "Plan ahead",
      detail: "No complimentary scheduled maintenance, plus added hybrid-system components; estimated somewhat higher than the gas model.",
      estimated: true
    },
    insurance: {
      annual: 1800,
      display: "$1,800/yr",
      detail: "Estimated slightly above the gas Forester given the newer, more complex hybrid hardware.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (expected to share the gas Forester's award)",
      estimated: true
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 27.5,
      maxCargo: 69.1
    },
    features: [
      "35 mpg combined — best in the Forester lineup",
      "Standard AWD",
      "Sport Onyx Edition adds unique styling to the Sport trim"
    ],
    dealerBrand: "subaru",
    sources: [
      {
        label: "Subaru Media Center – 2026 Forester Hybrid Pricing",
        url: "https://media.subaru.com/newsrelease.do?id=2424&mid=387"
      },
      {
        label: "J.D. Power – 2026 Forester",
        url: "https://www.jdpower.com/cars/2026/subaru/forester"
      }
    ]
  },
  {
    id: "forester-hybrid-sport",
    make: "Subaru",
    model: "Forester Hybrid",
    trimNote: "Sport",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 36495,
      estimated: false
    },
    engine: "2.5L Boxer H4 + electric motor",
    hp: "194 hp",
    torque: "199 lb-ft (system)",
    zeroToSixty: "8.8 sec",
    transmission: "Lineartronic CVT (est.)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "35",
    mpgHighway: "34",
    mpgCombined: "35",
    fuelTank: "16.6 gal (est.)",
    curbWeight: "~3,650–3,750 lb (est.)",
    wheelbase: "105.1\"",
    towing: "1,500 lb",
    groundClearance: "8.7\"",
    reliability: {
      value: 90,
      display: "Excellent",
      detail: "Shares the gas Forester's excellent reliability reputation, though Subaru's hybrid system is newer and not yet separately rated.",
      estimated: true
    },
    resale: {
      value: 65,
      display: "Strong",
      detail: "Expected to track close to the gas Forester's #1-in-class resale, though as a newer powertrain it lacks its own track record.",
      estimated: true
    },
    maintenance: {
      annual: 750,
      display: "Plan ahead",
      detail: "No complimentary scheduled maintenance, plus added hybrid-system components; estimated somewhat higher than the gas model.",
      estimated: true
    },
    insurance: {
      annual: 1800,
      display: "$1,800/yr",
      detail: "Estimated slightly above the gas Forester given the newer, more complex hybrid hardware.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (expected to share the gas Forester's award)",
      estimated: true
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 27.5,
      maxCargo: 69.1
    },
    features: [
      "35 mpg combined — best in the Forester lineup",
      "Standard AWD",
      "Sport Onyx Edition adds unique styling to the Sport trim"
    ],
    dealerBrand: "subaru",
    sources: [
      {
        label: "Subaru Media Center – 2026 Forester Hybrid Pricing",
        url: "https://media.subaru.com/newsrelease.do?id=2424&mid=387"
      },
      {
        label: "J.D. Power – 2026 Forester",
        url: "https://www.jdpower.com/cars/2026/subaru/forester"
      }
    ]
  },
  {
    id: "forester-hybrid-limited",
    make: "Subaru",
    model: "Forester Hybrid",
    trimNote: "Limited",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 38995,
      estimated: false
    },
    engine: "2.5L Boxer H4 + electric motor",
    hp: "194 hp",
    torque: "199 lb-ft (system)",
    zeroToSixty: "8.8 sec",
    transmission: "Lineartronic CVT (est.)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "35",
    mpgHighway: "34",
    mpgCombined: "35",
    fuelTank: "16.6 gal (est.)",
    curbWeight: "~3,650–3,750 lb (est.)",
    wheelbase: "105.1\"",
    towing: "1,500 lb",
    groundClearance: "8.7\"",
    reliability: {
      value: 90,
      display: "Excellent",
      detail: "Shares the gas Forester's excellent reliability reputation, though Subaru's hybrid system is newer and not yet separately rated.",
      estimated: true
    },
    resale: {
      value: 65,
      display: "Strong",
      detail: "Expected to track close to the gas Forester's #1-in-class resale, though as a newer powertrain it lacks its own track record.",
      estimated: true
    },
    maintenance: {
      annual: 750,
      display: "Plan ahead",
      detail: "No complimentary scheduled maintenance, plus added hybrid-system components; estimated somewhat higher than the gas model.",
      estimated: true
    },
    insurance: {
      annual: 1800,
      display: "$1,800/yr",
      detail: "Estimated slightly above the gas Forester given the newer, more complex hybrid hardware.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (expected to share the gas Forester's award)",
      estimated: true
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 27.5,
      maxCargo: 69.1
    },
    features: [
      "35 mpg combined — best in the Forester lineup",
      "Standard AWD",
      "Sport Onyx Edition adds unique styling to the Sport trim"
    ],
    dealerBrand: "subaru",
    sources: [
      {
        label: "Subaru Media Center – 2026 Forester Hybrid Pricing",
        url: "https://media.subaru.com/newsrelease.do?id=2424&mid=387"
      },
      {
        label: "J.D. Power – 2026 Forester",
        url: "https://www.jdpower.com/cars/2026/subaru/forester"
      }
    ]
  },
  {
    id: "forester-hybrid-touring",
    make: "Subaru",
    model: "Forester Hybrid",
    trimNote: "Touring",
    className: "Compact SUV",
    drivetrain: "AWD standard",
    price: {
      low: 41545,
      estimated: false
    },
    engine: "2.5L Boxer H4 + electric motor",
    hp: "194 hp",
    torque: "199 lb-ft (system)",
    zeroToSixty: "8.8 sec",
    transmission: "Lineartronic CVT (est.)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "35",
    mpgHighway: "34",
    mpgCombined: "35",
    fuelTank: "16.6 gal (est.)",
    curbWeight: "~3,650–3,750 lb (est.)",
    wheelbase: "105.1\"",
    towing: "1,500 lb",
    groundClearance: "8.7\"",
    reliability: {
      value: 90,
      display: "Excellent",
      detail: "Shares the gas Forester's excellent reliability reputation, though Subaru's hybrid system is newer and not yet separately rated.",
      estimated: true
    },
    resale: {
      value: 65,
      display: "Strong",
      detail: "Expected to track close to the gas Forester's #1-in-class resale, though as a newer powertrain it lacks its own track record.",
      estimated: true
    },
    maintenance: {
      annual: 750,
      display: "Plan ahead",
      detail: "No complimentary scheduled maintenance, plus added hybrid-system components; estimated somewhat higher than the gas model.",
      estimated: true
    },
    insurance: {
      annual: 1800,
      display: "$1,800/yr",
      detail: "Estimated slightly above the gas Forester given the newer, more complex hybrid hardware.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (expected to share the gas Forester's award)",
      estimated: true
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 27.5,
      maxCargo: 69.1
    },
    features: [
      "35 mpg combined — best in the Forester lineup",
      "Standard AWD",
      "Sport Onyx Edition adds unique styling to the Sport trim"
    ],
    dealerBrand: "subaru",
    sources: [
      {
        label: "Subaru Media Center – 2026 Forester Hybrid Pricing",
        url: "https://media.subaru.com/newsrelease.do?id=2424&mid=387"
      },
      {
        label: "J.D. Power – 2026 Forester",
        url: "https://www.jdpower.com/cars/2026/subaru/forester"
      }
    ]
  },
  {
    id: "sportage-lx",
    make: "Kia",
    model: "Sportage",
    trimNote: "LX",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 30135,
      estimated: false
    },
    engine: "2.5L I4 (SX-Prestige: Hybrid)",
    hp: "187 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.1 sec (Hybrid: ~7.3 sec)",
    transmission: "8-spd auto (Hybrid: 6-spd auto)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "24 (AWD)",
    mpgHighway: "30 (AWD)",
    mpgCombined: "~28 (FWD)",
    fuelTank: "14.3 gal (Hybrid: 13.7 gal)",
    curbWeight: "3,827 lb",
    wheelbase: "108.5\"",
    towing: "2,500 lb (w/ trailer brakes)",
    groundClearance: "8.3\"",
    reliability: {
      value: 83,
      display: "Great (83/100)",
      detail: "Reliability score of 83/100 with a below-average complaint rate for the segment.",
      estimated: false
    },
    resale: {
      value: 64,
      display: "Average",
      detail: "Retains ~63.6% of value after 5 years; projected to depreciate ~$14,690 over that span.",
      estimated: false
    },
    maintenance: {
      annual: 462,
      display: "Below average",
      detail: "Estimated at $462/yr, about $59 less than the compact SUV class average of $521/yr.",
      estimated: false
    },
    insurance: {
      annual: 1900,
      display: "$1,900/yr",
      detail: "No published nameplate-specific figure found; estimated in line with the compact SUV segment cluster.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (carried from 2025 rating)",
      estimated: false
    },
    warrantyBasic: "5 yr / 60,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    cargo: {
      behind2nd: 39.6,
      maxCargo: 74.1
    },
    features: [
      "Cargo/passenger space rivals midsize SUVs",
      "Industry-leading 10-yr/100,000-mi powertrain warranty",
      "SX-Prestige trim is Hybrid-only"
    ],
    dealerBrand: "kia",
    sources: [
      {
        label: "CarEdge – Sportage",
        url: "https://caredge.com/kia/sportage"
      },
      {
        label: "Cars.com – 2026 Sportage Trims",
        url: "https://www.cars.com/research/kia-sportage-2026/trims/"
      },
      {
        label: "IIHS – 2026 Sportage",
        url: "https://www.iihs.org/ratings/vehicle/kia/sportage-4-door-suv/2026"
      }
    ]
  },
  {
    id: "sportage-ex",
    make: "Kia",
    model: "Sportage",
    trimNote: "EX",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 31935,
      estimated: true
    },
    engine: "2.5L I4 (SX-Prestige: Hybrid)",
    hp: "187 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.1 sec (Hybrid: ~7.3 sec)",
    transmission: "8-spd auto (Hybrid: 6-spd auto)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "24 (AWD)",
    mpgHighway: "30 (AWD)",
    mpgCombined: "~28 (FWD)",
    fuelTank: "14.3 gal (Hybrid: 13.7 gal)",
    curbWeight: "3,827 lb",
    wheelbase: "108.5\"",
    towing: "2,500 lb (w/ trailer brakes)",
    groundClearance: "8.3\"",
    reliability: {
      value: 83,
      display: "Great (83/100)",
      detail: "Reliability score of 83/100 with a below-average complaint rate for the segment.",
      estimated: false
    },
    resale: {
      value: 64,
      display: "Average",
      detail: "Retains ~63.6% of value after 5 years; projected to depreciate ~$14,690 over that span.",
      estimated: false
    },
    maintenance: {
      annual: 462,
      display: "Below average",
      detail: "Estimated at $462/yr, about $59 less than the compact SUV class average of $521/yr.",
      estimated: false
    },
    insurance: {
      annual: 1900,
      display: "$1,900/yr",
      detail: "No published nameplate-specific figure found; estimated in line with the compact SUV segment cluster.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (carried from 2025 rating)",
      estimated: false
    },
    warrantyBasic: "5 yr / 60,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    cargo: {
      behind2nd: 39.6,
      maxCargo: 74.1
    },
    features: [
      "Cargo/passenger space rivals midsize SUVs",
      "Industry-leading 10-yr/100,000-mi powertrain warranty",
      "SX-Prestige trim is Hybrid-only"
    ],
    dealerBrand: "kia",
    sources: [
      {
        label: "CarEdge – Sportage",
        url: "https://caredge.com/kia/sportage"
      },
      {
        label: "Cars.com – 2026 Sportage Trims",
        url: "https://www.cars.com/research/kia-sportage-2026/trims/"
      },
      {
        label: "IIHS – 2026 Sportage",
        url: "https://www.iihs.org/ratings/vehicle/kia/sportage-4-door-suv/2026"
      }
    ]
  },
  {
    id: "sportage-sx",
    make: "Kia",
    model: "Sportage",
    trimNote: "SX",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 36000,
      estimated: true
    },
    engine: "2.5L I4 (SX-Prestige: Hybrid)",
    hp: "187 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.1 sec (Hybrid: ~7.3 sec)",
    transmission: "8-spd auto (Hybrid: 6-spd auto)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "24 (AWD)",
    mpgHighway: "30 (AWD)",
    mpgCombined: "~28 (FWD)",
    fuelTank: "14.3 gal (Hybrid: 13.7 gal)",
    curbWeight: "3,827 lb",
    wheelbase: "108.5\"",
    towing: "2,500 lb (w/ trailer brakes)",
    groundClearance: "8.3\"",
    reliability: {
      value: 83,
      display: "Great (83/100)",
      detail: "Reliability score of 83/100 with a below-average complaint rate for the segment.",
      estimated: false
    },
    resale: {
      value: 64,
      display: "Average",
      detail: "Retains ~63.6% of value after 5 years; projected to depreciate ~$14,690 over that span.",
      estimated: false
    },
    maintenance: {
      annual: 462,
      display: "Below average",
      detail: "Estimated at $462/yr, about $59 less than the compact SUV class average of $521/yr.",
      estimated: false
    },
    insurance: {
      annual: 1900,
      display: "$1,900/yr",
      detail: "No published nameplate-specific figure found; estimated in line with the compact SUV segment cluster.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (carried from 2025 rating)",
      estimated: false
    },
    warrantyBasic: "5 yr / 60,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    cargo: {
      behind2nd: 39.6,
      maxCargo: 74.1
    },
    features: [
      "Cargo/passenger space rivals midsize SUVs",
      "Industry-leading 10-yr/100,000-mi powertrain warranty",
      "SX-Prestige trim is Hybrid-only"
    ],
    dealerBrand: "kia",
    sources: [
      {
        label: "CarEdge – Sportage",
        url: "https://caredge.com/kia/sportage"
      },
      {
        label: "Cars.com – 2026 Sportage Trims",
        url: "https://www.cars.com/research/kia-sportage-2026/trims/"
      },
      {
        label: "IIHS – 2026 Sportage",
        url: "https://www.iihs.org/ratings/vehicle/kia/sportage-4-door-suv/2026"
      }
    ]
  },
  {
    id: "sportage-sx-prestige-hybrid",
    make: "Kia",
    model: "Sportage",
    trimNote: "SX-Prestige Hybrid",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 41835,
      estimated: false
    },
    engine: "2.5L I4 (SX-Prestige: Hybrid)",
    hp: "187 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.1 sec (Hybrid: ~7.3 sec)",
    transmission: "8-spd auto (Hybrid: 6-spd auto)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "24 (AWD)",
    mpgHighway: "30 (AWD)",
    mpgCombined: "~28 (FWD)",
    fuelTank: "14.3 gal (Hybrid: 13.7 gal)",
    curbWeight: "3,827 lb",
    wheelbase: "108.5\"",
    towing: "2,500 lb (w/ trailer brakes)",
    groundClearance: "8.3\"",
    reliability: {
      value: 83,
      display: "Great (83/100)",
      detail: "Reliability score of 83/100 with a below-average complaint rate for the segment.",
      estimated: false
    },
    resale: {
      value: 64,
      display: "Average",
      detail: "Retains ~63.6% of value after 5 years; projected to depreciate ~$14,690 over that span.",
      estimated: false
    },
    maintenance: {
      annual: 462,
      display: "Below average",
      detail: "Estimated at $462/yr, about $59 less than the compact SUV class average of $521/yr.",
      estimated: false
    },
    insurance: {
      annual: 1900,
      display: "$1,900/yr",
      detail: "No published nameplate-specific figure found; estimated in line with the compact SUV segment cluster.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (carried from 2025 rating)",
      estimated: false
    },
    warrantyBasic: "5 yr / 60,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    cargo: {
      behind2nd: 39.6,
      maxCargo: 74.1
    },
    features: [
      "Cargo/passenger space rivals midsize SUVs",
      "Industry-leading 10-yr/100,000-mi powertrain warranty",
      "SX-Prestige trim is Hybrid-only"
    ],
    dealerBrand: "kia",
    sources: [
      {
        label: "CarEdge – Sportage",
        url: "https://caredge.com/kia/sportage"
      },
      {
        label: "Cars.com – 2026 Sportage Trims",
        url: "https://www.cars.com/research/kia-sportage-2026/trims/"
      },
      {
        label: "IIHS – 2026 Sportage",
        url: "https://www.iihs.org/ratings/vehicle/kia/sportage-4-door-suv/2026"
      }
    ]
  },
  {
    id: "tucson-se",
    make: "Hyundai",
    model: "Tucson",
    trimNote: "SE",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 31050,
      estimated: false
    },
    engine: "2.5L I4",
    hp: "187 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.0 sec (Hybrid: 6.9 sec; PHEV: 7.1 sec)",
    transmission: "8-speed Shiftronic automatic",
    thirdRow: "No",
    seats: "5",
    mpgCity: "25 (FWD)",
    mpgHighway: "33 (FWD)",
    mpgCombined: "~28 (FWD)",
    fuelTank: "14.3 gal",
    curbWeight: "3,429 lb",
    wheelbase: "108.5\"",
    towing: "2,750 lb (w/ trailer brakes)",
    groundClearance: "8.3\"",
    reliability: {
      value: 78,
      display: "Good (7.8/10)",
      detail: "Edmunds expert road & track test score of 7.8/10.",
      estimated: false
    },
    resale: {
      value: 51,
      display: "Typical for class",
      detail: "Projected to depreciate $15,229 over 5 years on a $31,050 base price (~51% value retained). 5-yr total cost to own: $53,464.",
      estimated: false
    },
    maintenance: {
      annual: 500,
      display: "Low (early years)",
      detail: "Includes 3-yr/36,000-mile complimentary scheduled maintenance and a 10-yr/100,000-mile powertrain warranty.",
      estimated: true
    },
    insurance: {
      annual: 1905,
      display: "$1,905/yr",
      detail: "CarEdge average for the Tucson nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (4-star rollover)",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+",
      estimated: false
    },
    warrantyBasic: "5 yr / 60,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    cargo: {
      behind2nd: 41.2,
      maxCargo: 80.3
    },
    features: [
      "Segment-leading cargo space",
      "10-yr/100,000-mi powertrain warranty",
      "XRT adds off-road-styled trim; Hybrid and PHEV also available (not shown)"
    ],
    dealerBrand: "hyundai",
    sources: [
      {
        label: "Edmunds – 2026 Tucson Trims",
        url: "https://www.edmunds.com/hyundai/tucson/2026/trims/"
      },
      {
        label: "KBB – Tucson Cost to Own",
        url: "https://www.kbb.com/hyundai/tucson/2026/cost-to-own"
      },
      {
        label: "IIHS – 2026 Tucson",
        url: "https://www.informedforlife.com/cars/hyundai_tucson-4-door-suv_2026"
      }
    ]
  },
  {
    id: "tucson-xrt",
    make: "Hyundai",
    model: "Tucson",
    trimNote: "XRT",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 34825,
      estimated: false
    },
    engine: "2.5L I4",
    hp: "187 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.0 sec (Hybrid: 6.9 sec; PHEV: 7.1 sec)",
    transmission: "8-speed Shiftronic automatic",
    thirdRow: "No",
    seats: "5",
    mpgCity: "25 (FWD)",
    mpgHighway: "33 (FWD)",
    mpgCombined: "~28 (FWD)",
    fuelTank: "14.3 gal",
    curbWeight: "3,429 lb",
    wheelbase: "108.5\"",
    towing: "2,750 lb (w/ trailer brakes)",
    groundClearance: "8.3\"",
    reliability: {
      value: 78,
      display: "Good (7.8/10)",
      detail: "Edmunds expert road & track test score of 7.8/10.",
      estimated: false
    },
    resale: {
      value: 51,
      display: "Typical for class",
      detail: "Projected to depreciate $15,229 over 5 years on a $31,050 base price (~51% value retained). 5-yr total cost to own: $53,464.",
      estimated: false
    },
    maintenance: {
      annual: 500,
      display: "Low (early years)",
      detail: "Includes 3-yr/36,000-mile complimentary scheduled maintenance and a 10-yr/100,000-mile powertrain warranty.",
      estimated: true
    },
    insurance: {
      annual: 1905,
      display: "$1,905/yr",
      detail: "CarEdge average for the Tucson nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (4-star rollover)",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+",
      estimated: false
    },
    warrantyBasic: "5 yr / 60,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    cargo: {
      behind2nd: 41.2,
      maxCargo: 80.3
    },
    features: [
      "Segment-leading cargo space",
      "10-yr/100,000-mi powertrain warranty",
      "XRT adds off-road-styled trim; Hybrid and PHEV also available (not shown)"
    ],
    dealerBrand: "hyundai",
    sources: [
      {
        label: "Edmunds – 2026 Tucson Trims",
        url: "https://www.edmunds.com/hyundai/tucson/2026/trims/"
      },
      {
        label: "KBB – Tucson Cost to Own",
        url: "https://www.kbb.com/hyundai/tucson/2026/cost-to-own"
      },
      {
        label: "IIHS – 2026 Tucson",
        url: "https://www.informedforlife.com/cars/hyundai_tucson-4-door-suv_2026"
      }
    ]
  },
  {
    id: "tucson-sel-premium",
    make: "Hyundai",
    model: "Tucson",
    trimNote: "SEL Premium",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 35150,
      estimated: false
    },
    engine: "2.5L I4",
    hp: "187 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.0 sec (Hybrid: 6.9 sec; PHEV: 7.1 sec)",
    transmission: "8-speed Shiftronic automatic",
    thirdRow: "No",
    seats: "5",
    mpgCity: "25 (FWD)",
    mpgHighway: "33 (FWD)",
    mpgCombined: "~28 (FWD)",
    fuelTank: "14.3 gal",
    curbWeight: "3,429 lb",
    wheelbase: "108.5\"",
    towing: "2,750 lb (w/ trailer brakes)",
    groundClearance: "8.3\"",
    reliability: {
      value: 78,
      display: "Good (7.8/10)",
      detail: "Edmunds expert road & track test score of 7.8/10.",
      estimated: false
    },
    resale: {
      value: 51,
      display: "Typical for class",
      detail: "Projected to depreciate $15,229 over 5 years on a $31,050 base price (~51% value retained). 5-yr total cost to own: $53,464.",
      estimated: false
    },
    maintenance: {
      annual: 500,
      display: "Low (early years)",
      detail: "Includes 3-yr/36,000-mile complimentary scheduled maintenance and a 10-yr/100,000-mile powertrain warranty.",
      estimated: true
    },
    insurance: {
      annual: 1905,
      display: "$1,905/yr",
      detail: "CarEdge average for the Tucson nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (4-star rollover)",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+",
      estimated: false
    },
    warrantyBasic: "5 yr / 60,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    cargo: {
      behind2nd: 41.2,
      maxCargo: 80.3
    },
    features: [
      "Segment-leading cargo space",
      "10-yr/100,000-mi powertrain warranty",
      "XRT adds off-road-styled trim; Hybrid and PHEV also available (not shown)"
    ],
    dealerBrand: "hyundai",
    sources: [
      {
        label: "Edmunds – 2026 Tucson Trims",
        url: "https://www.edmunds.com/hyundai/tucson/2026/trims/"
      },
      {
        label: "KBB – Tucson Cost to Own",
        url: "https://www.kbb.com/hyundai/tucson/2026/cost-to-own"
      },
      {
        label: "IIHS – 2026 Tucson",
        url: "https://www.informedforlife.com/cars/hyundai_tucson-4-door-suv_2026"
      }
    ]
  },
  {
    id: "tucson-limited",
    make: "Hyundai",
    model: "Tucson",
    trimNote: "Limited",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 38500,
      estimated: true
    },
    engine: "2.5L I4",
    hp: "187 hp",
    torque: "178 lb-ft",
    zeroToSixty: "9.0 sec (Hybrid: 6.9 sec; PHEV: 7.1 sec)",
    transmission: "8-speed Shiftronic automatic",
    thirdRow: "No",
    seats: "5",
    mpgCity: "25 (FWD)",
    mpgHighway: "33 (FWD)",
    mpgCombined: "~28 (FWD)",
    fuelTank: "14.3 gal",
    curbWeight: "3,429 lb",
    wheelbase: "108.5\"",
    towing: "2,750 lb (w/ trailer brakes)",
    groundClearance: "8.3\"",
    reliability: {
      value: 78,
      display: "Good (7.8/10)",
      detail: "Edmunds expert road & track test score of 7.8/10.",
      estimated: false
    },
    resale: {
      value: 51,
      display: "Typical for class",
      detail: "Projected to depreciate $15,229 over 5 years on a $31,050 base price (~51% value retained). 5-yr total cost to own: $53,464.",
      estimated: false
    },
    maintenance: {
      annual: 500,
      display: "Low (early years)",
      detail: "Includes 3-yr/36,000-mile complimentary scheduled maintenance and a 10-yr/100,000-mile powertrain warranty.",
      estimated: true
    },
    insurance: {
      annual: 1905,
      display: "$1,905/yr",
      detail: "CarEdge average for the Tucson nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (4-star rollover)",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+",
      estimated: false
    },
    warrantyBasic: "5 yr / 60,000 mi",
    warrantyPowertrain: "10 yr / 100,000 mi",
    cargo: {
      behind2nd: 41.2,
      maxCargo: 80.3
    },
    features: [
      "Segment-leading cargo space",
      "10-yr/100,000-mi powertrain warranty",
      "XRT adds off-road-styled trim; Hybrid and PHEV also available (not shown)"
    ],
    dealerBrand: "hyundai",
    sources: [
      {
        label: "Edmunds – 2026 Tucson Trims",
        url: "https://www.edmunds.com/hyundai/tucson/2026/trims/"
      },
      {
        label: "KBB – Tucson Cost to Own",
        url: "https://www.kbb.com/hyundai/tucson/2026/cost-to-own"
      },
      {
        label: "IIHS – 2026 Tucson",
        url: "https://www.informedforlife.com/cars/hyundai_tucson-4-door-suv_2026"
      }
    ]
  },
  {
    id: "rogue-s",
    make: "Nissan",
    model: "Rogue",
    trimNote: "S",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 30180,
      estimated: false
    },
    engine: "1.5L VC-Turbo I3",
    hp: "201 hp",
    torque: "225 lb-ft",
    zeroToSixty: "~8.2 sec",
    transmission: "CVT w/OD",
    thirdRow: "No",
    seats: "5",
    mpgCity: "29 (FWD)",
    mpgHighway: "36 (FWD)",
    mpgCombined: "~32 (FWD)",
    fuelTank: "14.5 gal",
    curbWeight: "3,607 lb",
    wheelbase: "106.5\"",
    towing: "1,500 lb",
    groundClearance: "8.2\"",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "5-star NHTSA overall rating, IIHS Top Safety Pick; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 62,
      display: "Reasonable",
      detail: "Solid but not as strong as the RAV4 or CR-V; offset by high marks for space, comfort, and fuel economy.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Average",
      detail: "Annual maintenance runs an estimated $500–$600, in line with the compact SUV average.",
      estimated: false
    },
    insurance: {
      annual: 1950,
      display: "$1,950/yr",
      detail: "No published nameplate-specific figure found; estimated in line with the compact SUV segment cluster.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (4 consecutive years)",
      estimated: false
    },
    iihs: {
      rank: 2,
      display: "TOP SAFETY PICK",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 36.5,
      maxCargo: 74.1
    },
    features: [
      "Divide-N-Hide flexible cargo system",
      "Rock Creek adds off-road-styled AWD trim",
      "IIHS Top Safety Pick"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Edmunds – 2026 Rogue Trims",
        url: "https://www.edmunds.com/nissan/rogue/2026/trims/"
      },
      {
        label: "Edmunds – 2026 Rogue full review",
        url: "https://www.edmunds.com/car-news/2026-nissan-rogue-full-rating-review.html"
      },
      {
        label: "Nissan USA News – IIHS TSP",
        url: "https://usa.nissannews.com/en-US/releases/2026-nissan-rogue-earns-2025-iihs-top-safety-pick-with-enhanced-crash-protection"
      }
    ]
  },
  {
    id: "rogue-sv",
    make: "Nissan",
    model: "Rogue",
    trimNote: "SV",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 31180,
      estimated: false
    },
    engine: "1.5L VC-Turbo I3",
    hp: "201 hp",
    torque: "225 lb-ft",
    zeroToSixty: "~8.2 sec",
    transmission: "CVT w/OD",
    thirdRow: "No",
    seats: "5",
    mpgCity: "29 (FWD)",
    mpgHighway: "36 (FWD)",
    mpgCombined: "~32 (FWD)",
    fuelTank: "14.5 gal",
    curbWeight: "3,607 lb",
    wheelbase: "106.5\"",
    towing: "1,500 lb",
    groundClearance: "8.2\"",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "5-star NHTSA overall rating, IIHS Top Safety Pick; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 62,
      display: "Reasonable",
      detail: "Solid but not as strong as the RAV4 or CR-V; offset by high marks for space, comfort, and fuel economy.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Average",
      detail: "Annual maintenance runs an estimated $500–$600, in line with the compact SUV average.",
      estimated: false
    },
    insurance: {
      annual: 1950,
      display: "$1,950/yr",
      detail: "No published nameplate-specific figure found; estimated in line with the compact SUV segment cluster.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (4 consecutive years)",
      estimated: false
    },
    iihs: {
      rank: 2,
      display: "TOP SAFETY PICK",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 36.5,
      maxCargo: 74.1
    },
    features: [
      "Divide-N-Hide flexible cargo system",
      "Rock Creek adds off-road-styled AWD trim",
      "IIHS Top Safety Pick"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Edmunds – 2026 Rogue Trims",
        url: "https://www.edmunds.com/nissan/rogue/2026/trims/"
      },
      {
        label: "Edmunds – 2026 Rogue full review",
        url: "https://www.edmunds.com/car-news/2026-nissan-rogue-full-rating-review.html"
      },
      {
        label: "Nissan USA News – IIHS TSP",
        url: "https://usa.nissannews.com/en-US/releases/2026-nissan-rogue-earns-2025-iihs-top-safety-pick-with-enhanced-crash-protection"
      }
    ]
  },
  {
    id: "rogue-rock-creek",
    make: "Nissan",
    model: "Rogue",
    trimNote: "Rock Creek",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 35080,
      estimated: false
    },
    engine: "1.5L VC-Turbo I3",
    hp: "201 hp",
    torque: "225 lb-ft",
    zeroToSixty: "~8.2 sec",
    transmission: "CVT w/OD",
    thirdRow: "No",
    seats: "5",
    mpgCity: "29 (FWD)",
    mpgHighway: "36 (FWD)",
    mpgCombined: "~32 (FWD)",
    fuelTank: "14.5 gal",
    curbWeight: "3,607 lb",
    wheelbase: "106.5\"",
    towing: "1,500 lb",
    groundClearance: "8.2\"",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "5-star NHTSA overall rating, IIHS Top Safety Pick; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 62,
      display: "Reasonable",
      detail: "Solid but not as strong as the RAV4 or CR-V; offset by high marks for space, comfort, and fuel economy.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Average",
      detail: "Annual maintenance runs an estimated $500–$600, in line with the compact SUV average.",
      estimated: false
    },
    insurance: {
      annual: 1950,
      display: "$1,950/yr",
      detail: "No published nameplate-specific figure found; estimated in line with the compact SUV segment cluster.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (4 consecutive years)",
      estimated: false
    },
    iihs: {
      rank: 2,
      display: "TOP SAFETY PICK",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 36.5,
      maxCargo: 74.1
    },
    features: [
      "Divide-N-Hide flexible cargo system",
      "Rock Creek adds off-road-styled AWD trim",
      "IIHS Top Safety Pick"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Edmunds – 2026 Rogue Trims",
        url: "https://www.edmunds.com/nissan/rogue/2026/trims/"
      },
      {
        label: "Edmunds – 2026 Rogue full review",
        url: "https://www.edmunds.com/car-news/2026-nissan-rogue-full-rating-review.html"
      },
      {
        label: "Nissan USA News – IIHS TSP",
        url: "https://usa.nissannews.com/en-US/releases/2026-nissan-rogue-earns-2025-iihs-top-safety-pick-with-enhanced-crash-protection"
      }
    ]
  },
  {
    id: "rogue-sl",
    make: "Nissan",
    model: "Rogue",
    trimNote: "SL",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 36680,
      estimated: false
    },
    engine: "1.5L VC-Turbo I3",
    hp: "201 hp",
    torque: "225 lb-ft",
    zeroToSixty: "~8.2 sec",
    transmission: "CVT w/OD",
    thirdRow: "No",
    seats: "5",
    mpgCity: "29 (FWD)",
    mpgHighway: "36 (FWD)",
    mpgCombined: "~32 (FWD)",
    fuelTank: "14.5 gal",
    curbWeight: "3,607 lb",
    wheelbase: "106.5\"",
    towing: "1,500 lb",
    groundClearance: "8.2\"",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "5-star NHTSA overall rating, IIHS Top Safety Pick; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 62,
      display: "Reasonable",
      detail: "Solid but not as strong as the RAV4 or CR-V; offset by high marks for space, comfort, and fuel economy.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Average",
      detail: "Annual maintenance runs an estimated $500–$600, in line with the compact SUV average.",
      estimated: false
    },
    insurance: {
      annual: 1950,
      display: "$1,950/yr",
      detail: "No published nameplate-specific figure found; estimated in line with the compact SUV segment cluster.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (4 consecutive years)",
      estimated: false
    },
    iihs: {
      rank: 2,
      display: "TOP SAFETY PICK",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 36.5,
      maxCargo: 74.1
    },
    features: [
      "Divide-N-Hide flexible cargo system",
      "Rock Creek adds off-road-styled AWD trim",
      "IIHS Top Safety Pick"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Edmunds – 2026 Rogue Trims",
        url: "https://www.edmunds.com/nissan/rogue/2026/trims/"
      },
      {
        label: "Edmunds – 2026 Rogue full review",
        url: "https://www.edmunds.com/car-news/2026-nissan-rogue-full-rating-review.html"
      },
      {
        label: "Nissan USA News – IIHS TSP",
        url: "https://usa.nissannews.com/en-US/releases/2026-nissan-rogue-earns-2025-iihs-top-safety-pick-with-enhanced-crash-protection"
      }
    ]
  },
  {
    id: "rogue-platinum",
    make: "Nissan",
    model: "Rogue",
    trimNote: "Platinum",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail.",
    price: {
      low: 40380,
      estimated: false
    },
    engine: "1.5L VC-Turbo I3",
    hp: "201 hp",
    torque: "225 lb-ft",
    zeroToSixty: "~8.2 sec",
    transmission: "CVT w/OD",
    thirdRow: "No",
    seats: "5",
    mpgCity: "29 (FWD)",
    mpgHighway: "36 (FWD)",
    mpgCombined: "~32 (FWD)",
    fuelTank: "14.5 gal",
    curbWeight: "3,607 lb",
    wheelbase: "106.5\"",
    towing: "1,500 lb",
    groundClearance: "8.2\"",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "5-star NHTSA overall rating, IIHS Top Safety Pick; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 62,
      display: "Reasonable",
      detail: "Solid but not as strong as the RAV4 or CR-V; offset by high marks for space, comfort, and fuel economy.",
      estimated: true
    },
    maintenance: {
      annual: 550,
      display: "Average",
      detail: "Annual maintenance runs an estimated $500–$600, in line with the compact SUV average.",
      estimated: false
    },
    insurance: {
      annual: 1950,
      display: "$1,950/yr",
      detail: "No published nameplate-specific figure found; estimated in line with the compact SUV segment cluster.",
      estimated: true
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (4 consecutive years)",
      estimated: false
    },
    iihs: {
      rank: 2,
      display: "TOP SAFETY PICK",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 36.5,
      maxCargo: 74.1
    },
    features: [
      "Divide-N-Hide flexible cargo system",
      "Rock Creek adds off-road-styled AWD trim",
      "IIHS Top Safety Pick"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Edmunds – 2026 Rogue Trims",
        url: "https://www.edmunds.com/nissan/rogue/2026/trims/"
      },
      {
        label: "Edmunds – 2026 Rogue full review",
        url: "https://www.edmunds.com/car-news/2026-nissan-rogue-full-rating-review.html"
      },
      {
        label: "Nissan USA News – IIHS TSP",
        url: "https://usa.nissannews.com/en-US/releases/2026-nissan-rogue-earns-2025-iihs-top-safety-pick-with-enhanced-crash-protection"
      }
    ]
  },
  {
    id: "equinox-lt",
    make: "Chevrolet",
    model: "Equinox",
    trimNote: "LT",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail. (standard on Activ)",
    price: {
      low: 28600,
      estimated: false
    },
    engine: "1.5L Turbo I4",
    hp: "175 hp (FWD)",
    torque: "184 lb-ft (203 lb-ft on AWD)",
    zeroToSixty: "~8.5 sec (est.)",
    transmission: "CVT (FWD) / 8-speed automatic (AWD)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "26 (FWD)",
    mpgHighway: "29 (FWD)",
    mpgCombined: "~27 (FWD)",
    fuelTank: "14.8 gal",
    curbWeight: "3,428–3,629 lb",
    wheelbase: "107.5\"",
    towing: "1,500 lb",
    groundClearance: "~8.1\" (8.05–8.2\" by trim)",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "Ranks in the upper third of most-reliable small SUVs under $30k; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 65,
      display: "Good",
      detail: "Reliability supports solid resale, especially with full service history.",
      estimated: true
    },
    maintenance: {
      annual: 575,
      display: "Average",
      detail: "Averages $575/yr through the first 5 years of ownership.",
      estimated: false
    },
    insurance: {
      annual: 1900,
      display: "$1,900/yr",
      detail: "No consistent published figure found; estimated in line with the compact SUV segment.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 0,
      display: "Not yet published for MY2026",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 29.8,
      maxCargo: null
    },
    features: [
      "The base LS trim was dropped for 2026 — LT is now the entry point",
      "Modern infotainment/tech across the line",
      "Activ adds raised ground clearance and standard AWD"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "Edmunds – 2026 Equinox Trims",
        url: "https://www.edmunds.com/chevrolet/equinox/2026/trims/"
      },
      {
        label: "J.D. Power – 2026 Equinox",
        url: "https://www.jdpower.com/cars/2026/chevrolet/equinox"
      }
    ]
  },
  {
    id: "equinox-rs",
    make: "Chevrolet",
    model: "Equinox",
    trimNote: "RS",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail. (standard on Activ)",
    price: {
      low: 33600,
      estimated: false
    },
    engine: "1.5L Turbo I4",
    hp: "175 hp (FWD)",
    torque: "184 lb-ft (203 lb-ft on AWD)",
    zeroToSixty: "~8.5 sec (est.)",
    transmission: "CVT (FWD) / 8-speed automatic (AWD)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "26 (FWD)",
    mpgHighway: "29 (FWD)",
    mpgCombined: "~27 (FWD)",
    fuelTank: "14.8 gal",
    curbWeight: "3,428–3,629 lb",
    wheelbase: "107.5\"",
    towing: "1,500 lb",
    groundClearance: "~8.1\" (8.05–8.2\" by trim)",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "Ranks in the upper third of most-reliable small SUVs under $30k; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 65,
      display: "Good",
      detail: "Reliability supports solid resale, especially with full service history.",
      estimated: true
    },
    maintenance: {
      annual: 575,
      display: "Average",
      detail: "Averages $575/yr through the first 5 years of ownership.",
      estimated: false
    },
    insurance: {
      annual: 1900,
      display: "$1,900/yr",
      detail: "No consistent published figure found; estimated in line with the compact SUV segment.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 0,
      display: "Not yet published for MY2026",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 29.8,
      maxCargo: null
    },
    features: [
      "The base LS trim was dropped for 2026 — LT is now the entry point",
      "Modern infotainment/tech across the line",
      "Activ adds raised ground clearance and standard AWD"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "Edmunds – 2026 Equinox Trims",
        url: "https://www.edmunds.com/chevrolet/equinox/2026/trims/"
      },
      {
        label: "J.D. Power – 2026 Equinox",
        url: "https://www.jdpower.com/cars/2026/chevrolet/equinox"
      }
    ]
  },
  {
    id: "equinox-activ",
    make: "Chevrolet",
    model: "Equinox",
    trimNote: "Activ",
    className: "Compact SUV",
    drivetrain: "FWD standard / AWD avail. (standard on Activ)",
    price: {
      low: 35600,
      estimated: true
    },
    engine: "1.5L Turbo I4",
    hp: "175 hp (FWD)",
    torque: "184 lb-ft (203 lb-ft on AWD)",
    zeroToSixty: "~8.5 sec (est.)",
    transmission: "CVT (FWD) / 8-speed automatic (AWD)",
    thirdRow: "No",
    seats: "5",
    mpgCity: "26 (FWD)",
    mpgHighway: "29 (FWD)",
    mpgCombined: "~27 (FWD)",
    fuelTank: "14.8 gal",
    curbWeight: "3,428–3,629 lb",
    wheelbase: "107.5\"",
    towing: "1,500 lb",
    groundClearance: "~8.1\" (8.05–8.2\" by trim)",
    reliability: {
      value: 80,
      display: "Very good",
      detail: "Ranks in the upper third of most-reliable small SUVs under $30k; consumer rating averages 4.0 / 5.0.",
      estimated: false
    },
    resale: {
      value: 65,
      display: "Good",
      detail: "Reliability supports solid resale, especially with full service history.",
      estimated: true
    },
    maintenance: {
      annual: 575,
      display: "Average",
      detail: "Averages $575/yr through the first 5 years of ownership.",
      estimated: false
    },
    insurance: {
      annual: 1900,
      display: "$1,900/yr",
      detail: "No consistent published figure found; estimated in line with the compact SUV segment.",
      estimated: true
    },
    nhtsa: {
      stars: null,
      display: "Not yet published for MY2026",
      estimated: false
    },
    iihs: {
      rank: 0,
      display: "Not yet published for MY2026",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 29.8,
      maxCargo: null
    },
    features: [
      "The base LS trim was dropped for 2026 — LT is now the entry point",
      "Modern infotainment/tech across the line",
      "Activ adds raised ground clearance and standard AWD"
    ],
    dealerBrand: "chevrolet",
    sources: [
      {
        label: "Edmunds – 2026 Equinox Trims",
        url: "https://www.edmunds.com/chevrolet/equinox/2026/trims/"
      },
      {
        label: "J.D. Power – 2026 Equinox",
        url: "https://www.jdpower.com/cars/2026/chevrolet/equinox"
      }
    ]
  },
  {
    id: "pathfinder-s",
    make: "Nissan",
    model: "Pathfinder",
    trimNote: "S",
    className: "Midsize SUV (3-Row)",
    drivetrain: "FWD standard / 4WD avail.",
    price: {
      low: 39990,
      estimated: false
    },
    engine: "3.5L DOHC V6",
    hp: "284–295 hp",
    torque: "259–270 lb-ft",
    zeroToSixty: "~6.5–7.5 sec (varies by trim)",
    transmission: "9-speed automatic",
    thirdRow: "Yes",
    seats: "7–8",
    mpgCity: "21 (2WD)",
    mpgHighway: "27 (2WD)",
    mpgCombined: "~21–23",
    fuelTank: "18.5 gal",
    curbWeight: "4,334–4,489 lb",
    wheelbase: "114.2\"",
    towing: "6,000 lb",
    groundClearance: "~7.7\"",
    reliability: {
      value: 82,
      display: "Excellent (82/100)",
      detail: "Auto Reliability Index rates this generation 82/100 (“excellent”), its best-ever score; RepairPal's independent consumer rating is more mixed at 3.5/5.0.",
      estimated: false
    },
    resale: {
      value: 47,
      display: "Below average",
      detail: "5-year resale estimates vary by source: iSeeCars puts retained value near 47%, other estimates range 40–51%. The midsize SUV class average retains ~53.7%.",
      estimated: true
    },
    maintenance: {
      annual: 542,
      display: "Below average",
      detail: "RepairPal-tracked average annual repair cost of $542 — lower than the average SUV.",
      estimated: false
    },
    insurance: {
      annual: 2477,
      display: "$2,477/yr",
      detail: "CarEdge average for the Pathfinder nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (5-star side, 4-star frontal/rollover)",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (carried from prior year)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 45.0,
      maxCargo: 80.5
    },
    features: [
      "Seats up to 8 across 3 rows",
      "6,000 lb towing capacity",
      "Rock Creek adds off-road-styled 4WD"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Nissan USA News – 2026 Pathfinder Pricing",
        url: "https://usa.nissannews.com/en-US/releases/refreshed-2026-nissan-pathfinder-priced-from-39900"
      },
      {
        label: "Auto Reliability Index – Pathfinder",
        url: "https://autoreliabilityindex.com/nissan/pathfinder/2026"
      },
      {
        label: "IIHS – 2026 Pathfinder",
        url: "https://www.iihs.org/ratings/vehicle/nissan/pathfinder-4-door-suv/2026"
      },
      {
        label: "CarEdge – Pathfinder Insurance",
        url: "https://caredge.com/nissan/pathfinder/insurance"
      }
    ]
  },
  {
    id: "pathfinder-sv",
    make: "Nissan",
    model: "Pathfinder",
    trimNote: "SV",
    className: "Midsize SUV (3-Row)",
    drivetrain: "FWD standard / 4WD avail.",
    price: {
      low: 41990,
      estimated: false
    },
    engine: "3.5L DOHC V6",
    hp: "284–295 hp",
    torque: "259–270 lb-ft",
    zeroToSixty: "~6.5–7.5 sec (varies by trim)",
    transmission: "9-speed automatic",
    thirdRow: "Yes",
    seats: "7–8",
    mpgCity: "21 (2WD)",
    mpgHighway: "27 (2WD)",
    mpgCombined: "~21–23",
    fuelTank: "18.5 gal",
    curbWeight: "4,334–4,489 lb",
    wheelbase: "114.2\"",
    towing: "6,000 lb",
    groundClearance: "~7.7\"",
    reliability: {
      value: 82,
      display: "Excellent (82/100)",
      detail: "Auto Reliability Index rates this generation 82/100 (“excellent”), its best-ever score; RepairPal's independent consumer rating is more mixed at 3.5/5.0.",
      estimated: false
    },
    resale: {
      value: 47,
      display: "Below average",
      detail: "5-year resale estimates vary by source: iSeeCars puts retained value near 47%, other estimates range 40–51%. The midsize SUV class average retains ~53.7%.",
      estimated: true
    },
    maintenance: {
      annual: 542,
      display: "Below average",
      detail: "RepairPal-tracked average annual repair cost of $542 — lower than the average SUV.",
      estimated: false
    },
    insurance: {
      annual: 2477,
      display: "$2,477/yr",
      detail: "CarEdge average for the Pathfinder nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (5-star side, 4-star frontal/rollover)",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (carried from prior year)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 45.0,
      maxCargo: 80.5
    },
    features: [
      "Seats up to 8 across 3 rows",
      "6,000 lb towing capacity",
      "Rock Creek adds off-road-styled 4WD"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Nissan USA News – 2026 Pathfinder Pricing",
        url: "https://usa.nissannews.com/en-US/releases/refreshed-2026-nissan-pathfinder-priced-from-39900"
      },
      {
        label: "Auto Reliability Index – Pathfinder",
        url: "https://autoreliabilityindex.com/nissan/pathfinder/2026"
      },
      {
        label: "IIHS – 2026 Pathfinder",
        url: "https://www.iihs.org/ratings/vehicle/nissan/pathfinder-4-door-suv/2026"
      },
      {
        label: "CarEdge – Pathfinder Insurance",
        url: "https://caredge.com/nissan/pathfinder/insurance"
      }
    ]
  },
  {
    id: "pathfinder-sl",
    make: "Nissan",
    model: "Pathfinder",
    trimNote: "SL",
    className: "Midsize SUV (3-Row)",
    drivetrain: "FWD standard / 4WD avail.",
    price: {
      low: 44590,
      estimated: false
    },
    engine: "3.5L DOHC V6",
    hp: "284–295 hp",
    torque: "259–270 lb-ft",
    zeroToSixty: "~6.5–7.5 sec (varies by trim)",
    transmission: "9-speed automatic",
    thirdRow: "Yes",
    seats: "7–8",
    mpgCity: "21 (2WD)",
    mpgHighway: "27 (2WD)",
    mpgCombined: "~21–23",
    fuelTank: "18.5 gal",
    curbWeight: "4,334–4,489 lb",
    wheelbase: "114.2\"",
    towing: "6,000 lb",
    groundClearance: "~7.7\"",
    reliability: {
      value: 82,
      display: "Excellent (82/100)",
      detail: "Auto Reliability Index rates this generation 82/100 (“excellent”), its best-ever score; RepairPal's independent consumer rating is more mixed at 3.5/5.0.",
      estimated: false
    },
    resale: {
      value: 47,
      display: "Below average",
      detail: "5-year resale estimates vary by source: iSeeCars puts retained value near 47%, other estimates range 40–51%. The midsize SUV class average retains ~53.7%.",
      estimated: true
    },
    maintenance: {
      annual: 542,
      display: "Below average",
      detail: "RepairPal-tracked average annual repair cost of $542 — lower than the average SUV.",
      estimated: false
    },
    insurance: {
      annual: 2477,
      display: "$2,477/yr",
      detail: "CarEdge average for the Pathfinder nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (5-star side, 4-star frontal/rollover)",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (carried from prior year)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 45.0,
      maxCargo: 80.5
    },
    features: [
      "Seats up to 8 across 3 rows",
      "6,000 lb towing capacity",
      "Rock Creek adds off-road-styled 4WD"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Nissan USA News – 2026 Pathfinder Pricing",
        url: "https://usa.nissannews.com/en-US/releases/refreshed-2026-nissan-pathfinder-priced-from-39900"
      },
      {
        label: "Auto Reliability Index – Pathfinder",
        url: "https://autoreliabilityindex.com/nissan/pathfinder/2026"
      },
      {
        label: "IIHS – 2026 Pathfinder",
        url: "https://www.iihs.org/ratings/vehicle/nissan/pathfinder-4-door-suv/2026"
      },
      {
        label: "CarEdge – Pathfinder Insurance",
        url: "https://caredge.com/nissan/pathfinder/insurance"
      }
    ]
  },
  {
    id: "pathfinder-rock-creek",
    make: "Nissan",
    model: "Pathfinder",
    trimNote: "Rock Creek",
    className: "Midsize SUV (3-Row)",
    drivetrain: "FWD standard / 4WD avail.",
    price: {
      low: 45090,
      estimated: false
    },
    engine: "3.5L DOHC V6",
    hp: "284–295 hp",
    torque: "259–270 lb-ft",
    zeroToSixty: "~6.5–7.5 sec (varies by trim)",
    transmission: "9-speed automatic",
    thirdRow: "Yes",
    seats: "7–8",
    mpgCity: "21 (2WD)",
    mpgHighway: "27 (2WD)",
    mpgCombined: "~21–23",
    fuelTank: "18.5 gal",
    curbWeight: "4,334–4,489 lb",
    wheelbase: "114.2\"",
    towing: "6,000 lb",
    groundClearance: "~7.7\"",
    reliability: {
      value: 82,
      display: "Excellent (82/100)",
      detail: "Auto Reliability Index rates this generation 82/100 (“excellent”), its best-ever score; RepairPal's independent consumer rating is more mixed at 3.5/5.0.",
      estimated: false
    },
    resale: {
      value: 47,
      display: "Below average",
      detail: "5-year resale estimates vary by source: iSeeCars puts retained value near 47%, other estimates range 40–51%. The midsize SUV class average retains ~53.7%.",
      estimated: true
    },
    maintenance: {
      annual: 542,
      display: "Below average",
      detail: "RepairPal-tracked average annual repair cost of $542 — lower than the average SUV.",
      estimated: false
    },
    insurance: {
      annual: 2477,
      display: "$2,477/yr",
      detail: "CarEdge average for the Pathfinder nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (5-star side, 4-star frontal/rollover)",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (carried from prior year)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 45.0,
      maxCargo: 80.5
    },
    features: [
      "Seats up to 8 across 3 rows",
      "6,000 lb towing capacity",
      "Rock Creek adds off-road-styled 4WD"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Nissan USA News – 2026 Pathfinder Pricing",
        url: "https://usa.nissannews.com/en-US/releases/refreshed-2026-nissan-pathfinder-priced-from-39900"
      },
      {
        label: "Auto Reliability Index – Pathfinder",
        url: "https://autoreliabilityindex.com/nissan/pathfinder/2026"
      },
      {
        label: "IIHS – 2026 Pathfinder",
        url: "https://www.iihs.org/ratings/vehicle/nissan/pathfinder-4-door-suv/2026"
      },
      {
        label: "CarEdge – Pathfinder Insurance",
        url: "https://caredge.com/nissan/pathfinder/insurance"
      }
    ]
  },
  {
    id: "pathfinder-platinum",
    make: "Nissan",
    model: "Pathfinder",
    trimNote: "Platinum",
    className: "Midsize SUV (3-Row)",
    drivetrain: "FWD standard / 4WD avail.",
    price: {
      low: 51790,
      estimated: false
    },
    engine: "3.5L DOHC V6",
    hp: "284–295 hp",
    torque: "259–270 lb-ft",
    zeroToSixty: "~6.5–7.5 sec (varies by trim)",
    transmission: "9-speed automatic",
    thirdRow: "Yes",
    seats: "7–8",
    mpgCity: "21 (2WD)",
    mpgHighway: "27 (2WD)",
    mpgCombined: "~21–23",
    fuelTank: "18.5 gal",
    curbWeight: "4,334–4,489 lb",
    wheelbase: "114.2\"",
    towing: "6,000 lb",
    groundClearance: "~7.7\"",
    reliability: {
      value: 82,
      display: "Excellent (82/100)",
      detail: "Auto Reliability Index rates this generation 82/100 (“excellent”), its best-ever score; RepairPal's independent consumer rating is more mixed at 3.5/5.0.",
      estimated: false
    },
    resale: {
      value: 47,
      display: "Below average",
      detail: "5-year resale estimates vary by source: iSeeCars puts retained value near 47%, other estimates range 40–51%. The midsize SUV class average retains ~53.7%.",
      estimated: true
    },
    maintenance: {
      annual: 542,
      display: "Below average",
      detail: "RepairPal-tracked average annual repair cost of $542 — lower than the average SUV.",
      estimated: false
    },
    insurance: {
      annual: 2477,
      display: "$2,477/yr",
      detail: "CarEdge average for the Pathfinder nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 5,
      display: "5-star overall (5-star side, 4-star frontal/rollover)",
      estimated: false
    },
    iihs: {
      rank: 3,
      display: "TOP SAFETY PICK+ (carried from prior year)",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 45.0,
      maxCargo: 80.5
    },
    features: [
      "Seats up to 8 across 3 rows",
      "6,000 lb towing capacity",
      "Rock Creek adds off-road-styled 4WD"
    ],
    dealerBrand: "nissan",
    sources: [
      {
        label: "Nissan USA News – 2026 Pathfinder Pricing",
        url: "https://usa.nissannews.com/en-US/releases/refreshed-2026-nissan-pathfinder-priced-from-39900"
      },
      {
        label: "Auto Reliability Index – Pathfinder",
        url: "https://autoreliabilityindex.com/nissan/pathfinder/2026"
      },
      {
        label: "IIHS – 2026 Pathfinder",
        url: "https://www.iihs.org/ratings/vehicle/nissan/pathfinder-4-door-suv/2026"
      },
      {
        label: "CarEdge – Pathfinder Insurance",
        url: "https://caredge.com/nissan/pathfinder/insurance"
      }
    ]
  },
  {
    id: "4runner-gas-sr5",
    make: "Toyota",
    model: "4Runner",
    trimNote: "SR5",
    className: "Midsize SUV (3-Row)",
    drivetrain: "RWD standard / 4WD avail.",
    price: {
      low: 41870,
      estimated: false
    },
    engine: "2.4L Turbo I4",
    hp: "278 hp",
    torque: "317 lb-ft",
    zeroToSixty: "7.3–8.2 sec (by trim)",
    transmission: "8-speed automatic",
    thirdRow: "Available",
    seats: "5–7",
    mpgCity: "20 (4WD)",
    mpgHighway: "25 (4WD)",
    mpgCombined: "~21–22",
    fuelTank: "19.0 gal",
    curbWeight: "4,455–4,730 lb",
    wheelbase: "112.2\"",
    towing: "6,000 lb",
    groundClearance: "8.1–9.2\"",
    reliability: {
      value: 84,
      display: "Excellent (84/100)",
      detail: "Auto Reliability Index rates this generation 84/100, its best year yet; Toyota/Lexus swept the 2026 J.D. Power dependability standings.",
      estimated: false
    },
    resale: {
      value: 58,
      display: "Excellent",
      detail: "Projected to retain 58% of value after 5 years — the 3rd-highest resale value of any 2026 vehicle.",
      estimated: false
    },
    maintenance: {
      annual: 1169,
      display: "Higher",
      detail: "Averages about $1,169/yr — more than compact SUVs, but body-on-frame durability offsets the extra cost for many buyers.",
      estimated: false
    },
    insurance: {
      annual: 2045,
      display: "$2,045/yr",
      detail: "CarEdge average for the 4Runner nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 4,
      display: "4-star overall",
      estimated: false
    },
    iihs: {
      rank: 1,
      display: "Mixed: Marginal (moderate overlap front) / Good (side); rating incomplete",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 48.4,
      maxCargo: 82
    },
    features: [
      "Body-on-frame off-road capability",
      "i-FORCE MAX hybrid available (+~$2,800) on TRD Off-Road and Limited",
      "Optional 3rd-row seating"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "Cars.com – How Much Is the 2026 4Runner?",
        url: "https://www.cars.com/articles/how-much-is-the-2026-toyota-4runner-518140/"
      },
      {
        label: "Auto Reliability Index – 4Runner",
        url: "https://autoreliabilityindex.com/toyota/4runner"
      },
      {
        label: "CarEdge – 4Runner Insurance",
        url: "https://caredge.com/toyota/4runner/insurance"
      }
    ]
  },
  {
    id: "4runner-gas-trd-sport",
    make: "Toyota",
    model: "4Runner",
    trimNote: "TRD Sport",
    className: "Midsize SUV (3-Row)",
    drivetrain: "RWD standard / 4WD avail.",
    price: {
      low: 44570,
      estimated: true
    },
    engine: "2.4L Turbo I4",
    hp: "278 hp",
    torque: "317 lb-ft",
    zeroToSixty: "7.3–8.2 sec (by trim)",
    transmission: "8-speed automatic",
    thirdRow: "Available",
    seats: "5–7",
    mpgCity: "20 (4WD)",
    mpgHighway: "25 (4WD)",
    mpgCombined: "~21–22",
    fuelTank: "19.0 gal",
    curbWeight: "4,455–4,730 lb",
    wheelbase: "112.2\"",
    towing: "6,000 lb",
    groundClearance: "8.1–9.2\"",
    reliability: {
      value: 84,
      display: "Excellent (84/100)",
      detail: "Auto Reliability Index rates this generation 84/100, its best year yet; Toyota/Lexus swept the 2026 J.D. Power dependability standings.",
      estimated: false
    },
    resale: {
      value: 58,
      display: "Excellent",
      detail: "Projected to retain 58% of value after 5 years — the 3rd-highest resale value of any 2026 vehicle.",
      estimated: false
    },
    maintenance: {
      annual: 1169,
      display: "Higher",
      detail: "Averages about $1,169/yr — more than compact SUVs, but body-on-frame durability offsets the extra cost for many buyers.",
      estimated: false
    },
    insurance: {
      annual: 2045,
      display: "$2,045/yr",
      detail: "CarEdge average for the 4Runner nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 4,
      display: "4-star overall",
      estimated: false
    },
    iihs: {
      rank: 1,
      display: "Mixed: Marginal (moderate overlap front) / Good (side); rating incomplete",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 48.4,
      maxCargo: 82
    },
    features: [
      "Body-on-frame off-road capability",
      "i-FORCE MAX hybrid available (+~$2,800) on TRD Off-Road and Limited",
      "Optional 3rd-row seating"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "Cars.com – How Much Is the 2026 4Runner?",
        url: "https://www.cars.com/articles/how-much-is-the-2026-toyota-4runner-518140/"
      },
      {
        label: "Auto Reliability Index – 4Runner",
        url: "https://autoreliabilityindex.com/toyota/4runner"
      },
      {
        label: "CarEdge – 4Runner Insurance",
        url: "https://caredge.com/toyota/4runner/insurance"
      }
    ]
  },
  {
    id: "4runner-gas-trd-off-road",
    make: "Toyota",
    model: "4Runner",
    trimNote: "TRD Off-Road",
    className: "Midsize SUV (3-Row)",
    drivetrain: "RWD standard / 4WD avail.",
    price: {
      low: 49990,
      estimated: true
    },
    engine: "2.4L Turbo I4",
    hp: "278 hp",
    torque: "317 lb-ft",
    zeroToSixty: "7.3–8.2 sec (by trim)",
    transmission: "8-speed automatic",
    thirdRow: "Available",
    seats: "5–7",
    mpgCity: "20 (4WD)",
    mpgHighway: "25 (4WD)",
    mpgCombined: "~21–22",
    fuelTank: "19.0 gal",
    curbWeight: "4,455–4,730 lb",
    wheelbase: "112.2\"",
    towing: "6,000 lb",
    groundClearance: "8.1–9.2\"",
    reliability: {
      value: 84,
      display: "Excellent (84/100)",
      detail: "Auto Reliability Index rates this generation 84/100, its best year yet; Toyota/Lexus swept the 2026 J.D. Power dependability standings.",
      estimated: false
    },
    resale: {
      value: 58,
      display: "Excellent",
      detail: "Projected to retain 58% of value after 5 years — the 3rd-highest resale value of any 2026 vehicle.",
      estimated: false
    },
    maintenance: {
      annual: 1169,
      display: "Higher",
      detail: "Averages about $1,169/yr — more than compact SUVs, but body-on-frame durability offsets the extra cost for many buyers.",
      estimated: false
    },
    insurance: {
      annual: 2045,
      display: "$2,045/yr",
      detail: "CarEdge average for the 4Runner nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 4,
      display: "4-star overall",
      estimated: false
    },
    iihs: {
      rank: 1,
      display: "Mixed: Marginal (moderate overlap front) / Good (side); rating incomplete",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 48.4,
      maxCargo: 82
    },
    features: [
      "Body-on-frame off-road capability",
      "i-FORCE MAX hybrid available (+~$2,800) on TRD Off-Road and Limited",
      "Optional 3rd-row seating"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "Cars.com – How Much Is the 2026 4Runner?",
        url: "https://www.cars.com/articles/how-much-is-the-2026-toyota-4runner-518140/"
      },
      {
        label: "Auto Reliability Index – 4Runner",
        url: "https://autoreliabilityindex.com/toyota/4runner"
      },
      {
        label: "CarEdge – 4Runner Insurance",
        url: "https://caredge.com/toyota/4runner/insurance"
      }
    ]
  },
  {
    id: "4runner-gas-limited",
    make: "Toyota",
    model: "4Runner",
    trimNote: "Limited",
    className: "Midsize SUV (3-Row)",
    drivetrain: "RWD standard / 4WD avail.",
    price: {
      low: 58200,
      estimated: true
    },
    engine: "2.4L Turbo I4",
    hp: "278 hp",
    torque: "317 lb-ft",
    zeroToSixty: "7.3–8.2 sec (by trim)",
    transmission: "8-speed automatic",
    thirdRow: "Available",
    seats: "5–7",
    mpgCity: "20 (4WD)",
    mpgHighway: "25 (4WD)",
    mpgCombined: "~21–22",
    fuelTank: "19.0 gal",
    curbWeight: "4,455–4,730 lb",
    wheelbase: "112.2\"",
    towing: "6,000 lb",
    groundClearance: "8.1–9.2\"",
    reliability: {
      value: 84,
      display: "Excellent (84/100)",
      detail: "Auto Reliability Index rates this generation 84/100, its best year yet; Toyota/Lexus swept the 2026 J.D. Power dependability standings.",
      estimated: false
    },
    resale: {
      value: 58,
      display: "Excellent",
      detail: "Projected to retain 58% of value after 5 years — the 3rd-highest resale value of any 2026 vehicle.",
      estimated: false
    },
    maintenance: {
      annual: 1169,
      display: "Higher",
      detail: "Averages about $1,169/yr — more than compact SUVs, but body-on-frame durability offsets the extra cost for many buyers.",
      estimated: false
    },
    insurance: {
      annual: 2045,
      display: "$2,045/yr",
      detail: "CarEdge average for the 4Runner nameplate.",
      estimated: false
    },
    nhtsa: {
      stars: 4,
      display: "4-star overall",
      estimated: false
    },
    iihs: {
      rank: 1,
      display: "Mixed: Marginal (moderate overlap front) / Good (side); rating incomplete",
      estimated: false
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi",
    cargo: {
      behind2nd: 48.4,
      maxCargo: 82
    },
    features: [
      "Body-on-frame off-road capability",
      "i-FORCE MAX hybrid available (+~$2,800) on TRD Off-Road and Limited",
      "Optional 3rd-row seating"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "Cars.com – How Much Is the 2026 4Runner?",
        url: "https://www.cars.com/articles/how-much-is-the-2026-toyota-4runner-518140/"
      },
      {
        label: "Auto Reliability Index – 4Runner",
        url: "https://autoreliabilityindex.com/toyota/4runner"
      },
      {
        label: "CarEdge – 4Runner Insurance",
        url: "https://caredge.com/toyota/4runner/insurance"
      }
    ]
  },
  {
    id: "4runner-hybrid-trd-off-road",
    make: "Toyota",
    model: "4Runner i-FORCE MAX",
    trimNote: "TRD Off-Road",
    className: "Midsize SUV (3-Row)",
    drivetrain: "RWD standard / 4WD avail.",
    price: {
      low: 52790,
      estimated: false
    },
    engine: "2.4L Turbo I4 + hybrid motor",
    hp: "326 hp",
    torque: "465 lb-ft",
    zeroToSixty: "~6.5–7 sec (est.)",
    transmission: "8-speed automatic (est.)",
    thirdRow: "Available",
    seats: "5–7",
    mpgCity: "23",
    mpgHighway: "24",
    mpgCombined: "23",
    fuelTank: "19.0 gal",
    curbWeight: "5,225–5,500 lb",
    wheelbase: "112.2\"",
    towing: "6,000 lb",
    groundClearance: "8.1–9.2\"",
    reliability: {
      value: 84,
      display: "Excellent",
      detail: "Shares the 4Runner's 84/100 Auto Reliability Index score, though the i-FORCE MAX hybrid system is newer and not yet separately rated.",
      estimated: true
    },
    resale: {
      value: 60,
      display: "Excellent",
      detail: "Expected to track at or above the gas 4Runner's strong 58% 5-year retention.",
      estimated: true
    },
    maintenance: {
      annual: 1300,
      display: "Higher",
      detail: "Likely somewhat above the gas 4Runner's ~$1,169/yr average due to added hybrid-system components.",
      estimated: true
    },
    insurance: {
      annual: 2300,
      display: "$2,300/yr",
      detail: "Estimated above the gas 4Runner given the higher MSRP and added hybrid-system repair cost.",
      estimated: true
    },
    nhtsa: {
      stars: 4,
      display: "4-star overall (shared platform rating)",
      estimated: true
    },
    iihs: {
      rank: 1,
      display: "Mixed rating shared with the gas 4Runner platform; incomplete",
      estimated: true
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (+ hybrid battery coverage)",
    cargo: {
      behind2nd: 48.4,
      maxCargo: 82
    },
    features: [
      "Most powerful 4Runner ever — 326 hp / 465 lb-ft",
      "Standard i-FORCE MAX hybrid on TRD Pro, Trailhunter, and Platinum",
      "6,000 lb towing capacity"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "4Runner6G Forum – 2026 Pricing/Changes",
        url: "https://www.4runner6g.com/2026-4runner-pricing-updates-changes/"
      },
      {
        label: "Auto Reliability Index – 4Runner",
        url: "https://autoreliabilityindex.com/toyota/4runner"
      }
    ]
  },
  {
    id: "4runner-hybrid-limited",
    make: "Toyota",
    model: "4Runner i-FORCE MAX",
    trimNote: "Limited",
    className: "Midsize SUV (3-Row)",
    drivetrain: "RWD standard / 4WD avail.",
    price: {
      low: 61000,
      estimated: false
    },
    engine: "2.4L Turbo I4 + hybrid motor",
    hp: "326 hp",
    torque: "465 lb-ft",
    zeroToSixty: "~6.5–7 sec (est.)",
    transmission: "8-speed automatic (est.)",
    thirdRow: "Available",
    seats: "5–7",
    mpgCity: "23",
    mpgHighway: "24",
    mpgCombined: "23",
    fuelTank: "19.0 gal",
    curbWeight: "5,225–5,500 lb",
    wheelbase: "112.2\"",
    towing: "6,000 lb",
    groundClearance: "8.1–9.2\"",
    reliability: {
      value: 84,
      display: "Excellent",
      detail: "Shares the 4Runner's 84/100 Auto Reliability Index score, though the i-FORCE MAX hybrid system is newer and not yet separately rated.",
      estimated: true
    },
    resale: {
      value: 60,
      display: "Excellent",
      detail: "Expected to track at or above the gas 4Runner's strong 58% 5-year retention.",
      estimated: true
    },
    maintenance: {
      annual: 1300,
      display: "Higher",
      detail: "Likely somewhat above the gas 4Runner's ~$1,169/yr average due to added hybrid-system components.",
      estimated: true
    },
    insurance: {
      annual: 2300,
      display: "$2,300/yr",
      detail: "Estimated above the gas 4Runner given the higher MSRP and added hybrid-system repair cost.",
      estimated: true
    },
    nhtsa: {
      stars: 4,
      display: "4-star overall (shared platform rating)",
      estimated: true
    },
    iihs: {
      rank: 1,
      display: "Mixed rating shared with the gas 4Runner platform; incomplete",
      estimated: true
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (+ hybrid battery coverage)",
    cargo: {
      behind2nd: 48.4,
      maxCargo: 82
    },
    features: [
      "Most powerful 4Runner ever — 326 hp / 465 lb-ft",
      "Standard i-FORCE MAX hybrid on TRD Pro, Trailhunter, and Platinum",
      "6,000 lb towing capacity"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "4Runner6G Forum – 2026 Pricing/Changes",
        url: "https://www.4runner6g.com/2026-4runner-pricing-updates-changes/"
      },
      {
        label: "Auto Reliability Index – 4Runner",
        url: "https://autoreliabilityindex.com/toyota/4runner"
      }
    ]
  },
  {
    id: "4runner-hybrid-platinum",
    make: "Toyota",
    model: "4Runner i-FORCE MAX",
    trimNote: "Platinum",
    className: "Midsize SUV (3-Row)",
    drivetrain: "RWD standard / 4WD avail.",
    price: {
      low: 63660,
      estimated: false
    },
    engine: "2.4L Turbo I4 + hybrid motor",
    hp: "326 hp",
    torque: "465 lb-ft",
    zeroToSixty: "~6.5–7 sec (est.)",
    transmission: "8-speed automatic (est.)",
    thirdRow: "Available",
    seats: "5–7",
    mpgCity: "23",
    mpgHighway: "24",
    mpgCombined: "23",
    fuelTank: "19.0 gal",
    curbWeight: "5,225–5,500 lb",
    wheelbase: "112.2\"",
    towing: "6,000 lb",
    groundClearance: "8.1–9.2\"",
    reliability: {
      value: 84,
      display: "Excellent",
      detail: "Shares the 4Runner's 84/100 Auto Reliability Index score, though the i-FORCE MAX hybrid system is newer and not yet separately rated.",
      estimated: true
    },
    resale: {
      value: 60,
      display: "Excellent",
      detail: "Expected to track at or above the gas 4Runner's strong 58% 5-year retention.",
      estimated: true
    },
    maintenance: {
      annual: 1300,
      display: "Higher",
      detail: "Likely somewhat above the gas 4Runner's ~$1,169/yr average due to added hybrid-system components.",
      estimated: true
    },
    insurance: {
      annual: 2300,
      display: "$2,300/yr",
      detail: "Estimated above the gas 4Runner given the higher MSRP and added hybrid-system repair cost.",
      estimated: true
    },
    nhtsa: {
      stars: 4,
      display: "4-star overall (shared platform rating)",
      estimated: true
    },
    iihs: {
      rank: 1,
      display: "Mixed rating shared with the gas 4Runner platform; incomplete",
      estimated: true
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (+ hybrid battery coverage)",
    cargo: {
      behind2nd: 48.4,
      maxCargo: 82
    },
    features: [
      "Most powerful 4Runner ever — 326 hp / 465 lb-ft",
      "Standard i-FORCE MAX hybrid on TRD Pro, Trailhunter, and Platinum",
      "6,000 lb towing capacity"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "4Runner6G Forum – 2026 Pricing/Changes",
        url: "https://www.4runner6g.com/2026-4runner-pricing-updates-changes/"
      },
      {
        label: "Auto Reliability Index – 4Runner",
        url: "https://autoreliabilityindex.com/toyota/4runner"
      }
    ]
  },
  {
    id: "4runner-hybrid-trd-pro",
    make: "Toyota",
    model: "4Runner i-FORCE MAX",
    trimNote: "TRD Pro",
    className: "Midsize SUV (3-Row)",
    drivetrain: "RWD standard / 4WD avail.",
    price: {
      low: 68200,
      estimated: false
    },
    engine: "2.4L Turbo I4 + hybrid motor",
    hp: "326 hp",
    torque: "465 lb-ft",
    zeroToSixty: "~6.5–7 sec (est.)",
    transmission: "8-speed automatic (est.)",
    thirdRow: "Available",
    seats: "5–7",
    mpgCity: "23",
    mpgHighway: "24",
    mpgCombined: "23",
    fuelTank: "19.0 gal",
    curbWeight: "5,225–5,500 lb",
    wheelbase: "112.2\"",
    towing: "6,000 lb",
    groundClearance: "8.1–9.2\"",
    reliability: {
      value: 84,
      display: "Excellent",
      detail: "Shares the 4Runner's 84/100 Auto Reliability Index score, though the i-FORCE MAX hybrid system is newer and not yet separately rated.",
      estimated: true
    },
    resale: {
      value: 60,
      display: "Excellent",
      detail: "Expected to track at or above the gas 4Runner's strong 58% 5-year retention.",
      estimated: true
    },
    maintenance: {
      annual: 1300,
      display: "Higher",
      detail: "Likely somewhat above the gas 4Runner's ~$1,169/yr average due to added hybrid-system components.",
      estimated: true
    },
    insurance: {
      annual: 2300,
      display: "$2,300/yr",
      detail: "Estimated above the gas 4Runner given the higher MSRP and added hybrid-system repair cost.",
      estimated: true
    },
    nhtsa: {
      stars: 4,
      display: "4-star overall (shared platform rating)",
      estimated: true
    },
    iihs: {
      rank: 1,
      display: "Mixed rating shared with the gas 4Runner platform; incomplete",
      estimated: true
    },
    warrantyBasic: "3 yr / 36,000 mi",
    warrantyPowertrain: "5 yr / 60,000 mi (+ hybrid battery coverage)",
    cargo: {
      behind2nd: 48.4,
      maxCargo: 82
    },
    features: [
      "Most powerful 4Runner ever — 326 hp / 465 lb-ft",
      "Standard i-FORCE MAX hybrid on TRD Pro, Trailhunter, and Platinum",
      "6,000 lb towing capacity"
    ],
    dealerBrand: "toyota",
    sources: [
      {
        label: "4Runner6G Forum – 2026 Pricing/Changes",
        url: "https://www.4runner6g.com/2026-4runner-pricing-updates-changes/"
      },
      {
        label: "Auto Reliability Index – 4Runner",
        url: "https://autoreliabilityindex.com/toyota/4runner"
      }
    ]
  }
];

/*
 * Dealerships serving the Port St. Lucie, FL market (Fort Pierce & Stuart),
 * compiled September 2026 from dealer sites, KBB, Yelp, and Cars.com listings.
 */
const DEALERS = {
  toyota: [
    {
      name: "Bev Smith Toyota",
      address: "3350 S US Highway 1, Fort Pierce, FL 34982",
      phone: "(772) 464-8440",
      distance: "~9 miles from Port St. Lucie",
      website: "https://www.bevsmithtoyota.com/",
    },
    {
      name: "Treasure Coast Toyota of Stuart",
      address: "5101 SE Federal Hwy, Stuart, FL 34997",
      phone: "(772) 283-8300",
      distance: "~15 miles from Port St. Lucie",
      website: "https://www.treasurecoasttoyotaofstuart.com/",
    },
  ],
  honda: [
    {
      name: "Johnson Honda of Stuart",
      address: "4200 SE Federal Hwy, Stuart, FL 34997",
      phone: "(844) 362-7193",
      distance: "~15 miles from Port St. Lucie",
      website: "https://www.johnsonhondaofstuart.com/",
    },
  ],
  mazda: [
    {
      name: "Wallace Mazda",
      address: "3725 SE Federal Hwy, Stuart, FL 34997",
      phone: "(772) 288-1999",
      distance: "~15 miles from Port St. Lucie",
      website: "https://www.wallacemazdaofstuart.com/",
    },
  ],
  subaru: [
    {
      name: "Dyer Subaru",
      address: "999 US Highway 1, Vero Beach, FL 32960",
      phone: "(772) 569-6060",
      distance: "~22 miles from Port St. Lucie",
      website: "https://www.dyersubaru.com/",
    },
  ],
  kia: [
    {
      name: "Wallace Kia",
      address: "3131 SE Federal Hwy, Stuart, FL 34994",
      phone: "(772) 291-9568",
      distance: "~14 miles from Port St. Lucie",
      website: "https://www.wallacekiaofstuart.com/",
    },
  ],
  hyundai: [
    {
      name: "Wallace Hyundai",
      address: "3801 SE Federal Hwy, Stuart, FL 34997",
      phone: "(772) 692-2277",
      distance: "~15 miles from Port St. Lucie",
      website: "https://www.wallacehyundaiofstuart.com/",
    },
  ],
  nissan: [
    {
      name: "Nissan of Fort Pierce",
      address: "4815 S US Hwy 1, Fort Pierce, FL 34982",
      phone: "(772) 924-2667",
      distance: "~9 miles from Port St. Lucie",
      website: "https://www.nissanoffortpierce.com/",
    },
  ],
  chevrolet: [
    {
      name: "Dyer Chevrolet Fort Pierce",
      address: "4200 S US Highway 1, Fort Pierce, FL 34982",
      phone: "(772) 242-7827",
      distance: "~9 miles from Port St. Lucie",
      website: "https://www.dyerchevyftpierce.com/",
    },
  ],
};
