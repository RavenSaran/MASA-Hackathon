<?php
include 'includes/header.php';
include 'data.php';
?>
    <section class="row gy-4">
      <div class="col-lg-4">
        <div class="card shadow-sm p-3">
          <h5>Project Summary</h5>
          <p>This dashboard is a PHP-based example for the MASA hackathon project on climate-induced flood risk and insurance loss.</p>
          <p><strong>Region:</strong> Southeast Asia</p>
          <p><strong>Sources:</strong> <?php echo implode(', ', $summary['sources']); ?></p>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm p-3">
          <h5>Country Risk Metrics</h5>
          <div class="table-responsive">
            <table class="table table-borderless align-middle mb-0">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Risk Index</th>
                  <th>Flood Probability</th>
                  <th>Average Loss</th>
                </tr>
              </thead>
              <tbody>
                <?php foreach ($countryData as $item): ?>
                <tr>
                  <td><?php echo $item['country']; ?></td>
                  <td><?php echo $item['riskIndex']; ?></td>
                  <td><?php echo ($item['floodProbability'] * 100) . '%'; ?></td>
                  <td>USD <?php echo $item['averageLoss']; ?>M</td>
                </tr>
                <?php endforeach; ?>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="row gy-4 mt-4">
      <div class="col-lg-12">
        <div class="card shadow-sm p-3">
          <h5>Mitigation Scenario</h5>
          <p>This scenario shows how improved flood management and resilience can reduce expected losses over the baseline strategy.</p>
          <canvas id="countryRiskChart" height="200"></canvas>
        </div>
      </div>
    </section>

<?php include 'includes/footer.php'; ?>
