const sliderBlocks = document.querySelectorAll('.promo__slider');

const initPromoSlider = () => {
  if (!sliderBlocks) {
    return;
  }

  sliderBlocks.forEach((sliderBlock) => {
    const sliderContainer = sliderBlock.querySelector('.promo__container');

    const sliderPhoto = new Swiper(sliderContainer, {
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      observer: true,

      navigation: {
        nextEl: '.promo__slider-button--right',
        prevEl: '.promo__slider-button--left',
      },
    });
  });
};

export { initPromoSlider };
