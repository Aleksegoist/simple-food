document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  const filterBtns = document.querySelectorAll('.categories-nav__btn');
  const grid = document.querySelector('.categories-list');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // remove active class from all buttons
      filterBtns.forEach((filterBtn) => {
        filterBtn.classList.remove('active');
      });
      // add active class to clicked button
      btn.classList.add('active');

      // get the filter value from the clicked button
      const filterValue = btn.getAttribute('data-filter');

      // filter the grid items based on the filter value
      for (const item of grid.children) {
        if (filterValue === 'all') {
          // item.style.display = "block";
          item.classList.remove('hide');
          item.classList.add('show');
        } else if (item.classList.contains(filterValue)) {
          // item.style.display = "block";
          item.classList.remove('hide');
          item.classList.add('show');
        } else {
          // item.style.display = "none";
          item.classList.remove('show');
          item.classList.add('hide');
        }
      }
    });
  });

  const feedbackSwiper = new Swiper('.feedback-slider__inner', {
    loop: false,
    speed: 1200,
    spaceBetween: 30,
    navigation: {
      nextEl: '.feedback-slider__next',
      prevEl: '.feedback-slider__prev',
    },
    pagination: {
      el: '.feedback-slider__pagination',
      clickable: true,
      keyboard: true,
      renderBullet: (index, className) => {
        return `<span class="${className} feedback-slider__bullet"></span>`;
      },
    },
  });
});
