  </main>
  <footer class="bg-light py-4">
    <div class="container text-center text-muted">MASA PHP Dashboard • Plutorians Team • 2026</div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
  <script>
    const countryData = <?php echo json_encode($countryData, JSON_PRETTY_PRINT); ?>;
    const mitigationData = <?php echo json_encode($mitigationData, JSON_PRETTY_PRINT); ?>;

    const createCountryRiskChart = () => {
      const ctx = document.getElementById('countryRiskChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: countryData.map(item => item.country),
          datasets: [{
            label: 'Average Loss (USD M)',
            data: countryData.map(item => item.averageLoss),
            backgroundColor: ['#0d6efd', '#198754', '#fd7e14']
          }]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
      });
    };

    window.addEventListener('DOMContentLoaded', createCountryRiskChart);
  </script>
</body>
</html>
