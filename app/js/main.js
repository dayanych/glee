$(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
  });
  $(".partners__list").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
  });
  $('.product-details__thumb').slick({
    asNavFor: '.product-details__big',
    vertical: true,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });
  $('.product-details__big').slick({
    asNavFor: '.product-details__thumb',
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
  $('.filter-price__input').ionRangeSlider({
    prefix: '$',
    from: '100.00',
    to: '500.00',
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text('$' + data.from + '.00')
      $('.filter-price__to').text('$' + data.to + '.00')
    },
    onChange: function (data) {
      if (Number.isInteger(data.from)) {
        $('.filter-price__from').text('$' + data.from + '.00')
      } else {
        $('.filter-price__from').text('$' + data.from)
      }
      if (Number.isInteger(data.to)) {
        $('.filter-price__to').text('$' + data.to + '.00')
      } else {
        $('.filter-price__to').text('$' + data.to)
      }
    },
  });
  $('.star').rateYo({
    starWidth: '17px',
    normalFill: '#ccccce',
    ratedFill: '#FFC35B',
    readOnly: 'true',
    spacing: '8px',
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>',
  });
  $('.star-recent').rateYo({
    starWidth: '11px',
    normalFill: '#ccccce',
    ratedFill: '#FFC35B',
    readOnly: 'true',
    spacing: '8px',
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
  })

  $('.filter-view__btn').on('click', function () {
    $('.filter-view__btn').removeClass('filter-view__btn--active');
    $(this).addClass('filter-view__btn--active');
  });
  $('.button-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list')
  });
  $('.button-list').on('click', function () {
    $('.products-item').addClass('products-item--list');
  });

  let filterBrandText = $('.filter-brand__text');
  filterBrandText = Array.from(filterBrandText);
  let max = 0;
  filterBrandText.forEach((el) => {
    if (el.offsetWidth > max) {
      max = el.offsetWidth;
    }
  });
  Array.from($('.filter-brand__text')).forEach(element => {
    element.style.width = max + 'px';
  });
  (function quantityProducts() {
    const $quantityArrowMinus = $('.product-details__input-minus');
    const $quantityArrowPlus = $('.product-details__input-plus');
    const $quantityNum = $('.product-details__input');
    const quantityMinus = () => {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1)
      }
    }
    const quantityPlus = () => {
      $quantityNum.val(+$quantityNum.val() + 1)
    }
    $quantityArrowMinus.click(quantityMinus)
    $quantityArrowPlus.click(quantityPlus)
  })();
  $('.product-tabs__link').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');
    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });
  $('.related__items').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  })
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

let containerEl1 = document.querySelector('.design');
let containerEl2 = document.querySelector('.products');
let config = {
  controls: {
    scope: 'local',
  },
};
(() => mixitup(containerEl1, config))();
(() => mixitup(containerEl2, config))();