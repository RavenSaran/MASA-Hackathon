const countryData = [
  {
    country: 'Indonesia',
    floodPattern: 'High Frequency',
    riskDriver: 'Rainfall Intensity',
    impactLevel: 'Moderate–High'
  },
  {
    country: 'Malaysia',
    floodPattern: 'Increasing Exposure',
    riskDriver: 'Urbanisation + Rainfall',
    impactLevel: 'Moderate'
  },
  {
    country: 'Philippines',
    floodPattern: 'High Severity Events',
    riskDriver: 'Extreme Rainfall',
    impactLevel: 'High'
  }
];

const impactData = {
  labels: ['2010', '2015', '2020', '2025'],
  impact: [120, 180, 250, 320]
};

const mitigationData = {
  labels: ['Baseline', 'Mitigation', 'Residual'],
  losses: [620, 420, 210]
};

const renderCards = (countries) => {
  const container = document.getElementById('countryCards');
  if (!container) return;
  container.innerHTML = '';

  countries.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'list-group-item border-0 py-3';
    card.innerHTML = `
      <h6 class="mb-2">${item.country}</h6>
      <p class="mb-1 text-muted"><strong>Flood Pattern:</strong> ${item.floodPattern}</p>
      <p class="mb-1 text-muted"><strong>Risk Driver:</strong> ${item.riskDriver}</p>
      <p class="mb-0 text-muted"><strong>Impact Level:</strong> ${item.impactLevel}</p>
    `;
    container.appendChild(card);
  });
};

const renderImpactTrendsChart = (data) => {
  const ctx = document.getElementById('hazardSeverityChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Flood Impact (USD Billion)',
          data: data.impact,
          borderColor: '#dc3545',
          backgroundColor: 'rgba(220, 53, 69, 0.15)',
          tension: 0.35,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' }
      }
    }
  });
};

const renderCountryRiskChart = (items) => {
  const ctx = document.getElementById('countryRiskChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: items.map((item) => item.country),
      datasets: [
        {
          label: 'Average Flood Loss (USD M)',
          data: items.map((item) => item.averageLoss),
          backgroundColor: ['#0d6efd', '#6610f2', '#198754']
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
};

const renderMitigationChart = (data) => {
  const ctx = document.getElementById('mitigationChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Expected Losses',
          data: data.losses,
          backgroundColor: ['#0d6efd', '#198754', '#fd7e14']
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

const loadDashboard = () => {
  renderCards(countryData);
  renderImpactTrendsChart(impactData);
  renderCountryRiskChart(countryData);
  renderMitigationChart(mitigationData);
};

window.addEventListener('DOMContentLoaded', loadDashboard);
