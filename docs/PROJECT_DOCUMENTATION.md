# MASA Dashboard - Project Documentation

## 📋 Overview

The MASA Dashboard is a comprehensive climate-driven flood risk modelling application for Southeast Asia, specifically designed for Malaysia, Indonesia, and the Philippines. This dashboard integrates catastrophe (CAT) modelling with climate indicators and socio-economic data to quantify flood risk and evaluate mitigation strategies.

## 🎯 Project Goals

- Model climate-induced flood risk across Southeast Asian countries
- Provide evidence-based insurance loss estimates
- Evaluate and compare mitigation strategies
- Deliver actionable insights through an interactive dashboard

## 🏗️ Project Structure

```
MASA-Dashboard/
├── src/                              # Backend source code
│   ├── server.js                    # Main server entry point
│   ├── config/                      # Configuration files
│   │   └── environment.js           # Environment configuration
│   ├── routes/                      # API routes
│   │   └── api.js                   # API endpoints
│   ├── middleware/                  # Express middleware
│   │   └── requestLogger.js         # Request logging middleware
│   ├── utils/                       # Utility functions
│   │   ├── logger.js                # Logging utility
│   │   └── errorHandler.js          # Error handling utility
│   └── constants/                   # Application constants
│       ├── api.js                   # API constants
│       └── data.js                  # Data constants
├── public/                           # Frontend static assets
│   ├── index.html                   # Main HTML file
│   ├── css/
│   │   └── styles.css               # Application styles
│   ├── js/
│   │   └── dashboard.js             # Frontend logic
│   ├── images/                      # Image assets
│   ├── fonts/                       # Font files
│   └── assets/                      # Additional assets
├── php/                              # Alternative PHP implementation
│   ├── index.php                    # PHP entry point
│   └── includes/                    # PHP includes
├── docs/                             # Documentation
├── config/                           # Configuration files
├── .env.example                      # Environment variables template
├── .gitignore                        # Git ignore rules
├── package.json                      # Node dependencies
└── README.md                         # Quick start guide
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MASA-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env as needed (optional - defaults work fine)
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Access the dashboard**
   Open your browser and navigate to: `http://localhost:3000`

## 📡 API Endpoints

### Summary
- **GET** `/api/summary` - Retrieve dashboard summary and key findings

### Country Risk
- **GET** `/api/country-risk` - Get flood probability and risk indices for each country

### Hazard & Severity
- **GET** `/api/hazard-severity` - Monthly hazard and severity trend data

### Mitigation
- **GET** `/api/mitigation` - Mitigation strategies and loss reduction scenarios

### Metrics
- **GET** `/api/metrics` - Model performance metrics and validation data

### Health Check
- **GET** `/health` - Server health status

## 🛠️ Technical Stack

### Backend
- **Framework**: Express.js
- **Language**: JavaScript (Node.js)
- **Environment**: dotenv for configuration management

### Frontend
- **HTML**: Semantic HTML5
- **CSS**: Bootstrap 5.3 with custom styling
- **JavaScript**: Vanilla JS with Chart.js for visualizations
- **Charts**: Chart.js for data visualization

### Alternative Stack
- **PHP**: Alternative PHP-based implementation available

## 📊 Data Model

### Country Risk Data
- Country name
- Flood probability (0-1)
- Average loss (in millions USD)
- Risk index (0-100)

### Hazard & Severity
- Monthly labels (Jan-Dec)
- Hazard indices by month
- Severity indices by month

### Mitigation Strategies
- Current Strategy (baseline)
- Improved Flood Management
- Enhanced Resilience

## 🎨 Frontend Features

- Responsive design (mobile-friendly)
- Interactive charts and visualizations
- Real-time data fetching from APIs
- Professional color scheme and typography
- Smooth animations and transitions

## 🔧 Configuration

Environment variables (in `.env`):
```
NODE_ENV=development
PORT=3000
HOST=localhost
APP_NAME=MASA Dashboard
APP_VERSION=1.0.0
LOG_LEVEL=info
ENABLE_CORS=true
ENABLE_COMPRESSION=true
```

## 📝 Code Organization

### Separation of Concerns
- **Routes**: API endpoints defined in `/src/routes`
- **Middleware**: Cross-cutting concerns in `/src/middleware`
- **Utils**: Reusable utility functions in `/src/utils`
- **Constants**: Centralized constants in `/src/constants`
- **Config**: Application configuration in `/src/config`

### Key Principles
- DRY (Don't Repeat Yourself)
- Modularity and reusability
- Clear error handling
- Comprehensive logging
- Professional code structure

## 🐛 Debugging

The application includes a comprehensive logging system:
- Request logging for all HTTP endpoints
- Error logging with stack traces
- Development mode shows detailed error information

Check logs for:
- Server startup messages
- API request details
- Performance metrics
- Error information

## 📈 Performance

- Request logging shows endpoint performance
- Health check endpoint (`/health`) for monitoring
- Efficient static file serving
- Optimized API responses

## 🔐 Security Considerations

- Environment-based configuration (sensitive data not in code)
- Error handling prevents sensitive information leakage
- .gitignore prevents accidental commits of sensitive files
- Proper HTTP status codes

## 🤝 Contributing

Guidelines for contributing:
1. Follow the established code structure
2. Use meaningful commit messages
3. Keep code modular and well-documented
4. Test API endpoints before committing
5. Update documentation for significant changes

## 📄 License

MIT License - See LICENSE file for details

## 📞 Support

For issues, questions, or suggestions:
- Check existing documentation
- Review the code comments
- Check the health endpoint: `/health`
- Enable debug logging in environment

## 🚀 Deployment

For production deployment:
1. Set `NODE_ENV=production`
2. Configure proper PORT (typically 80 or 443)
3. Enable CORS if needed
4. Set up proper logging infrastructure
5. Consider using a process manager (PM2)

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com)
- [Bootstrap 5 Documentation](https://getbootstrap.com)
- [Chart.js Documentation](https://www.chartjs.org)
- [Node.js Documentation](https://nodejs.org/en/docs/)
