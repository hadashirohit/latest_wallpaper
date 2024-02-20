/*=============== SEARCH ===============*/


/*=============== LOGIN ===============*/


/*=============== ADD SHADOW HEADER ===============*/


/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper',{
    loop :true,
    spaceBetween:-24,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    breakpoints:{
        1220:{
            spaceBetween:-32,
        }
    }
})

/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'20px',
    duration:2500,
    delay:200,
    // reset:true,
})

sr.reveal(`.home__data, .footer,.categories__wrapper--center,.copy,.heading__wrapper`)
sr.reveal(`.home__images`, {delay:600})
sr.reveal(`.services__card`,{interval:100})
sr.reveal(`.discount__data ,.categories__wrapper--left`,{origin:'left'})
sr.reveal(`.discount__images,.categories__wrapper--right`,{origin:'right'})
