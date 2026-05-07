# Frontend Documentation

## Overview

The MASA Dashboard frontend is a modern, responsive single-page application built with vanilla JavaScript, Bootstrap 5, and Chart.js. It provides an interactive visualization of climate-driven flood risk data for Southeast Asia.

## Architecture

### File Structure
```
public/
├── index.html              # Main HTML page
├── css/
│   └── styles.css          # All styling (Bootstrap + custom)
├── js/
│   └── dashboard.js        # Application logic
├── images/                 # Image assets directory
├── fonts/                  # Font files directory
└── assets/                 # Other static assets
```

### Technologies
- **HTML5**: Semantic markup
- **CSS3**: Bootstrap 5.3 + custom styling
- **JavaScript**: ES6+ with async/await
- **Chart.js**: Interactive data visualization
- **Bootstrap**: Responsive component framework

## How It Works

### Loading Sequence

1. **HTML Loading** → Browser parses index.html
2. **CSS Loading** → Bootstrap + custom styles applied
3. **Script Loading** → dashboard.js executed
4. **DOM Ready** → DOMContentLoaded event triggers
5. **API Calls** → Fetch all 5 data endpoints in parallel
6. **Rendering** → DOM updated with data
7. **Charts** → Chart.js renders visualizations

### Data Flow

```
API Fetch
    ↓
Response Validation
    ↓
Data Extraction
    ↓
Rendering Functions Called
    ↓
DOM Updated
    ↓
Charts Rendered
    ↓
User Sees Dashboard
```

## Components

### Header (Navigation)
- Brand name: "MASA Risk Intelligence"
- Navigation links: Overview, Analytics, Figures, Sources
- Status badge: "Live"
- Responsive mobile menu

### Hero Section
- Headline and description
- Regional status pills
- Country-specific KPI cards
- Overall metrics (Annual Loss, Top Risk Country, Model Performance)

### Country Risk Cards
- Dynamically rendered from API data
- Shows: Country name, flood probability, average loss, risk index
- Real-time updates from `/api/country-risk`

### Charts

#### Hazard vs Severity (Line Chart)
- **Type**: Line chart with fill
- **Data**: Monthly trend data
- **Lines**: Hazard (blue) and Severity (red)
- **API**: `/api/hazard-severity`

#### Mitigation Strategies (Doughnut Chart)
- **Type**: Doughnut chart
- **Data**: Loss comparison across strategies
- **Colors**: Blue, Green, Orange
- **API**: `/api/mitigation`

### Footer
- Not visible in current layout
- Can be added to php/ version

## JavaScript Functions

### Utility Functions

#### `formatNumberCompact(n)`
Formats numbers with K (thousands), M (millions), B (billions) notation.

```javascript
// Examples
formatNumberCompact(1500)      // "1.5K"
formatNumberCompact(1500000)   // "1.5M"
formatNumberCompact(1500000000) // "1.5B"
```

**Parameters:**
- `n` {number} - Number to format

**Returns:** {string} - Formatted number

---

#### `setText(selector, value)`
Sets text content of a DOM element by CSS selector.

```javascript
setText('[data-metric="annual-loss"]', 'USD 55.0B');
```

**Parameters:**
- `selector` {string} - CSS selector
- `value` {*} - Value to set (will be converted to string)

**Returns:** void

---

### Rendering Functions

#### `renderCards(countries)`
Creates and displays country risk cards.

```javascript
renderCards([
  { country: 'Malaysia', floodProbability: 0.19, averageLoss: 14.6, riskIndex: 72 },
  // ...
]);
```

**Parameters:**
- `countries` {Array} - Array of country risk objects

**Returns:** void

---

#### `renderImpactTrendsChart(data)`
Renders hazard vs severity line chart using Chart.js.

```javascript
renderImpactTrendsChart({
  labels: ['Jan', 'Feb', ...],
  hazard: [12, 14, ...],
  severity: [8, 10, ...]
});
```

**Parameters:**
- `data` {Object} - Contains labels, hazard array, severity array

**Returns:** void

---

#### `renderMitigationChart(data)`
Renders mitigation strategy comparison doughnut chart.

```javascript
renderMitigationChart({
  labels: ['Current', 'Improved', 'Enhanced'],
  losses: [100, 75, 57]
});
```

**Parameters:**
- `data` {Object} - Contains labels array and losses array

**Returns:** void

---

#### `renderMetricsFromApi(countryRisk)`
Updates KPI metrics from country risk data.

```javascript
renderMetricsFromApi([
  { country: 'Malaysia', averageLoss: 14.6, riskIndex: 72 },
  // ...
]);
```

**Parameters:**
- `countryRisk` {Array} - Country risk data array

**Returns:** void

---

### Data Fetching

#### `loadDashboard()`
Main application initialization function.

```javascript
loadDashboard(); // Fetch all data and render dashboard
```

**Flow:**
1. Fetches 5 API endpoints in parallel
2. Validates all responses
3. Extracts data from responses
4. Calls rendering functions
5. Updates KPI metrics

**API Endpoints Called:**
- `/api/summary`
- `/api/country-risk`
- `/api/hazard-severity`
- `/api/mitigation`
- `/api/metrics`

**Returns:** Promise (void)

---

## DOM Elements

### Elements Modified by JavaScript

| Selector | Purpose | Updated By |
|----------|---------|-----------|
| `#countryCards` | Country risk card container | `renderCards()` |
| `#hazardSeverityChart` | Hazard/Severity chart canvas | `renderImpactTrendsChart()` |
| `#mitigationChart` | Mitigation chart canvas | `renderMitigationChart()` |
| `[data-metric="ma-affected"]` | Malaysia affected population | `renderMetricsFromApi()` |
| `[data-metric="id-affected"]` | Indonesia affected population | `renderMetricsFromApi()` |
| `[data-metric="ph-affected"]` | Philippines affected population | `renderMetricsFromApi()` |
| `[data-metric="top-country"]` | Highest risk country | `renderMetricsFromApi()` |
| `[data-metric="annual-loss"]` | Annual loss projection | `renderMetricsFromApi()` |
| `[data-metric="rmse-mae"]` | Model performance metrics | `loadDashboard()` |
| `[data-metric="mitigation-reduction"]` | Mitigation reduction percentage | `loadDashboard()` |

### Chart Canvas Elements

```html
<!-- Hazard vs Severity Chart -->
<canvas id="hazardSeverityChart"></canvas>

<!-- Mitigation Chart -->
<canvas id="mitigationChart"></canvas>
```

## Styling

### Bootstrap Classes Used
- `.navbar`, `.navbar-expand-lg`, `.navbar-dark`
- `.container`, `.container-fluid`
- `.row`, `.col-*`, `.col-lg-*`
- `.card`, `.badge`
- `.btn`, `.btn-*`
- `.text-white`, `.text-dark`, `.text-muted`
- `.shadow-lg`, `.shadow-sm`
- `.rounded-4`, `.rounded-5`
- `.m-*`, `.p-*`, `.gap-*`

### Custom CSS Classes
- `.navbar-glass` - Glassmorphism effect
- `.hero-section` - Hero background gradient
- `.metric-card` - Metric display cards
- `.dashboard-layout` - Sidebar layout
- `.sidebar` - Sidebar component
- `.status-pill` - Status badge
- And many more in styles.css

### CSS Variables (Custom Properties)
```css
--surface: rgba(7, 14, 28, 0.92)
--primary: #2fd8ff (Cyan)
--secondary: #7dd7ff
--accent: #40d2ff
--success: #3ee3b0 (Green)
--warning: #f5b24e (Orange)
--danger: #ff6b6b (Red)
--text: #edf6ff (White text)
--muted: rgba(225, 235, 245, 0.72)
--border: rgba(255, 255, 255, 0.12)
--shadow: 0 32px 90px rgba(0, 0, 0, 0.28)
```

## Error Handling

### Console Errors
```javascript
// API failures logged to console
console.error('Dashboard load failed:', err);
```

### Fallback Behavior
- If API calls fail, error is logged but page remains usable
- No data would be displayed, but UI wouldn't crash
- User can manually refresh to retry

### Browser DevTools
1. Open Developer Tools (F12)
2. Check Console tab for errors
3. Check Network tab for failed API calls
4. Inspect Elements to verify DOM updates

## Performance Optimization

### Techniques Used
1. **Parallel Requests**: All 5 API calls fetched simultaneously
2. **Chart Destruction**: Previous chart destroyed before creating new one
3. **Event Delegation**: Single event listener on document
4. **Lazy Rendering**: Only update elements that exist

### Metrics
- Initial load: ~2-3 seconds (including API calls)
- Chart rendering: ~500ms per chart
- DOM updates: <100ms

## Browser Compatibility

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features Used
- Fetch API (ES2015+)
- Promise, async/await
- Template literals
- Arrow functions
- Object methods (fromEntries, reduce)
- ES6 destructuring

## Accessibility

### Current Implementation
- Semantic HTML structure
- Color contrast (dark theme optimized)
- Bootstrap responsive grid
- Navigation links

### Improvements for Future
- ARIA labels
- Keyboard navigation
- Focus indicators
- Alt text for images

## Responsive Design

### Breakpoints (Bootstrap)
- Extra small (< 576px)
- Small (≥ 576px)
- Medium (≥ 768px)
- Large (≥ 992px)
- Extra large (≥ 1200px)
- XXL (≥ 1400px)

### Responsive Classes Used
- `col-*` (mobile-first)
- `col-lg-*` (large screens)
- `d-none` d-md-block` (hide/show)
- `flex-column`, `flex-md-row` (direction)
- `gx-*`, `gy-*` (gutters)

## Common Issues & Solutions

### Charts Not Rendering
- **Check**: Canvas element IDs match (`hazardSeverityChart`, `mitigationChart`)
- **Check**: Chart.js library loaded
- **Fix**: Verify HTML IDs and Chart.js script tag

### API Data Not Showing
- **Check**: Network tab in DevTools for API calls
- **Check**: API responses in Network tab
- **Fix**: Verify server is running on port 3000

### Layout Issues
- **Check**: Browser zoom level (set to 100%)
- **Check**: Bootstrap CSS loaded
- **Fix**: Clear browser cache and refresh

### JavaScript Errors
- **Check**: Browser console (F12 → Console tab)
- **Fix**: Check error messages and stack traces
- **Try**: Refresh page or restart server

## Future Enhancements

### Feature Ideas
- Real-time data updates with WebSocket
- Data export (CSV, PDF)
- Advanced filtering options
- Comparison view (country vs country)
- Historical data trends
- Mobile app version

### Performance Improvements
- Caching API responses
- Service workers for offline support
- Code splitting/lazy loading
- Image optimization
- CDN for static assets

### Code Quality
- Unit tests with Jest
- Integration tests
- E2E tests with Cypress
- TypeScript migration
- ESLint configuration

## Developer Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/)
- [Chart.js Guide](https://www.chartjs.org/docs/)
- [JavaScript Promise Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Fetch API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
