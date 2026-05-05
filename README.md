# MASA Dashboard

This project is a professional dashboard web app for the MASA hackathon report "Modelling Climate-Induced Flood Risk and Insurance Loss Using a Catastrophe Model in Southeast Asia." It includes:

- A Node.js + Express dashboard app with interactive charts.
- A PHP example dashboard using `include` files for header, footer, and data.
- A clean, professional layout for presenting risk metrics, country comparisons, and mitigation scenarios.

## Structure

- `package.json` - Node.js dependencies and start script.
- `src/server.js` - Express server providing static assets and JSON APIs.
- `public/` - Frontend dashboard files, styles, and scripts.
- `php/` - PHP dashboard example using includes.

## Node.js Setup

1. Install dependencies:
   ```bash
   cd MASA-Dashboard
   npm install
   ```
2. Run the dashboard:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in a browser.

## PHP Example

To run the PHP version, host the `php/` folder with a PHP server or local development environment.

Example using PHP built-in server:
```bash
cd MASA-Dashboard/php
php -S localhost:8000
```
Then open `http://localhost:8000`.

## Project Summary

The dashboard is designed to reflect the report's modelling framework:
- Hazard model for flood occurrence
- Severity model for flood impact
- Loss estimation through catastrophe modelling
- Analysis across Malaysia, Indonesia, and the Philippines

## Data Sources

- World Bank World Development Indicators (WDI)
- WHO climate data
- EM-DAT disaster database

## Notes

The Node.js app uses sample data and chart templates to illustrate the dashboard design. You can easily replace the sample API data with real model outputs from the report.
