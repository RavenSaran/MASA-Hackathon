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
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Indonesia',
      data: [0.45, 0.6, 0.55, 0.7, 0.65, 0.8, 0.95, 0.9, 1.0, 0.85],
      borderColor: '#0d6efd',
      backgroundColor: 'rgba(13, 110, 253, 0.15)',
      tension: 0.35,
      fill: true
    },
    {
      label: 'Malaysia',
      data: [0.15, 0.18, 0.16, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32],
      borderColor: '#198754',
      backgroundColor: 'rgba(25, 135, 84, 0.15)',
      tension: 0.35,
      fill: true
    },
    {
      label: 'Philippines',
      data: [0.3, 0.4, 0.85, 1.2, 1.25, 1.1, 1.5, 1.7, 1.4, 1.35],
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
      datasets: data.datasets
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Flood Impact (USD Billion)'
          }
        }
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
  renderMitigationChart(mitigationData);
};

window.addEventListener('DOMContentLoaded', loadDashboard);
