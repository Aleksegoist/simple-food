document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };
});
