const footerContainer = document.getElementById('site-footer');
if (footerContainer) {
  fetch('footer.html')
    .then((response) => response.text())
    .then((html) => {
      footerContainer.innerHTML = html;
    })
    .catch(() => {
      footerContainer.innerHTML = '';
    });
}
