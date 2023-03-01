$(function(){
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
  })
})

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