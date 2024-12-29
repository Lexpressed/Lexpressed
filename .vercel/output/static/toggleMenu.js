// public/toggleMenu.js

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const isExpanded = menu.classList.contains('hidden');

  menu.classList.toggle('hidden', !isExpanded);
  menuIcon.classList.toggle('hidden', !isExpanded);
  closeIcon.classList.toggle('hidden', isExpanded);
}

// Export the function to make it available globally
window.toggleMenu = toggleMenu;