// 保留原有的代碼...

// 添加折線圖
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('pressureChart').getContext('2d');
  
  const pressureChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00'],
      datasets: [{
        label: '壓力值',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '壓力 (mmHg)'
          }
        },
        x: {
          title: {
            display: true,
            text: '時間'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: '即時壓力監測'
        }
      }
    }
  });

  // 修改警告卡片顯示邏輯
  setTimeout(function() {
    const alertCard = document.getElementById('alertCard');
    const alertOverlay = document.getElementById('alertOverlay');
    if (alertCard && alertOverlay) {
      alertOverlay.classList.add('show');
      alertCard.classList.add('show');

      // 5秒後自動隱藏
      setTimeout(function() {
        alertOverlay.classList.remove('show');
        alertCard.classList.remove('show');
      }, 5000);
    }
  }, 7000);
});

// 原有的 toggleStatus 函數保持不變... 