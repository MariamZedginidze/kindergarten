'use strict';


const kindergarten = document.querySelector(".kindergarten");

const rocket = kindergarten.querySelector(".rocket");
const duck = kindergarten.querySelector(".duck");

//first boy
const orange_left_hand = kindergarten.querySelector(".orange-left-hand");
const orange_right_hand = kindergarten.querySelector(".orange-right-hand");
const orange_left_eye = kindergarten.querySelector(".orange-pupil");
const orange_right_eye = kindergarten.querySelector(".orange-right-eyeline");
const orange_eyebrows = kindergarten.querySelector(".orange-eyebrows");
const orange_mouth = kindergarten.querySelector(".orange-mouth");
const orange_legs = kindergarten.querySelector(".orange-legs");

//girl
const girl_left_hand = kindergarten.querySelector(".girl-left-hand");
const girl_right_hand = kindergarten.querySelector(".girl-right-hand");
const girl_eyes = kindergarten.querySelector(".girl-eyes");
const girl_mouth = kindergarten.querySelector(".girl-mouth");
const girl_legs = kindergarten.querySelector(".girl-left-leg");
const girl_right_leg = kindergarten.querySelector(".girl-right-leg")
const girl_eyebrows = kindergarten.querySelector(".girl-eyebrows");
const girl_right_hair = kindergarten.querySelector(".girl-right-hair");
const girl_left_hair = kindergarten.querySelector(".girl-left-hair");

//third boy
const green_left_hand = kindergarten.querySelector(".green-left-hand");
const green_right_hand = kindergarten.querySelector(".green-right-hand");
const green_left_eye = kindergarten.querySelector(".green-right-eyeball");
const green_right_eye = kindergarten.querySelector(".green-left-eyeball");
const green_left_eyeline = kindergarten.querySelector(".green-right-eyeline");
const green_right_eyeline = kindergarten.querySelector(".green-left-eyeline");
const green_eyebrows = kindergarten.querySelector(".green-eyebrows");
const green_mouth = kindergarten.querySelector(".green-mouth");
const green_right_leg = kindergarten.querySelector(".green-right-leg");
const green_left_leg = kindergarten.querySelector(".green-left-leg");
const green_left_eyebrow = kindergarten.querySelector(".green-left-eyebrow");
const green_right_eyebrow = kindergarten.querySelector(".green-right-eyebrow")

//fourth boy
const yellow_left_hand = kindergarten.querySelector(".yellow-left-hand");
const yellow_right_hand = kindergarten.querySelector(".yellow-right-hand");
const yellow_left_eye = kindergarten.querySelector(".yellow-right-eyeball");
const yellow_right_eye = kindergarten.querySelector(".yellow-left-eyeball");
const yellow_left_eyeline = kindergarten.querySelector(".yellow-right-eyeline");
const yellow_right_eyeline = kindergarten.querySelector(".yellow-left-eyeline");
const yellow_eyebrows = kindergarten.querySelector(".yellow-eyebrows");
const yellow_mouth = kindergarten.querySelector(".yellow-mouth");
const yellow_legs = kindergarten.querySelector(".yellow-legs");
const yellow_left_eyebrow = kindergarten.querySelector(".yellow-left-eyebrow");
const yellow_right_eyebrow = kindergarten.querySelector(".yellow-right-eyebrow")



gsap.registerPlugin(ScrollTrigger);


gsap.defaults({duration: 0.5})

let rocketScrollAnime = gsap.timeline({
  scrollTrigger: {
    trigger: kindergarten,
    // markers: true,
    start: 'top 30%',   
    end: '+=100px',
    toggleActions: 'play none reverse reverse'
  }
});
  //rocket

rocketScrollAnime.fromTo(rocket, {yPercent: -20, scale: 1.3}, {y: -170, opacity: 1, scale: 0.5, ease: "elastic.in(1, 0.4)", duration: 1, transformOrigin: "50% 50%"})
.to(rocket, {opacity: 0, duration: 0.1})

let childrenScrollAnime = gsap.timeline({
  scrollTrigger: {
    trigger: kindergarten,
    // markers: true,
    start: 'top 30%',   
    end: '+=200px',
    toggleActions: 'play pause restart reverse'
  },
  ease: "back.out(4)"
});
//first boy
childrenScrollAnime.
fromTo(orange_left_eye, {scale: 1, y: 0, x: 0}, { scale: 1.1, y: -2, x: -1}).
fromTo(orange_left_hand, {x: 0, y: 0}, {x: 10, y:5}, "<").
fromTo(orange_right_hand, {y: 25}, {y:0}, "<").
fromTo(orange_mouth, {y: 4}, {y:0}, "<").
fromTo(orange_right_eye, {y: 4, scale: 1}, {y:0, scale: 0.9}, "<").
fromTo(orange_eyebrows, {scale: 1}, { scale: 0.9}, "<").
fromTo(orange_legs, {x: 3}, {x:0}, "<")


//girl
childrenScrollAnime.
fromTo(girl_eyes, {scale: 1, y: 0, x: 0}, { scale: 0.9, y: -1, x: -1}, "<").
fromTo(girl_left_hand, {x: 5}, {x: -3, ease: "slow(0.1, 2, true"}, "<").
fromTo(girl_right_hand, {y: 5}, {y:0, ease: "slow(0.1, 2, true"}, "<").
fromTo(girl_eyebrows, {scale: 1}, { scale: 0.9}, "<").
fromTo(girl_mouth, {y: 4}, {y:0}, "<").
fromTo(girl_legs, {x: 3}, {x:0}, "<").
fromTo(girl_right_leg, {y: 0}, {y:-5}, "<").
fromTo(girl_right_hair, {y:0}, {y:-8, ease: "elastic.out(1, 0.5)", duration: 1.2}, "<").
fromTo(girl_left_hair, {y:0}, {y:-6, ease: "elastic.out(1, 0.5)", duration: 1.2}, "<")


//third boy
childrenScrollAnime.
fromTo(green_left_eye, {display: "block"}, { display:"none", duration: 0.5}, "<").
fromTo(green_right_eye, {display: "block"}, {display:"none", duration: 0.5}, "<").
from(green_left_hand, {x: -3}, "<").
fromTo(green_right_hand, {x: 3, y: 5}, {x: -3, y:0}, "<").
fromTo(green_left_eyebrow, {scale: 1}, { scale: 0.9}, "<").
fromTo(green_right_eyebrow, {scale: 1}, { scale: 0.9}, "<").
fromTo(green_mouth, {y: 4}, {y:0}, "<").
fromTo(green_right_leg, {y:0}, {y:-6, ease: "elastic.out(1, 0.5)", duration: 1.2}, "<").
fromTo(green_left_leg, {y:0}, {y:-6, ease: "elastic.out(1, 0.5)", duration: 1.2}, "<")

//fourth boy
childrenScrollAnime.
fromTo(yellow_left_eye, {display: "block"}, { display:"none", duration: 0.5}, "<").
fromTo(yellow_right_eye, {display: "block"}, {display:"none", duration: 0.5}, "<").
fromTo(yellow_left_hand, {x: 0}, {x: -3}, "<").
from(yellow_right_hand, {y: 10}, "<").
fromTo(yellow_left_eyebrow, {scale: 1}, { scale: 0.9}, "<").
fromTo(yellow_right_eyebrow, {scale: 1}, { scale: 0.9}, "<").
fromTo(yellow_mouth, {y: 4}, {y:0}, "<").
fromTo(yellow_legs, {y: 0}, {y:-3, ease: "elastic.out(1, 0.5)", duration: 1.2}, "<")

// duck
let duckScrollAnime = gsap.timeline({
  scrollTrigger: {
    trigger: kindergarten,
    start: 'top 30%',   
    end: '+=200px',
    toggleActions: 'play none none none',
  },
  repeat: -1
});
duckScrollAnime
.to(duck, {x: -400, duration: 2})
.to(duck, {scaleX: -1, x: -300, duration: 0.001
})
.to(duck, {x: 100, duration: 2})
.to(duck, {scaleX: 1, duration: 0.001})



//carousel

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});