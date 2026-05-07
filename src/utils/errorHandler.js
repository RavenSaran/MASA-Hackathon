/**
 * Error Handler Utility
 * Centralized error handling and responses
 */

const { HTTP_STATUS } = require('../constants/api');
const logger = require('./logger');

/**
 * Send error response
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {string} message - Error message
 * @param {Object} error - Error details (optional)
 */
const sendErrorResponse = (res, statusCode, message, error = null) => {
  logger.error(message, error);
  
  res.status(statusCode).json({
    success: false,
    message,
    error: process.env.NODE_ENV === 'development' ? error : undefined
  });
};

/**
 * Send success response
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {Object} data - Response data
 */
const sendSuccessResponse = (res, statusCode, data) => {
  res.status(statusCode).json({
    success: true,
    data
  });
};

/**
 * Express error middleware
 */
const errorMiddleware = (err, req, res, next) => {
  logger.error('Unhandled error', { message: err.message, stack: err.stack });
  
  sendErrorResponse(
    res,
    HTTP_STATUS.INTERNAL_ERROR,
    'An unexpected error occurred',
    { message: err.message }
  );
};

module.exports = {
  sendErrorResponse,
  sendSuccessResponse,
  errorMiddleware
};
