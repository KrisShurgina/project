$(document).ready(function() {
    $('.carousel__inner').slick(
        {
            speed: 1200,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/left_solid.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="images/icon/right_solid.png"></button>',
            Fade: true,
            cssEase: 'linear',
        
        });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})