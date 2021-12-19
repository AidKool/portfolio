const toggleBtn = document.querySelector('.nav-toggle');
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');
const scrollLinks = document.querySelectorAll('.scroll-link');

toggleBtn.addEventListener('click', toggleMenu);

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const id = event.currentTarget.getAttribute('href');
    const element = document.querySelector(id);
    const navbar = document.querySelector('nav');

    const containerHeight = menuContainer.getBoundingClientRect().height;
    const navbarHeight = navbar.getBoundingClientRect().height;

    let position = element.offsetTop - navbarHeight;

    const display = containerHeight > 55;
    if (display) {
      position += containerHeight;
      menuContainer.style.height = 0;
    }

    window.scrollTo({
      top: position,
    });
  });
});

function toggleMenu() {
  const containerHeight = menuContainer.getBoundingClientRect().height;
  const menuHeight = menu.getBoundingClientRect().height;

  if (containerHeight === 0) {
    menuContainer.style.height = `${menuHeight}px`;
  } else {
    menuContainer.style.height = 0;
  }
}
