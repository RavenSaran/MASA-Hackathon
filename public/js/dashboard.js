/**
 * MASA Dashboard Frontend Application
 * Handles data fetching, chart rendering, and DOM updates
 */

// ==================== Utility Functions ====================

/**
 * Format number to compact notation (K, M, B)
 * @param {number} n - Number to format
 * @returns {string} Formatted number string
 */
const formatNumberCompact = (n) => {
  const num = Number(n);
  if (Number.isNaN(num)) return String(n ?? '');
  if (Math.abs(num) >= 1000000) return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
  if (Math.abs(num) >= 1000) return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  return num.toLocaleString();
};

/**
 * Set text content of an element
 * @param {string} selector - CSS selector
 * @param {*} value - Value to set
 */
const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (!el) return;
  el.textContent = String(value ?? '');
};

const impactData = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Indonesia',
      data: [420000, 520000, 480000, 610000, 560000, 750000, 980000, 920000, 1040000, 870000],
      borderColor: '#0d6efd',
      backgroundColor: 'rgba(13, 110, 253, 0.15)',
      tension: 0.35,
      fill: true
    },
    {
      label: 'Malaysia',
      data: [60000, 75000, 68000, 92000, 98000, 112000, 125000, 134000, 148000, 156000],
      borderColor: '#198754',
      backgroundColor: 'rgba(25, 135, 84, 0.15)',
      tension: 0.35,
      fill: true
    },
    {
      label: 'Philippines',
      data: [180000, 350000, 950000, 2200000, 2700000, 2100000, 2400000, 4200000, 3600000, 1800000],
      borderColor: '#dc3545',
      backgroundColor: 'rgba(220, 53, 69, 0.15)',
      tension: 0.35,
      fill: true
    }
  ]
};

const mitigationData = {
  labels: ['Baseline', 'Mitigation', 'Residual'],
  losses: [620, 420, 210]
};

// ==================== Rendering Functions ====================

/**
 * Render country risk cards
 * @param {Array} countries - Array of country risk objects
 */
const renderCards = (countries) => {
  const container = document.getElementById('countryCards');
  if (!container) return;

  container.innerHTML = '';

  countries.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'list-group-item border-0 py-3';
    card.innerHTML = `
      <h6 class="mb-2">${item.country}</h6>
      <p class="mb-1 text-muted"><strong>Flood Probability:</strong> ${(item.floodProbability * 100).toFixed(0)}%</p>
      <p class="mb-1 text-muted"><strong>Avg Loss:</strong> $${item.averageLoss.toFixed(1)}M</p>
      <p class="mb-0 text-muted"><strong>Risk Index:</strong> ${item.riskIndex}</p>
    `;
    container.appendChild(card);
  });
};

// Chart instances storage
let charts = {};

/**
 * Render hazard and severity trend line chart
 * @param {Object} data - Hazard and severity data
 */
const renderImpactTrendsChart = (data) => {
  const canvas = document.getElementById('hazardSeverityChart');
  if (!canvas) return;

  if (charts.hazardSeverity) charts.hazardSeverity.destroy();

  const chartData = data?.datasets ? data : impactData;

  charts.hazardSeverity = new Chart(canvas, {
    type: 'line',
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: (context) => {
              const value = context.parsed.y;
              const formatted = value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : value;
              return `${context.dataset.label}: ${formatted}`;
            }
          }
        },
        title: {
          display: true,
          text: 'Total Affected Population by Country'
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Year' }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Total Affected Population' },
          ticks: {
            callback: (value) => {
              if (value >= 1000000) {
                return `${(value / 1000000).toFixed(1)}M`;
              }
              return value;
            }
          }
        }
      }
    }
  });
};

/**
 * Render mitigation strategy comparison doughnut chart
 * @param {Object} data - Mitigation data with labels and losses
 */
const renderMitigationChart = (data) => {
  const canvas = document.getElementById('mitigationChart');
  if (!canvas) return;

  if (charts.mitigation) charts.mitigation.destroy();

  const chartData = data?.losses ? data : mitigationData;

  charts.mitigation = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Expected Losses',
          data: chartData.losses,
          backgroundColor: ['#0d6efd', '#198754', '#fd7e14'],
          borderColor: 'rgba(255,255,255,0.10)'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
};

// ==================== Data Rendering ====================

/**
 * Update KPI metrics from country risk data
 * @param {Array} countryRisk - Country risk data array
 */
const renderMetricsFromApi = (countryRisk) => {
  if (!Array.isArray(countryRisk) || countryRisk.length === 0) return;

  // Map country data by name
  const byCountry = Object.fromEntries(countryRisk.map((c) => [c.country, c]));
  const malaysia = byCountry['Malaysia'];
  const indonesia = byCountry['Indonesia'];
  const philippines = byCountry['Philippines'];

  // Update country-specific metrics
  if (malaysia?.averageLoss != null) setText('[data-metric="ma-affected"]', formatNumberCompact(Math.round(malaysia.averageLoss * 1000)));
  if (indonesia?.averageLoss != null) setText('[data-metric="id-affected"]', formatNumberCompact(Math.round(indonesia.averageLoss * 1000)));
  if (philippines?.averageLoss != null) setText('[data-metric="ph-affected"]', formatNumberCompact(Math.round(philippines.averageLoss * 1000)));

  // Find highest risk country
  const top = countryRisk.reduce((best, curr) => (curr.riskIndex > best.riskIndex ? curr : best), countryRisk[0]);
  if (top?.country) setText('[data-metric="top-country"]', top.country);

  // Calculate annual loss
  const annualLoss = countryRisk.reduce((sum, c) => sum + (Number(c.averageLoss) || 0), 0);
  setText('[data-metric="annual-loss"]', `USD ${annualLoss.toFixed(2)}B`);
};

// ==================== Data Fetching ====================

/**
 * Fetch all dashboard data and render components
 */
const loadDashboard = async () => {
  try {
    // Fetch all required data in parallel
    const [summaryRes, countryRiskRes, hazardSeverityRes, mitigationRes, metricsRes] = await Promise.all([
      fetch('/api/summary'),
      fetch('/api/country-risk'),
      fetch('/api/hazard-severity'),
      fetch('/api/mitigation'),
      fetch('/api/metrics')
    ]);

    // Check all responses are OK
    if (!summaryRes.ok) throw new Error(`summary API failed: ${summaryRes.status}`);
    if (!countryRiskRes.ok) throw new Error(`country-risk API failed: ${countryRiskRes.status}`);
    if (!hazardSeverityRes.ok) throw new Error(`hazard-severity API failed: ${hazardSeverityRes.status}`);
    if (!mitigationRes.ok) throw new Error(`mitigation API failed: ${mitigationRes.status}`);
    if (!metricsRes.ok) throw new Error(`metrics API failed: ${metricsRes.status}`);

    // Parse JSON responses
    const summary = await summaryRes.json();
    const countryRisk = await countryRiskRes.json();
    const hazardSeverity = await hazardSeverityRes.json();
    const mitigation = await mitigationRes.json();
    const metrics = await metricsRes.json();

    // Extract actual data from wrapped response
    const countryRiskData = countryRisk.data || countryRisk;
    const hazardSeverityData = hazardSeverity.data || hazardSeverity;
    const mitigationData = mitigation.data || mitigation;
    const metricsData = metrics.data || metrics;

    // Render components
    renderCards(countryRiskData);
    renderImpactTrendsChart(hazardSeverityData);
    renderMitigationChart(mitigationData);
    renderMetricsFromApi(countryRiskData);

    // Update model metrics
    const rmse = metricsData?.metrics?.rmse;
    const mae = metricsData?.metrics?.mae;
    if (rmse != null || mae != null) {
      const rmseText = rmse != null ? `RMSE ≈ ${rmse}K` : '';
      const maeText = mae != null ? `MAE ≈ ${mae}K` : '';
      const joined = [rmseText, maeText].filter(Boolean).join('<br>');
      const el = document.querySelector('[data-metric="rmse-mae"]');
      if (el) el.innerHTML = joined;
    }

    // Calculate mitigation reduction percentage
    if (Array.isArray(mitigationData?.losses) && mitigationData.losses.length >= 2) {
      const baseline = Number(mitigationData.losses[0]);
      const improved = Number(mitigationData.losses[1]);
      if (baseline > 0 && Number.isFinite(baseline) && Number.isFinite(improved)) {
        const reductionPct = ((baseline - improved) / baseline) * 100;
        setText('[data-metric="mitigation-reduction"]', `${reductionPct.toFixed(0)}% Reduction`);
      }
    }
  } catch (err) {
    // Log error but keep page usable
    console.error('Dashboard load failed:', err);
  }
};

// ==================== Application Initialization ====================

// Load dashboard when DOM is ready
window.addEventListener('DOMContentLoaded', loadDashboard);
