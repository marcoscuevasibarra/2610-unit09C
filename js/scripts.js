// inject current year in footer
const time = new Date();
console.log(time.getFullYear())
document.querySelector('#year').textContent = time.getFullYear();


const hb = document.querySelector('#hamburgerBtn');

hb.addEventListener('click', () => {

    document.querySelector('#primaryNav').classList.toggle('open');

})



const swiper = new Swiper('.swiper', {
    // Optional parameters
   
    loop: true,

  effect: 'cube',
  speed: 2000,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
   // auto play

   autoplay: {
    delay: 5000,
  },
  });