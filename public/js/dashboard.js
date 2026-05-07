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
          title: {
            display: true,
            text: 'Year'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Total Affected Population'
          },
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
