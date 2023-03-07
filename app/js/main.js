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

  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileBurger = document.querySelector('.mobile-burger'); //наша кнопка
  const filtersBurger = document.querySelector('.filters-burger'); //наша кнопка
  const mobileMenu = document.querySelector('.mobile-menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА
  const filterMenu = document.querySelector('.filters-menu');
  const openFilters = document.querySelector('.open-filters');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('mobile-menu--active')) {
      //Проверяем, есть ли у меню активный класс
      mobileBurger.classList.add('mobile-burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    } else {
      //Когда нету активного класса у меню
      mobileBurger.classList.remove('mobile-burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });

  mobileMenu.onclick = function (event) {
    let e = document.querySelector('.mobile-menu__wrapper');
    if (!e.contains(event.target)) {
      mobileBurger.classList.remove('mobile-burger--active');
      mobileMenu.classList.remove('mobile-menu--active');
      bodyLock.classList.remove('lock');
    }
  };

  mobileBurger.addEventListener('click', () => {
    mobileBurger.classList.remove('mobile-burger--active');
    mobileMenu.classList.remove('mobile-menu--active');
    bodyLock.classList.remove('lock'); //Разрешаем скроллить
  });

  let feedbackSwiper = new Swiper('.feedback-slider__inner', {
    loop: false,
    speed: 1200,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews-slider__next',
      prevEl: '.reviews-slider__prev',
    },
    pagination: {
      el: '.reviews-slider__pagination',
      clickable: true,
      keyboard: true,
      renderBullet: (index, className) => {
        return `<span class="${className} reviews-slider__bullet"></span>`;
      },
    },
  });

  if (window.matchMedia('(max-width: 768px)').matches) {
    let restaurantsSwiper = new Swiper('.best-restaurants__container', {
      slidesPerview: 1,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: '.restaurants-card__pagination',
        clickable: true,
        keyboard: true,
        renderBullet: (index, className) => {
          return `<span class="${className} restaurants-card__bullet"></span>`;
        },
      },
    });
  }
});
