import { register } from 'swiper/element/bundle';

register();

const swiperEl = document.querySelector('swiper-container');
Object.assign(swiperEl, {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: ['0%', 0, -1],
      opacity: 0,
    },
    next: {
      translate: ['100%', 0, 0],
      opacity: 0,
    },
  },
});


swiperEl.initialize();
