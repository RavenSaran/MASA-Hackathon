/**
 * MASA Dashboard Server
 * Main application entry point
 */

const express = require('express');
const path = require('path');

// Import configuration
const config = require('./config/environment');

// Import middleware
const requestLogger = require('./middleware/requestLogger');
const { errorMiddleware } = require('./utils/errorHandler');

// Import routes
const apiRoutes = require('./routes/api');

// Import utilities
const logger = require('./utils/logger');

// Initialize Express app
const app = express();

// ==================== Middleware Setup ====================

// Request logging
app.use(requestLogger);

// Static file serving
app.use(express.static(path.join(__dirname, '..', 'public')));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================== Routes ====================

// API Routes
app.use('/api', apiRoutes);

// Root route - serve main HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
});

// ==================== Error Handling ====================
app.use(errorMiddleware);

// ==================== Server Startup ====================
const PORT = config.port;
const HOST = config.host;

const server = app.listen(PORT, HOST, () => {
  logger.info(`
    ╔═══════════════════════════════════════════╗
    ║     ${config.app.name.padEnd(37)} ║
    ║     Version: ${config.app.version.padEnd(34)} ║
    ║     Environment: ${config.env.padEnd(28)} ║
    ╠═══════════════════════════════════════════╣
    ║  Server running at:                     ║
    ║  http://${HOST}:${PORT}${' '.repeat(22 - String(PORT).length)} ║
    ╚═══════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.warn('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.warn('SIGINT signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});

module.exports = app;
