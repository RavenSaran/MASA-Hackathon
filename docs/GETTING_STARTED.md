# Getting Started - MASA Dashboard

Welcome! This guide will help you get the MASA Dashboard running in just a few minutes.

## 5-Minute Setup

### Step 1: Install Node.js (if not already installed)

1. Visit [nodejs.org](https://nodejs.org)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow prompts
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Clone the Project

```bash
git clone https://github.com/yourusername/MASA-Dashboard.git
cd MASA-Dashboard
```

Or download as ZIP and extract.

### Step 3: Install Dependencies

```bash
npm install
```

This installs Express.js and other required packages.

### Step 4: Start the Server

```bash
npm start
```

You should see:
```
╔═══════════════════════════════════════════╗
║     MASA Dashboard                        ║
║     Version: 1.0.0                        ║
║     Environment: development              ║
╠═══════════════════════════════════════════╣
║  Server running at:                     ║
║  http://localhost:3000                  ║
╚═══════════════════════════════════════════╝
```

### Step 5: Open Your Browser

Navigate to: **http://localhost:3000**

You should see the MASA Dashboard!

---

## 🎉 Success!

Your dashboard is now running. You can:
- View flood risk data for Southeast Asian countries
- See interactive charts showing hazard and severity trends
- Compare mitigation strategies
- Check model performance metrics

---

## Common First Steps

### Stopping the Server
Press `Ctrl+C` in the terminal.

### Restarting the Server
Press the up arrow to recall the last command, then press Enter.

### Accessing Health Check
Open in browser: http://localhost:3000/health

You should see:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "uptime": 3600.5
}
```

---

## Making Your First Change

### 1. Edit the Frontend

Open `public/index.html` in your text editor and find:
```html
<h1 class="display-5 fw-bold lh-1 mb-3">
  Climate-Driven Flood Risk Modelling for Southeast Asia
</h1>
```

Change the text to something else and save.

### 2. Refresh Browser

Go back to http://localhost:3000 and refresh the page (F5 or Cmd+R).

You should see your change!

---

## Customizing API Data

All data is stored in `/src/constants/data.js`. 

### Edit Country Risk Data

1. Open `/src/constants/data.js`
2. Find the `COUNTRY_RISK_DATA` section
3. Modify values:
   ```javascript
   { country: 'Malaysia', floodProbability: 0.19, averageLoss: 14.6, riskIndex: 72 }
   ```
4. Save file
5. Refresh browser

The dashboard will immediately show the updated data!

---

## File Organization Quick Reference

| File/Folder | Purpose |
|-------------|---------|
| `public/index.html` | Main page content |
| `public/css/styles.css` | All styling |
| `public/js/dashboard.js` | Chart and data logic |
| `src/server.js` | Express server |
| `src/routes/api.js` | API endpoints |
| `src/constants/data.js` | All application data |
| `.env.example` | Configuration template |
| `docs/` | Complete documentation |

---

## Understanding the Architecture

### Simple Flow

```
1. You open http://localhost:3000 in browser
   ↓
2. Express server sends index.html
   ↓
3. Browser loads HTML, CSS, JavaScript
   ↓
4. JavaScript runs and fetches data from API
   ↓
5. Dashboard displays with real data and charts
```

### API Calls Made

When you load the dashboard, JavaScript automatically requests:
- `/api/summary` → Overview information
- `/api/country-risk` → Country risk data
- `/api/hazard-severity` → Monthly trends
- `/api/mitigation` → Mitigation strategies
- `/api/metrics` → Model performance

---

## Testing API Endpoints

### Method 1: Using Browser

1. Open Developer Tools (F12)
2. Go to Network tab
3. Refresh the page
4. Click on each API request
5. See the response data

### Method 2: Using Terminal

```bash
# Get summary
curl http://localhost:3000/api/summary

# Get country risk (pipe to python for pretty print)
curl http://localhost:3000/api/country-risk | python -m json.tool
```

---

## Environment Configuration (Optional)

### Creating .env File

1. Copy `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` (optional - defaults work fine):
   ```
   NODE_ENV=development
   PORT=3000
   HOST=localhost
   ```

3. Save and restart server

---

## Common Questions

### Q: What's the difference between Node and PHP versions?
**A:** Both work the same. Node.js version is recommended (included by default).

### Q: Can I run this on a different port?
**A:** Yes! Set in `.env`: `PORT=3001`

### Q: How do I add my own data?
**A:** Edit `/src/constants/data.js` and add your data to the appropriate constant.

### Q: Can I deploy this online?
**A:** Yes! The project is production-ready. See [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) for deployment instructions.

### Q: What if port 3000 is already used?
**A:** Either:
- Kill the process using port 3000, or
- Change PORT in `.env` to something else (3001, 3002, etc.)

---

## Next Steps

Once you're comfortable:

1. **Explore the Code**
   - Look at `/src/server.js` to understand the server
   - Look at `public/js/dashboard.js` to understand the frontend

2. **Read the Documentation**
   - [API_REFERENCE.md](docs/API_REFERENCE.md) - All endpoints explained
   - [ARCHITECTURE.md](docs/ARCHITECTURE.md) - How everything connects
   - [DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md) - For developers

3. **Make Changes**
   - Modify data in `/src/constants/data.js`
   - Customize styling in `public/css/styles.css`
   - Add new endpoints in `/src/routes/api.js`

4. **Deploy**
   - Follow deployment guide when ready for production

---

## Getting Help

### If Something Goes Wrong

1. **Check the terminal** - Look for error messages
2. **Check browser console** - Press F12 → Console tab
3. **Restart the server** - Ctrl+C, then `npm start` again
4. **Read the docs** - See `/docs` folder for detailed guides

### Specific Issues

- **Port already in use?** → See "Common Questions" above
- **Module not found?** → Run `npm install` again
- **Page shows "Cannot GET"?** → Make sure server is running
- **No data showing?** → Check browser console for errors

---

## Useful Terminal Commands

```bash
# Start server
npm start

# Stop server
Ctrl+C

# Install dependencies
npm install

# List installed packages
npm list

# View server logs while running
# (shown automatically during npm start)
```

---

## Browser Tips

### Keyboard Shortcuts
- **F12** - Open Developer Tools
- **F5 or Ctrl+R** - Refresh page
- **Ctrl+Shift+R** - Hard refresh (clear cache)
- **Ctrl+Shift+I** - Open Inspector

### Developer Tools Tabs
- **Console** - See error messages and logs
- **Network** - See API requests/responses
- **Elements** - Inspect HTML/CSS
- **Storage** - View cookies and local data

---

## Summary

You've successfully:
✅ Installed Node.js  
✅ Cloned the project  
✅ Installed dependencies  
✅ Started the server  
✅ Viewed the dashboard  

**You're ready to explore and customize the MASA Dashboard!**

---

## Need More Help?

- 📖 Read [PROJECT_DOCUMENTATION.md](docs/PROJECT_DOCUMENTATION.md)
- 🛠️ Check [DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md)
- 🏗️ Learn [ARCHITECTURE.md](docs/ARCHITECTURE.md)
- 📡 See [API_REFERENCE.md](docs/API_REFERENCE.md)

Happy dashboard building! 🚀
