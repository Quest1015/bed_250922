let isAbnormal = false;
let isCalling = false;

// 添加歷史紀錄功能
function addHistoryRecord() {
  const now = new Date();
  const record = {
    date: now.toLocaleString(),
    temperature: document.getElementById('tempValue').textContent,
    status: isAbnormal ? '異常' : '正常',
    posture: document.querySelector('.card.abnormal .value').textContent,
    handling: isAbnormal ? '已通知護理師' : '正常監測中'
  };

  // 獲取現有紀錄
  let history = JSON.parse(localStorage.getItem('patientHistory') || '[]');
  
  // 添加新紀錄
  history.unshift(record);
  
  // 最多保存 50 筆紀錄
  if (history.length > 50) {
    history = history.slice(0, 50);
  }
  
  // 儲存到 localStorage
  localStorage.setItem('patientHistory', JSON.stringify(history));
}

function toggleStatus() {
  const popup = document.getElementById('popup');
  const detectButton = document.getElementById('detectButton');
  popup.style.display = 'block';

  setTimeout(() => {
    const statusCard = document.querySelector('.card.abnormal .value');
    const callStatus = document.getElementById('callStatus');
    const callSubtext = document.getElementById('callSubtext');
    const tempValue = document.getElementById('tempValue');
    const tempAvg = document.getElementById('tempAvg');
    isAbnormal = !isAbnormal;
    
    if (isAbnormal) {
      statusCard.textContent = '異常';
      statusCard.classList.remove('normal-text');
      callStatus.textContent = '呼叫中...';
      callSubtext.textContent = '通話中...';
      tempValue.textContent = '34.5°C';
      tempAvg.textContent = '平均 +0.25%';
      detectButton.textContent = '重新測量';
    } else {
      statusCard.textContent = '正常';
      statusCard.classList.add('normal-text');
      callStatus.textContent = '待機中';
      callSubtext.textContent = '待機中';
      tempValue.textContent = '未偵測';
      tempAvg.textContent = '未偵測';
      detectButton.textContent = '偵測中';
    }

    // 添加歷史紀錄
    addHistoryRecord();

    popup.style.display = 'none';
  }, 2000);
} 