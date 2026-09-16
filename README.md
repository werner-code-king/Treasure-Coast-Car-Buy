# Treasure Coast SUV Finder

A static web app for comparing SUVs by overall value for the price &mdash; not just sticker price. It weighs reliability, 5-year resale value, estimated maintenance cost, cargo space, and full powertrain specs (engine, horsepower, torque, towing, ground clearance, seating) alongside starting MSRP, and surfaces real dealerships near **Port St. Lucie, FL** for each brand.

This project was originally developed inside the `Stock-Picker` repo and has been split out here since it's unrelated to that project.

## Running it

No build step required &mdash; it's plain HTML/CSS/JS.

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## What's inside

- `index.html` &mdash; page structure and modals
- `css/styles.css` &mdash; styling (light/dark aware, mobile responsive)
- `js/app.js` &mdash; value-score calculation, filtering/sorting, and rendering
- `data/suv-data.js` &mdash; sourced SUV specs/pricing and local dealer listings (compiled September 2026 from KBB, Edmunds, TrueCar, CarEdge, J.D. Power, RepairPal, Auto Reliability Index, iSeeCars, and Cars.com &mdash; see in-app source links and the "How is Value Score calculated?" panel for methodology and estimate flags)

20 SUV models/powertrains (83 individual trim levels) are covered: Toyota RAV4 (Hybrid/PHEV), Honda CR-V, Mazda CX-5, Subaru Forester (Gas/Hybrid), Kia Sportage, Hyundai Tucson, Nissan Rogue, Chevrolet Equinox, Nissan Pathfinder, Toyota 4Runner (i-FORCE/i-FORCE MAX Hybrid), Ford Escape, Mazda CX-50, Jeep Grand Cherokee, Hyundai Santa Fe, Honda Passport, Toyota Highlander, and Kia Telluride.

Prices, incentives, and dealer inventory change frequently; always confirm current figures with the dealership before purchase.

## Live version

A polished, redesigned version of this tool is also published as a Claude Artifact: [Treasure Coast SUV Finder](https://claude.ai/code/artifact/33890b3b-2a42-48be-b71e-c87185ed0012).
