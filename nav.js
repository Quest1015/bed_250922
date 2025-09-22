document.addEventListener('DOMContentLoaded', function() {
  const headerTitle = document.querySelector('.header-title');
  const navMenu = document.getElementById('navMenu');
  
  if (headerTitle && navMenu) {
    let isMenuVisible = false;

    // 確保初始狀態菜單是隱藏的
    navMenu.style.display = 'none';

    headerTitle.addEventListener('click', function(e) {
      e.stopPropagation();
      isMenuVisible = !isMenuVisible;
      if (isMenuVisible) {
        navMenu.style.display = 'block';
      } else {
        navMenu.style.display = 'none';
      }
    });

    // 點擊其他地方關閉菜單
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !headerTitle.contains(e.target)) {
        isMenuVisible = false;
        navMenu.style.display = 'none';
      }
    });
  }
}); 