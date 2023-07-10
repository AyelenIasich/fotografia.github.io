const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,

  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 0,
    },

    337: {
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
    385: {
      slidesPerView: 1.3,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 1.4,
      spaceBetween: 0,
    },
    423: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    450: {
      slidesPerView: 1.6,
      spaceBetween: 0,
    },
    468: {
      slidesPerView: 1.8,
      spaceBetween: 0,
    },
    502: {
      slidesPerView: 1.9,
      spaceBetween: 0,
    },
    553: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 1.8,
      spaceBetween: 0,
    },
    612: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    688: {
      slidesPerView: 2.2,
      spaceBetween: 0,
    },

    713: {
      slidesPerView: 2.3,
      spaceBetween: 0,
    },
    750: {
      slidesPerView: 2.4,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
