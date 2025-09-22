document.addEventListener('DOMContentLoaded', function() {
  // 漢堡選單功能
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navItems = document.getElementById('navItems');

  if (hamburgerBtn && navItems) {
    hamburgerBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navItems.classList.toggle('show');
      console.log('Menu toggled');
    });

    // 點擊其他地方關閉選單
    document.addEventListener('click', function(e) {
      if (!navItems.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navItems.classList.remove('show');
      }
    });
  } else {
    console.log('Menu elements not found');
  }

  // 返回按鈕功能
  const backIcon = document.querySelector('.back-icon');
  if (backIcon) {
    backIcon.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'index.html';
      console.log('Back button clicked');
    });
  } else {
    console.log('Back button not found');
  }
}); 