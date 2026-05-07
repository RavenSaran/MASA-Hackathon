# Development Guide

## Getting Started with Development

### Setting Up Your Development Environment

1. **Clone and install**
   ```bash
   git clone <repo>
   cd MASA-Dashboard
   npm install
   ```

2. **Create .env file**
   ```bash
   cp .env.example .env
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   npm start
   ```

## Project Structure Best Practices

### Adding a New API Endpoint

1. **Add data constant** (`src/constants/data.js`)
   ```javascript
   const NEW_ENDPOINT_DATA = {
     // your data structure
   };
   ```

2. **Add route** (`src/routes/api.js`)
   ```javascript
   router.get('/new-endpoint', (req, res) => {
     try {
       sendSuccessResponse(res, HTTP_STATUS.OK, NEW_ENDPOINT_DATA);
     } catch (error) {
       sendErrorResponse(res, HTTP_STATUS.INTERNAL_ERROR, 'Error message');
     }
   });
   ```

3. **Test endpoint**
   ```bash
   curl http://localhost:3000/api/new-endpoint
   ```

### Adding a New Utility Function

1. **Create file in `/src/utils/`**
   ```javascript
   // src/utils/myUtil.js
   const myFunction = (param) => {
     // implementation
   };
   
   module.exports = { myFunction };
   ```

2. **Import and use**
   ```javascript
   const { myFunction } = require('../utils/myUtil');
   ```

## Code Style Guidelines

### Naming Conventions
- **Files**: kebab-case (request-logger.js)
- **Folders**: kebab-case (src/middleware)
- **Functions**: camelCase (fetchUserData)
- **Classes**: PascalCase (UserController)
- **Constants**: UPPER_SNAKE_CASE (API_ENDPOINT)

### File Headers
Always include file purpose comment:
```javascript
/**
 * Brief description of what this file does
 * More detailed explanation if needed
 */
```

### Function Documentation
```javascript
/**
 * What this function does
 * @param {Type} paramName - Parameter description
 * @returns {Type} Return value description
 */
const functionName = (paramName) => {
  // implementation
};
```

## Common Tasks

### Viewing Logs
```bash
# Server logs appear in console when running
npm start

# Look for timestamped entries like:
# [2024-01-01T12:00:00.000Z] [INFO] GET /api/country-risk
```

### Testing API Endpoints

#### Using curl
```bash
# GET request
curl http://localhost:3000/api/summary

# Pretty print JSON
curl http://localhost:3000/api/country-risk | json_pp
```

#### Using built-in browser DevTools
1. Open http://localhost:3000
2. Open DevTools (F12)
3. Go to Network tab
4. Refresh page
5. Click on API calls to see requests/responses

### Debugging Frontend

1. Open browser DevTools (F12)
2. Go to Console tab
3. Check for JavaScript errors
4. Use console.log for debugging (temporarily)
5. Go to Network tab to inspect API calls

### Debugging Backend

1. Add logging to track code flow
   ```javascript
   logger.info('Processing request', { param: value });
   ```

2. Use Node debugger
   ```bash
   node --inspect src/server.js
   # Then open chrome://inspect
   ```

3. Check error responses in browser Network tab

## Common Issues & Solutions

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3000

Solution:
- Kill process on port 3000
- Or change PORT in .env
- Or wait for process to release port
```

### Module Not Found
```
Error: Cannot find module 'express'

Solution:
npm install express
```

### API Returning 404
```
Solution:
- Check route path spelling
- Ensure route is defined in src/routes/api.js
- Make sure app.use('/api', apiRoutes) is in server.js
```

### CORS Issues
```
Solution:
- Enable CORS in .env: ENABLE_CORS=true
- Or specify origin in middleware
```

## Performance Testing

### Load Time
```bash
# Measure server response time
curl -w "\n%{time_total}s\n" http://localhost:3000/api/country-risk
```

### Monitoring
- Check health endpoint: `http://localhost:3000/health`
- Monitor logs for slow requests (duration > 100ms)

## Making Code Changes

### Step-by-step workflow
1. Create a feature branch
2. Make changes
3. Test locally
4. Check logs for errors
5. Commit with clear message
6. Push to repository

### Testing Changes
1. Make code change
2. Server auto-reloads on save (if using nodemon) or manually restart
3. Test in browser
4. Check browser console for errors
5. Check server logs for issues

## Frontend Development

### Modifying Styles
- Edit `public/css/styles.css`
- Changes appear immediately after browser refresh
- Use browser DevTools to test CSS changes

### Modifying HTML
- Edit `public/index.html`
- Changes appear after browser refresh
- Use browser DevTools to inspect elements

### Modifying JavaScript
- Edit `public/js/dashboard.js`
- Changes require browser refresh
- Use console tab to debug

### Testing Charts
1. Open page in browser
2. Verify charts render
3. Check Network tab for API calls
4. Ensure no console errors

## Version Control

### Commit Guidelines
```bash
# Feature commit
git commit -m "Add: new feature description"

# Bug fix
git commit -m "Fix: bug description"

# Documentation
git commit -m "Docs: documentation update"

# Refactoring
git commit -m "Refactor: code improvement description"
```

### Ignoring Files
Files automatically ignored (see .gitignore):
- node_modules/
- .env
- *.log
- .DS_Store

## Production Deployment

### Pre-deployment Checklist
- [ ] All tests passing
- [ ] No console errors
- [ ] No server errors in logs
- [ ] API endpoints responding correctly
- [ ] Frontend renders properly
- [ ] Performance acceptable

### Deployment Steps
1. Set NODE_ENV=production in .env
2. Run npm start
3. Monitor server logs
4. Test endpoints
5. Monitor performance

## Helpful Resources

- [Node.js Docs](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/en/starter/basic-routing.html)
- [JavaScript ES6 Features](https://www.w3schools.com/js/js_es6.asp)
- [Bootstrap Docs](https://getbootstrap.com/docs/5.0/)

## Getting Help

1. Check existing documentation in `/docs`
2. Review code comments in source files
3. Check server logs for error messages
4. Inspect Network tab in browser DevTools
5. Read error messages carefully
