var mySwiper = new Swiper('.swiper-container', {
autoplay: true,
loop : true,
speed:1500,
effect : 'cube',
  cubeEffect: {
    slideShadows:true,
    shadow: true,
    shadowOffset: 100,
    shadowScale: 0.6,
    freeMode : true,
  },
  pagination: {
        el: '.swiper-pagination',
        clickable :true,
  },
});