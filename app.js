const toggleBtn = document.querySelector('.nav-toggle');
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', function () {
  const containerHeight = menuContainer.getBoundingClientRect().height;
  const menuHeight = menu.getBoundingClientRect().height;

  if (containerHeight === 0) {
    menuContainer.style.height = `${menuHeight}px`;
  } else {
    menuContainer.style.height = 0;
  }
  console.log('menu', menuHeight);
  console.log('container', menuContainer.getBoundingClientRect().height);
});
