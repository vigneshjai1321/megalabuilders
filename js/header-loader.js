const headerContainer = document.getElementById('site-header');
if (headerContainer) {
  fetch('header.html')
    .then((response) => response.text())
    .then((html) => {
      headerContainer.innerHTML = html;

      const path = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = headerContainer.querySelectorAll('.navbar .nav-link');
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === path) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      const stickyEl = headerContainer.querySelector('.sticky-top');
      if (stickyEl) {
        const updateSticky = () => {
          if (window.scrollY > 300) {
            stickyEl.classList.add('bg-white', 'shadow-sm');
            stickyEl.style.top = '0px';
          } else {
            stickyEl.classList.remove('bg-white', 'shadow-sm');
            stickyEl.style.top = '-150px';
          }
        };
        updateSticky();
        window.addEventListener('scroll', updateSticky, { passive: true });
      }
    })
    .catch(() => {
      headerContainer.innerHTML = '';
    });
}
