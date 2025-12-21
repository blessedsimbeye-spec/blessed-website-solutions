const texts = document.querySelectorAll('.hero-text');
window.addEventListener('load', () => {
  texts.forEach((text, index) => {
    setTimeout(() => { text.classList.add('visible'); }, 400 * index);
  });
});
