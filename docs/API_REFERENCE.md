# API Reference

## Base URL
```
http://localhost:3000
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {
    // endpoint-specific data
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

## Endpoints

### 1. Summary
Get dashboard summary with key findings.

**Request:**
```
GET /api/summary
```

**Response:**
```json
{
  "success": true,
  "data": {
    "title": "Modelling Climate-Induced Flood Risk and Insurance Loss",
    "region": "Southeast Asia",
    "countries": ["Malaysia", "Indonesia", "Philippines"],
    "keyFindings": [
      "Rainfall intensity is the key driver of flood risk.",
      "Indonesia shows high-frequency floods, the Philippines shows high severity, and Malaysia demonstrates rising exposure due to urbanisation.",
      "A mitigation scenario indicates that improved flood management can significantly reduce expected losses."
    ],
    "sources": ["World Bank WDI", "WHO climate data", "EM-DAT disaster database"]
  }
}
```

**Status:** 200 OK

---

### 2. Country Risk
Get flood probability and risk indices for each country.

**Request:**
```
GET /api/country-risk
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "country": "Malaysia",
      "floodProbability": 0.19,
      "averageLoss": 14.6,
      "riskIndex": 72
    },
    {
      "country": "Indonesia",
      "floodProbability": 0.32,
      "averageLoss": 18.1,
      "riskIndex": 85
    },
    {
      "country": "Philippines",
      "floodProbability": 0.24,
      "averageLoss": 22.3,
      "riskIndex": 88
    }
  ]
}
```

**Status:** 200 OK

**Field Descriptions:**
- `country`: Country name
- `floodProbability`: Probability of flood (0-1 scale)
- `averageLoss`: Average loss in millions USD
- `riskIndex`: Overall risk score (0-100)

---

### 3. Hazard & Severity
Get monthly hazard and severity trend data.

**Request:**
```
GET /api/hazard-severity
```

**Response:**
```json
{
  "success": true,
  "data": {
    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "hazard": [12, 14, 18, 24, 30, 35, 40, 38, 32, 25, 18, 15],
    "severity": [8, 10, 14, 16, 20, 22, 24, 22, 18, 15, 12, 9]
  }
}
```

**Status:** 200 OK

**Field Descriptions:**
- `labels`: Month abbreviations
- `hazard`: Hazard index by month (relative scale)
- `severity`: Severity index by month (relative scale)

---

### 4. Mitigation
Get mitigation strategies and expected loss reduction.

**Request:**
```
GET /api/mitigation
```

**Response:**
```json
{
  "success": true,
  "data": {
    "labels": ["Current Strategy", "Improved Flood Management", "Enhanced Resilience"],
    "losses": [100, 75, 57]
  }
}
```

**Status:** 200 OK

**Field Descriptions:**
- `labels`: Strategy names
- `losses`: Expected losses (index, baseline = 100)

**Interpretation:**
- Current Strategy: Baseline (100)
- Improved Flood Management: 25% reduction
- Enhanced Resilience: 43% reduction

---

### 5. Metrics
Get model performance metrics and validation data.

**Request:**
```
GET /api/metrics
```

**Response:**
```json
{
  "success": true,
  "data": {
    "modelType": "Catastrophe (CAT) Model",
    "hazardModel": "Logistic Regression",
    "severityModel": "Log-linear Regression",
    "datasetYears": "2000 - Present",
    "metrics": {
      "rmse": 4.2,
      "mae": 3.1,
      "sampleEvents": 525
    }
  }
}
```

**Status:** 200 OK

**Field Descriptions:**
- `modelType`: Type of catastrophe model used
- `hazardModel`: Algorithm for hazard prediction
- `severityModel`: Algorithm for severity prediction
- `datasetYears`: Time period covered
- `metrics.rmse`: Root Mean Square Error
- `metrics.mae`: Mean Absolute Error
- `metrics.sampleEvents`: Number of events in training set

---

### 6. Health Check
Check if the server is running and healthy.

**Request:**
```
GET /health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "uptime": 3600.5
}
```

**Status:** 200 OK

**Field Descriptions:**
- `status`: Server health status
- `timestamp`: Current server time
- `uptime`: Server uptime in seconds

---

## Status Codes

| Code | Meaning | Scenario |
|------|---------|----------|
| 200 | OK | Request successful |
| 404 | Not Found | Invalid endpoint |
| 500 | Internal Server Error | Server error |

## Error Examples

### 404 - Invalid Endpoint
```
GET /api/invalid-endpoint

Response (404):
{
  "success": false,
  "message": "Route not found",
  "path": "/api/invalid-endpoint"
}
```

### 500 - Server Error
```
Response (500):
{
  "success": false,
  "message": "An unexpected error occurred",
  "error": {
    "message": "Error details (dev mode only)"
  }
}
```

## Usage Examples

### JavaScript Fetch
```javascript
// Fetch country risk data
fetch('/api/country-risk')
  .then(response => response.json())
  .then(data => {
    console.log(data.data); // Array of countries
    data.data.forEach(country => {
      console.log(`${country.country}: Risk Index ${country.riskIndex}`);
    });
  });
```

### cURL
```bash
# Get summary
curl http://localhost:3000/api/summary

# Get country risk with pretty print
curl http://localhost:3000/api/country-risk | python -m json.tool

# Get hazard-severity data
curl -X GET http://localhost:3000/api/hazard-severity
```

### Python Requests
```python
import requests

# Fetch metrics
response = requests.get('http://localhost:3000/api/metrics')
metrics = response.json()['data']

print(f"Model: {metrics['modelType']}")
print(f"RMSE: {metrics['metrics']['rmse']}")
print(f"MAE: {metrics['metrics']['mae']}")
```

## Rate Limiting

Currently no rate limiting is implemented. Production deployments should consider:
- Adding rate limiting middleware
- Implementing request throttling
- Setting up API key authentication

## Pagination

No pagination is currently implemented. Data returned is complete. For large datasets, consider:
- Implementing pagination with `?page=1&limit=10` parameters
- Adding offset/limit query parameters

## Authentication

Currently no authentication is required. Production deployments should implement:
- API key authentication
- JWT bearer token authentication
- OAuth 2.0

## CORS

CORS can be enabled via environment variable:
```
ENABLE_CORS=true
```

When enabled, the API can be accessed from different domains.

## Versioning

Current API version: v1 (implied)

Future versions could use: `/api/v2/summary`

## Changelog

### Version 1.0.0 (Current)
- Initial API release
- 5 data endpoints
- Health check endpoint
- Standard response format
