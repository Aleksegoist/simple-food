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

  openFilters.addEventListener('click', () => {
    filterMenu.classList.toggle('filters-menu--active');
    if (filterMenu.classList.contains('filters-menu--active')) {
      bodyLock.classList.add('lock');
    } else {
      bodyLock.classList.remove('lock');
    }
  });

  filterMenu.onclick = function (event) {
    let e = document.querySelector('.filters-menu__wrapper');
    if (!e.contains(event.target)) {
      filterMenu.classList.remove('filters-menu--active');
      bodyLock.classList.remove('lock');
    }
  };

  filtersBurger.addEventListener('click', () => {
    filterMenu.classList.remove('filters-menu--active');
    bodyLock.classList.remove('lock'); //Разрешаем скроллить
  });
});

let viewmore = new Swiper('.view-more__container', {
  slidesPerView: 2,
  slidesPerGroup: 2,

  loop: false,
  speed: 1200,
  spaceBetween: 5,
  pagination: {
    el: '.view-more__pagination ',
    clickable: true,
    keyboard: true,
    renderBullet: (index, className) => {
      return `<span class="${className} restaurants-card__bullet"></span>`;
    },
  },
  breakpoints: {
    768: {
      width: 230,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.view-more__next',
        prevEl: '.view-more__prev',
      },
      pagination: false,
    },
  },
});

let reviewSwiper = new Swiper('.reviews-slider__container', {
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

if (window.matchMedia('(min-width: 768px)').matches) {
  let aboutSwiper = new Swiper('.about-slider', {
    slidesperview: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: '.about-slider__next',
      prevEl: '.about-slider__prev',
    },
  });
}

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

  let discountSwiper = new Swiper('.discounts__container', {
    slidesperview: 1,
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

$(function () {
  $('#star1').on('click', function () {
    $('.feedback-form__label').removeClass('feedback-form__label--active');
    $('.feedback-form__label').first().addClass('feedback-form__label--active');
  });
  $('#star2').on('click', function () {
    $('.feedback-form__label').removeClass('feedback-form__label--active');
    $('.feedback-form__label')
      .slice(0, 2)
      .addClass('feedback-form__label--active');
  });
  $('#star3').on('click', function () {
    $('.feedback-form__label').removeClass('feedback-form__label--active');
    $('.feedback-form__label')
      .slice(0, 3)
      .addClass('feedback-form__label--active');
  });
  $('#star4').on('click', function () {
    $('.feedback-form__label').removeClass('feedback-form__label--active');
    $('.feedback-form__label')
      .slice(0, 4)
      .addClass('feedback-form__label--active');
  });
  $('#star5').on('click', function () {
    $('.feedback-form__label').removeClass('feedback-form__label--active');
    $('.feedback-form__label')
      .slice(0, 5)
      .addClass('feedback-form__label--active');
  });

  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });

  if (window.matchMedia('(min-width: 768px)').matches) {
    $('.about-slider__link').magnificPopup({
      type: 'inline',
      preloader: false,
      callbacks: {
        open: function () {
          $('body').addClass('lock');
          var mofalSwiper = new Swiper('.about-popup__container', {
            navigation: {
              nextEl: '.about-slider__next',
              prevEl: '.about-slider__prev',
            },
            pagination: {
              el: '.about-popup__pagination',
              clickable: true,
              keyboard: true,
              renderBullet: (index, className) => {
                return `<span class="${className} reviews-slider__bullet"></span>`;
              },
            },
          });
        },
        close: function () {
          $('body').removeClass('lock');
        },
      },
    });
  }

  $(document).on('click', '.about-popup__close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  $('.star').rateYo({
    starWidth: '16px',
    normalFill: '#ececec',
    ratedFill: '#FFB800',
    spacing: '6px',
    readOnly: true,
    starSvg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.022973 6.16432C0.0780978 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64482L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141567 6.64478C0.0138172 6.52028 -0.0322143 6.334 0.022973 6.16432Z"/>
    </svg>`,
  });

  var $range = $('.product-price__input'),
    $range1 = $('.product-price__input1'),
    $inputFrom = $('.product-price__from'),
    $inputTo = $('.product-price__to'),
    instance,
    min = 60,
    max = 1100,
    from = 100,
    to = 1000;

  $range.ionRangeSlider({
    type: 'double',
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
  });
  $range1.ionRangeSlider({
    type: 'double',
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
  });
  instance = $range.data('ionRangeSlider');
  instance1 = $range1.data('ionRangeSlider');

  function updateInputs(data) {
    from = data.from;
    to = data.to;
    $inputFrom.prop('value', from);
    $inputTo.prop('value', to);
  }

  $inputFrom.on('change', function () {
    var val = $(this).prop('value');
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }
    instance.update({
      from: val,
    });
    instance1.update({
      from: val,
    });
  });

  $inputTo.on('change', function () {
    var val = $(this).prop('value');
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }
    instance.update({
      to: val,
    });
    instance1.update({
      to: val,
    });
  });

  $('.select-style, .about-form__input').styler();
});
