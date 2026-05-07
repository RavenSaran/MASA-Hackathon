/**
 * API Routes
 * Centralized API endpoints for the MASA Dashboard
 */

const express = require('express');
const router = express.Router();
const {
  SUMMARY_DATA,
  COUNTRY_RISK_DATA,
  HAZARD_SEVERITY_DATA,
  MITIGATION_DATA,
  METRICS_DATA
} = require('../constants/data');
const { sendSuccessResponse } = require('../utils/errorHandler');
const { HTTP_STATUS } = require('../constants/api');

/**
 * GET /api/summary
 * Retrieve summary of the MASA Dashboard
 */
router.get('/summary', (req, res) => {
  try {
    sendSuccessResponse(res, HTTP_STATUS.OK, SUMMARY_DATA);
  } catch (error) {
    sendSuccessResponse(res, HTTP_STATUS.INTERNAL_ERROR, { message: 'Failed to fetch summary' });
  }
});

/**
 * GET /api/country-risk
 * Retrieve country-level flood risk data
 */
router.get('/country-risk', (req, res) => {
  try {
    sendSuccessResponse(res, HTTP_STATUS.OK, COUNTRY_RISK_DATA);
  } catch (error) {
    sendSuccessResponse(res, HTTP_STATUS.INTERNAL_ERROR, { message: 'Failed to fetch country risk data' });
  }
});

/**
 * GET /api/hazard-severity
 * Retrieve hazard and severity data by month
 */
router.get('/hazard-severity', (req, res) => {
  try {
    sendSuccessResponse(res, HTTP_STATUS.OK, HAZARD_SEVERITY_DATA);
  } catch (error) {
    sendSuccessResponse(res, HTTP_STATUS.INTERNAL_ERROR, { message: 'Failed to fetch hazard-severity data' });
  }
});

/**
 * GET /api/mitigation
 * Retrieve mitigation strategy and loss reduction data
 */
router.get('/mitigation', (req, res) => {
  try {
    sendSuccessResponse(res, HTTP_STATUS.OK, MITIGATION_DATA);
  } catch (error) {
    sendSuccessResponse(res, HTTP_STATUS.INTERNAL_ERROR, { message: 'Failed to fetch mitigation data' });
  }
});

/**
 * GET /api/metrics
 * Retrieve model metrics and performance data
 */
router.get('/metrics', (req, res) => {
  try {
    sendSuccessResponse(res, HTTP_STATUS.OK, METRICS_DATA);
  } catch (error) {
    sendSuccessResponse(res, HTTP_STATUS.INTERNAL_ERROR, { message: 'Failed to fetch metrics' });
  }
});

module.exports = router;
