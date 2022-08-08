//typing animation script
var typed = new Typed("typing ", {
  strings: ["Developer, Designer", "Freelancer"],
  typedSpeed: 100,
  backSpeed: 60,
  loop: true,

});




const swiper = new Currworks('.currentWorks', {
  // Optional parameters
  direction: 'horizontal',
    loop: true,
  effect: "cards",
  dynamicBullets: "true",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const testimoSwiper = new Swiper('.testimonial-card ', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 30,
  effect: "cards",

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need breakpoints
   // when window =>600px
  breakpoints: {
    600: {
  slidesPerView: 2,
      },
        // when window =>1024px
      1024: {
  slidesPerView: 3,
      }
  }, 
});





const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


document.querySelector('.home').onmousemove = (e) =>{

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}  