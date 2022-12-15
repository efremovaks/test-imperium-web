const sliderBlocks = document.querySelectorAll('.intro__slider');

const initIntroSlider = () => {
  if (!sliderBlocks) {
    return;
  }

  sliderBlocks.forEach((sliderBlock) => {
    const sliderContainer = sliderBlock.querySelector('.intro__container');

    const sliderPhoto = new Swiper(sliderContainer, {
      loop: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 180,
      observer: true,
      centeredSlides: true,
      loopFillGroupWithBlank: true,

      speed: 300,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.intro__slider-button--right',
        prevEl: '.intro__slider-button--left',
      },
    });
  });
};

export { initIntroSlider };
