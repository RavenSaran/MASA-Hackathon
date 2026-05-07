/**
 * Environment Configuration
 * Centralized environment variables and configuration
 */

require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  app: {
    name: process.env.APP_NAME || 'MASA Dashboard',
    version: process.env.APP_VERSION || '1.0.0'
  },
  features: {
    cors: process.env.ENABLE_CORS === 'true',
    compression: process.env.ENABLE_COMPRESSION === 'true'
  },
  log: {
    level: process.env.LOG_LEVEL || 'info'
  }
};

module.exports = config;
