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

const hazardData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  hazard: [52, 58, 60, 68, 72, 75],
  severity: [34, 38, 42, 46, 50, 53]
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

const renderHazardSeverityChart = (data) => {
  const ctx = document.getElementById('hazardSeverityChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Hazard Score',
          data: data.hazard,
          borderColor: '#0d6efd',
          backgroundColor: 'rgba(13, 110, 253, 0.15)',
          tension: 0.35,
          fill: true
        },
        {
          label: 'Severity Score',
          data: data.severity,
          borderColor: '#198754',
          backgroundColor: 'rgba(25, 135, 84, 0.15)',
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
  renderHazardSeverityChart(hazardData);
  renderCountryRiskChart(countryData);
  renderMitigationChart(mitigationData);
};

window.addEventListener('DOMContentLoaded', loadDashboard);
