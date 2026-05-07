# Architecture Overview

## System Architecture

The MASA Dashboard follows a client-server architecture with a clear separation between frontend and backend.

```
┌─────────────────────────────────────────────────────┐
│                  Client Browser                      │
│  ┌──────────────────────────────────────────────┐  │
│  │   Dashboard UI (HTML/CSS/JavaScript)         │  │
│  │  ┌────────────────────────────────────────┐  │  │
│  │  │ - Charts & Visualizations              │  │  │
│  │  │ - KPI Cards                            │  │  │
│  │  │ - Country Risk Tables                  │  │  │
│  │  │ - Mitigation Scenarios                 │  │  │
│  │  └────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
            ↓ HTTP Requests (REST API)
            ↑ JSON Responses
┌─────────────────────────────────────────────────────┐
│              Express.js Server (Node.js)            │
│  ┌──────────────────────────────────────────────┐  │
│  │  Routes Layer (/src/routes)                  │  │
│  │  ├─ /api/summary                             │  │
│  │  ├─ /api/country-risk                        │  │
│  │  ├─ /api/hazard-severity                     │  │
│  │  ├─ /api/mitigation                          │  │
│  │  └─ /api/metrics                             │  │
│  └──────────────────────────────────────────────┘  │
│              ↓                                       │
│  ┌──────────────────────────────────────────────┐  │
│  │  Middleware Layer (/src/middleware)          │  │
│  │  - Request Logger                            │  │
│  │  - Error Handler                             │  │
│  └──────────────────────────────────────────────┘  │
│              ↓                                       │
│  ┌──────────────────────────────────────────────┐  │
│  │  Data Layer (/src/constants)                 │  │
│  │  - Country Risk Data                         │  │
│  │  - Hazard & Severity Data                    │  │
│  │  - Mitigation Data                           │  │
│  │  - Metrics Data                              │  │
│  └──────────────────────────────────────────────┘  │
│              ↓                                       │
│  ┌──────────────────────────────────────────────┐  │
│  │  Utilities Layer (/src/utils)                │  │
│  │  - Logger                                    │  │
│  │  - Error Handler                             │  │
│  │  - Response Formatter                        │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

## Module Dependencies

### server.js (Main Entry Point)
```
server.js
├── express
├── path
├── config/environment.js
├── middleware/requestLogger.js
├── utils/errorHandler.js
├── routes/api.js
└── utils/logger.js
```

### routes/api.js
```
api.js
├── express
├── constants/data.js
├── constants/api.js
├── utils/errorHandler.js
└── utils/logger.js
```

## Data Flow

### API Request Flow
```
1. Browser sends HTTP request → Express Router
2. Router matches path → Route Handler
3. Route Handler fetches data from Constants
4. Data passed through Response Formatter
5. JSON response sent back to browser
6. Browser receives data → DOM Update
7. Charts & visualizations rendered
```

### Logging Flow
```
HTTP Request
    ↓
requestLogger middleware captures start time
    ↓
Request processed
    ↓
Response sent
    ↓
Duration calculated and logged
```

## Layer Responsibilities

### Routes Layer (`/src/routes`)
- Define API endpoints
- Handle HTTP methods (GET, POST, etc.)
- Validate request parameters
- Call response formatters

### Middleware Layer (`/src/middleware`)
- Pre-process requests (logging, auth, etc.)
- Post-process responses
- Handle cross-cutting concerns

### Data Layer (`/src/constants`)
- Store application data
- Define data structures
- Maintain data consistency

### Utils Layer (`/src/utils`)
- Logger: Centralized logging
- Error Handler: Consistent error responses
- Response Formatter: Standard API responses

### Config Layer (`/src/config`)
- Environment variables
- Application settings
- Feature flags

## Frontend Architecture

### Structure
```
public/
├── index.html          # Single page application entry
├── css/
│   └── styles.css      # All styling
├── js/
│   └── dashboard.js    # Client logic
├── images/             # Image assets
└── assets/             # Other static files
```

### Frontend Flow
```
1. Browser loads index.html
2. CSS loads (Bootstrap + Custom)
3. HTML renders (layout & structure)
4. JavaScript executes (dashboard.js)
5. Fetch API calls to /api endpoints
6. Response data received
7. DOM manipulation (renderCards, renderCharts)
8. Chart.js renders visualizations
```

## Error Handling Strategy

```
Error Occurs
    ↓
errorMiddleware catches
    ↓
Logger logs details
    ↓
Formatted JSON response
    ↓
Return to client (error message only in production)
```

## Performance Considerations

1. **Static File Serving**: Express serves public/ directly (optimized)
2. **JSON API**: Lightweight JSON responses
3. **Request Logging**: Only logs duration, minimal overhead
4. **Client-side Rendering**: Reduces server load

## Scalability Path

Future enhancements:
1. Database integration (PostgreSQL)
2. Caching layer (Redis)
3. Authentication/Authorization
4. Rate limiting middleware
5. API versioning (/api/v1, /api/v2)
6. GraphQL endpoint alternative
7. WebSocket for real-time updates
8. Microservices architecture if needed
