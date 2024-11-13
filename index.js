document.addEventListener('contextmenu', function(event) {
    event.preventDefault();  
});

AOS.init();
  var swiper = new Swiper(".swiper", {
    grabCursor: true,
    initialSlide: 3,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 14,
    freeMode: false,
    autoplay: {
      delay: 5000,
    },
    on: {
      click(event) {
        swiper.slideTo(this.clickedIndex);
      },
    },
  });
