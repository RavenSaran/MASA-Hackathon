/**
 * API Constants
 * Central location for API-related constants and configuration
 */

const API_ENDPOINTS = {
  SUMMARY: '/api/summary',
  COUNTRY_RISK: '/api/country-risk',
  HAZARD_SEVERITY: '/api/hazard-severity',
  MITIGATION: '/api/mitigation',
  METRICS: '/api/metrics'
};

const COUNTRIES = {
  MALAYSIA: 'Malaysia',
  INDONESIA: 'Indonesia',
  PHILIPPINES: 'Philippines'
};

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
};

module.exports = {
  API_ENDPOINTS,
  COUNTRIES,
  HTTP_STATUS
};
