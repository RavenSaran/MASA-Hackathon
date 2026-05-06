# 🌊 MASA Dashboard — Climate Flood Risk & Insurance Loss

A professional interactive dashboard web app built for the **MASA Hackathon**.  
Based on the report: *"Modelling Climate-Induced Flood Risk and Insurance Loss Using a Catastrophe Model in Southeast Asia."*

---

## 📌 About the Project

This dashboard visualizes flood risk modelling across **Malaysia, Indonesia, and the Philippines**, covering:

- 🌧️ Hazard model for flood occurrence
- 📉 Severity model for flood impact
- 💰 Loss estimation through catastrophe modelling
- 📊 Country risk comparisons and mitigation scenarios

---

## 🗂️ Project Structure

```
MASA-Hackathon/
├── public/          # Frontend dashboard (HTML, CSS, JS)
├── src/
│   └── server.js    # Express server with static assets & JSON APIs
├── php/             # PHP dashboard example using includes
├── index.html       # Entry point
├── package.json     # Node.js dependencies and start script
└── README.md
```

---

## 🚀 Getting Started

### Node.js Version

1. Install dependencies:
```bash
cd MASA-Hackathon
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser at:
```
http://localhost:3000
```

---

### PHP Version

Host the `php/` folder using PHP's built-in server:

```bash
cd MASA-Hackathon/php
php -S localhost:8000
```

Then open:
```
http://localhost:8000
```

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | HTML, CSS, JavaScript   |
| Backend    | Node.js + Express       |
| Alt Backend| PHP                     |
| Charts     | Interactive JS Charts   |

---

## 📦 Data Sources

- 🌍 World Bank — World Development Indicators (WDI)
- 🏥 WHO — Climate & health data
- 🗃️ EM-DAT — International Disaster Database

---

## 👥 Contributors

- RavenSaran and team

---

## 📄 License

This project was built for the MASA Hackathon. All rights reserved.
