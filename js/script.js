$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

const makeDarkBackground = () => {
  console.log('event');
  resetDarkBackground();
  let arr = document.querySelectorAll('.owl-carousel.owl-drag div.owl-item.active');
  console.log(arr);
  Array.from(arr).forEach((el, ind) => {
    if (ind === 1) {
      el.classList.add('darked');
    }
  });
};
const resetDarkBackground = () => {
  let el = document.querySelector('.darked');
  if (el) {
    el.classList.remove('darked');
  }
};
makeDarkBackground();
document.querySelector('.owl-carousel.owl-loaded').addEventListener('mousemove', makeDarkBackground);
document.querySelector('.owl-carousel.owl-loaded').addEventListener('click', makeDarkBackground);
