# 🌊 MASA Dashboard - Climate Flood Risk & Insurance Loss Modelling

A professional, interactive climate-driven flood risk modelling dashboard for Southeast Asia. Built with Node.js/Express backend and modern frontend technologies, this dashboard provides evidence-based insights into flood risk, insurance loss estimates, and mitigation strategies for Malaysia, Indonesia, and the Philippines.

**Built for the MASA Hackathon**  
*Based on: "Modelling Climate-Induced Flood Risk and Insurance Loss Using a Catastrophe Model in Southeast Asia"*

---

## ✨ Features

### 📊 Interactive Dashboard
- Real-time data visualizations with Chart.js
- Country-specific risk metrics and KPIs
- Hazard and severity trend analysis
- Mitigation strategy comparison
- Fully responsive design (mobile & desktop)

### ⚡ Robust Backend
- Express.js REST API with 5 data endpoints
- Modular architecture with clear separation of concerns
- Comprehensive logging and error handling
- Environment-based configuration management
- Production-ready code structure

### 📚 Professional Structure
- Complete documentation and guides
- Clean, maintainable codebase with best practices
- Proper folder organization
- Alternative PHP implementation available

---

## 🚀 Quick Start

### Prerequisites
- Node.js 14.0.0 or higher
- npm 6.0.0 or higher

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/MASA-Dashboard.git
cd MASA-Dashboard

# Install dependencies
npm install

# (Optional) Configure environment
cp .env.example .env

# Start the server
npm start

# Open browser
http://localhost:3000
```

That's it! The dashboard is now running.

---

## 📚 Documentation

Comprehensive documentation is available in the `/docs` directory:

| Document | Purpose |
|----------|---------|
| [PROJECT_DOCUMENTATION.md](docs/PROJECT_DOCUMENTATION.md) | Complete project overview and setup guide |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | System architecture and design patterns |
| [API_REFERENCE.md](docs/API_REFERENCE.md) | Full API endpoint documentation with examples |
| [DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md) | Development workflow and troubleshooting |
| [FRONTEND_DOCUMENTATION.md](docs/FRONTEND_DOCUMENTATION.md) | Frontend code organization and components |

---

## 🏗️ Project Structure

```
MASA-Dashboard/
├── src/                              # Backend source code
│   ├── server.js                    # Main Express application
│   ├── config/
│   │   └── environment.js           # Configuration management
│   ├── routes/
│   │   └── api.js                   # REST API endpoints
│   ├── middleware/
│   │   └── requestLogger.js         # Request logging
│   ├── utils/
│   │   ├── logger.js                # Logging utility
│   │   └── errorHandler.js          # Error handling
│   └── constants/
│       └── data.js                  # Application data
├── public/                           # Frontend assets
│   ├── index.html                   # Main HTML page
│   ├── css/styles.css               # Application styling
│   ├── js/dashboard.js              # Frontend logic
│   ├── images/                      # Image assets
│   ├── fonts/                       # Font files
│   └── assets/                      # Static assets
├── php/                              # Alternative PHP implementation
│   ├── index.php
├── docs/                             # Documentation
├── .env.example                      # Environment template
├── .gitignore                        # Git ignore rules
├── package.json                      # Dependencies
└── README.md                         # This file
```

---

## 📡 API Endpoints

The dashboard provides 5 main REST endpoints:

### 1. GET `/api/summary`
Dashboard overview with key findings and sources.

### 2. GET `/api/country-risk`
Country-level flood probability, average loss, and risk indices.

### 3. GET `/api/hazard-severity`
Monthly hazard and severity trend data.

### 4. GET `/api/mitigation`
Mitigation strategies and loss reduction scenarios.

### 5. GET `/api/metrics`
Model performance metrics and validation data.

### 6. GET `/health`
Server health check endpoint.

**See [API_REFERENCE.md](docs/API_REFERENCE.md) for complete endpoint documentation with examples.**

---

## 🛠️ Technology Stack

### Backend
- **Framework**: Express.js 4.18+
- **Runtime**: Node.js 14+
- **Configuration**: dotenv
- **Language**: JavaScript (ES6+)

### Frontend
- **HTML**: Semantic HTML5
- **CSS**: Bootstrap 5.3 + Custom Styling
- **JavaScript**: Vanilla JS (ES6+)
- **Charts**: Chart.js for visualization
- **Fonts**: Google Fonts (Inter)

### Alternative Stack
- **PHP**: Alternative PHP-based implementation in `/php` folder

---

## 📊 Dashboard Components

### Header Navigation
Quick access to main sections and live status indicator.

### Hero Section
Overview with key statistics for Malaysia, Indonesia, and Philippines:
- Predicted affected population by country
- Annual loss projection
- Highest risk exposure country
- Model performance metrics

### Country Risk Cards
Individual profiles showing:
- Flood probability
- Average loss (USD millions)
- Risk index (0-100)

### Charts & Visualizations
- **Hazard vs Severity**: Monthly trend line chart
- **Mitigation Strategies**: Loss comparison doughnut chart

### KPI Metrics
Real-time calculations from API data:
- Mitigation reduction percentage
- Model validation metrics (RMSE, MAE)

---

## 🔧 Configuration

### Environment Variables

Create `.env` file (template: `.env.example`):

```env
NODE_ENV=development
PORT=3000
HOST=localhost
APP_NAME=MASA Dashboard
APP_VERSION=1.0.0
LOG_LEVEL=info
ENABLE_CORS=true
ENABLE_COMPRESSION=true
```

### All variables are optional with sensible defaults.

---

## 🚀 Deployment

### Development
```bash
npm start
```

### Production
1. Set `NODE_ENV=production`
2. Configure `PORT` (typically 80 or 443)
3. Run: `npm start`

### Using PM2 (Process Manager)
```bash
npm install -g pm2
pm2 start src/server.js --name "MASA-Dashboard"
pm2 monit
```

---

## 🧪 Testing APIs

### Using curl
```bash
# Get summary
curl http://localhost:3000/api/summary

# Pretty print country risk data
curl http://localhost:3000/api/country-risk | python -m json.tool

# Health check
curl http://localhost:3000/health
```

### Using Browser DevTools
1. Open http://localhost:3000
2. Press F12 to open DevTools
3. Go to Network tab
4. Refresh page
5. Click on API calls to inspect requests/responses

---

## 📈 Data Model

### Country Risk
```json
{
  "country": "Philippines",
  "floodProbability": 0.24,
  "averageLoss": 22.3,
  "riskIndex": 88
}
```

### Hazard & Severity
```json
{
  "labels": ["Jan", "Feb", ..., "Dec"],
  "hazard": [12, 14, 18, ..., 15],
  "severity": [8, 10, 14, ..., 9]
}
```

### Mitigation
```json
{
  "labels": ["Current Strategy", "Improved", "Enhanced"],
  "losses": [100, 75, 57]
}
```

---

## 🐛 Troubleshooting

### Port Already in Use
On Windows:
```bash
# Find process ID (PID) using port 3000
netstat -ano | findstr :3000
# Kill the process by PID
taskkill /PID <PID> /F
```

### Dependencies Not Installed
```bash
rm package-lock.json
npm install
```

### API Returns 404
- Verify server is running (`npm start`)
- Check URL spelling and exact path
- Inspect Network tab in browser DevTools

### Charts Not Rendering
- Verify canvas elements exist (IDs: `hazardSeverityChart`, `mitigationChart`)
- Check browser console for JavaScript errors
- Verify Chart.js library is loaded

**See [DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md) for more troubleshooting tips.**

---

## 📖 Development

### Start Development
```bash
npm start
```

### Add New API Endpoint
1. Add data to `/src/constants/data.js`
2. Add route to `/src/routes/api.js`
3. Test with curl or browser
4. Update API_REFERENCE.md

### Frontend Development
- Edit HTML: `public/index.html`
- Edit CSS: `public/css/styles.css`
- Edit JS: `public/js/dashboard.js`
- Changes auto-refresh in browser

**See [DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md) for detailed development workflow.**

---

## 🏆 Code Quality

### Best Practices Implemented
- ✅ Modular architecture with separation of concerns
- ✅ Comprehensive error handling and logging
- ✅ DRY (Don't Repeat Yourself) principle
- ✅ Environment-based configuration
- ✅ Clear code comments and documentation
- ✅ Consistent naming conventions
- ✅ Professional code organization

---

## 📞 Support & Help

### Getting Help
1. **Check documentation** → See `/docs` folder
2. **Check browser console** → F12 → Console tab
3. **Check server logs** → Terminal output during `npm start`
4. **Check network requests** → F12 → Network tab
5. **Health check** → `curl http://localhost:3000/health`

### Common Issues
- See [DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md) for common issues and solutions

---

## 🤝 Contributing

Guidelines:
1. Follow the established code structure
2. Add comments for complex logic
3. Test changes locally
4. Use clear commit messages
5. Update documentation

---

## 📝 License

MIT License - See LICENSE file for details

---

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com)
- [Bootstrap 5 Guide](https://getbootstrap.com/docs/5.0/)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [JavaScript on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

## 📄 Data Sources

- 🌍 **World Bank** - World Development Indicators (WDI)
- 🏥 **WHO** - Climate and health data
- 🗃️ **EM-DAT** - International Disaster Database

---

## 👥 Team

MASA Dashboard Team - Built with ❤️ for climate action

---

**Last Updated**: May 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✅

---

### Quick Links
- 📖 [Full Documentation](docs/PROJECT_DOCUMENTATION.md)
- 🏗️ [Architecture Guide](docs/ARCHITECTURE.md)
- 📡 [API Reference](docs/API_REFERENCE.md)
- 🛠️ [Development Guide](docs/DEVELOPMENT_GUIDE.md)
- 🎨 [Frontend Guide](docs/FRONTEND_DOCUMENTATION.md)
