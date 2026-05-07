/**
 * Data Constants
 * Centralized climate and flood risk data
 */

const SUMMARY_DATA = {
  title: 'Modelling Climate-Induced Flood Risk and Insurance Loss',
  region: 'Southeast Asia',
  countries: ['Malaysia', 'Indonesia', 'Philippines'],
  keyFindings: [
    'Rainfall intensity is the key driver of flood risk.',
    'Indonesia shows high-frequency floods, the Philippines shows high severity, and Malaysia demonstrates rising exposure due to urbanisation.',
    'A mitigation scenario indicates that improved flood management can significantly reduce expected losses.'
  ],
  sources: ['World Bank WDI', 'WHO climate data', 'EM-DAT disaster database']
};

const COUNTRY_RISK_DATA = [
  { country: 'Malaysia', floodProbability: 0.19, averageLoss: 14.6, riskIndex: 72 },
  { country: 'Indonesia', floodProbability: 0.32, averageLoss: 18.1, riskIndex: 85 },
  { country: 'Philippines', floodProbability: 0.24, averageLoss: 22.3, riskIndex: 88 }
];

const HAZARD_SEVERITY_DATA = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  hazard: [12, 14, 18, 24, 30, 35, 40, 38, 32, 25, 18, 15],
  severity: [8, 10, 14, 16, 20, 22, 24, 22, 18, 15, 12, 9]
};

const MITIGATION_DATA = {
  labels: ['Current Strategy', 'Improved Flood Management', 'Enhanced Resilience'],
  losses: [100, 75, 57]
};

const METRICS_DATA = {
  modelType: 'Catastrophe (CAT) Model',
  hazardModel: 'Logistic Regression',
  severityModel: 'Log-linear Regression',
  datasetYears: '2000 - Present',
  metrics: {
    rmse: 4.2,
    mae: 3.1,
    sampleEvents: 525
  }
};

module.exports = {
  SUMMARY_DATA,
  COUNTRY_RISK_DATA,
  HAZARD_SEVERITY_DATA,
  MITIGATION_DATA,
  METRICS_DATA
};
