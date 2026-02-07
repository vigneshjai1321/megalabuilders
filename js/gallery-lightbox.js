(function () {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;

  const items = Array.from(document.querySelectorAll('.gallery-item'));
  const img = lightbox.querySelector('.gallery-lightbox-img');
  const caption = lightbox.querySelector('.gallery-caption');
  const btnPrev = lightbox.querySelector('.gallery-prev');
  const btnNext = lightbox.querySelector('.gallery-next');
  const btnClose = lightbox.querySelector('.gallery-close');
  let currentIndex = 0;

  const open = (index) => {
    const item = items[index];
    const src = item.getAttribute('href');
    const title = item.getAttribute('data-title') || '';
    img.src = src;
    img.alt = title;
    caption.textContent = title;
    currentIndex = index;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const showPrev = () => {
    const nextIndex = (currentIndex - 1 + items.length) % items.length;
    open(nextIndex);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    open(nextIndex);
  };

  items.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      open(index);
    });
  });

  btnPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrev();
  });

  btnNext.addEventListener('click', (e) => {
    e.stopPropagation();
    showNext();
  });

  btnClose.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
})();
