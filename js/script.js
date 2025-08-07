/*
 * Custom JavaScript for the academic project template
 *
 * This file initializes the Bulma carousel and handles the
 * responsive navigation menu. The code is written in vanilla
 * JavaScript for maximum compatibility. No external dependencies
 * other than Bulma are required.
 */

document.addEventListener('DOMContentLoaded', function () {
  // Toggle the navbar menu on mobile
  const burger = document.querySelector('.navbar-burger');
  const targetId = burger.dataset.target;
  const menu = document.getElementById(targetId);
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  // Determine how many slides to show based on window width. Bulma
  // Carousel doesn’t provide built‑in breakpoints, so we compute a
  // value at load time. Show one slide on narrow screens, two on
  // tablets and three on larger screens.
  const width = window.innerWidth;
  let slidesToShow;
  if (width >= 1024) {
    slidesToShow = 3;
  } else if (width >= 768) {
    slidesToShow = 2;
  } else {
    slidesToShow = 1;
  }

  // Initialise all carousels with the computed slidesToShow. If you
  // have multiple carousels on the same page they will all share
  // this configuration. For dynamic resizing you could listen to
  // window.resize and reinitialise, but this static computation
  // keeps the implementation simple.
  bulmaCarousel.attach('.carousel', {
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
    autoplay: true,
    pauseOnHover: true,
    infinite: true,
    navigation: true,
    pagination: true
  });
});

document.addEventListener('DOMContentLoaded', () => {
  bulmaCarousel.attach('.carousel', {
    slidesToScroll: 1,
    slidesToShow:   1,
    autoplay:       true,
    loop:           true,
    pauseOnHover:   true
  });
});
