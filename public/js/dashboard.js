const renderCards = (countries) => {
  const container = document.getElementById('countryCards');
  container.innerHTML = '';
  countries.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'list-group-item border-0 py-3';
    card.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-1">${item.country}</h6>
          <small class="text-muted">Risk Index: ${item.riskIndex}</small>
        </div>
        <span class="badge bg-primary rounded-pill">${item.floodProbability * 100}%</span>
      </div>
      <p class="mb-0 mt-2">Average loss estimate: USD ${item.averageLoss}M</p>
    `;
    container.appendChild(card);
  });
};

const renderHazardSeverityChart = (data) => {
  const ctx = document.getElementById('hazardSeverityChart');
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

const loadDashboard = async () => {
  try {
    const [countryResp, hazardResp, mitigationResp] = await Promise.all([
      fetch('/api/country-risk'),
      fetch('/api/hazard-severity'),
      fetch('/api/mitigation')
    ]);

    const countryData = await countryResp.json();
    const hazardData = await hazardResp.json();
    const mitigationData = await mitigationResp.json();

    renderCards(countryData);
    renderHazardSeverityChart(hazardData);
    renderCountryRiskChart(countryData);
    renderMitigationChart(mitigationData);
  } catch (error) {
    console.error('Failed to load dashboard data', error);
  }
};

window.addEventListener('DOMContentLoaded', loadDashboard);
