TweenMax.from(".first-section", 2, {
    width: "0",
    ease: Expo.easeInOut
});

TweenMax.from(".second-section", 2, {
    delay: 1.5,
    width: "50%",
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".centered-section", 2, {
    delay: 3,
    width: "0",
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
    delay: 1.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".help-links", 2, {
    delay: 1.5,
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut
});

TweenMax.from(".main-intro", 2, {
    delay: 2.7,
    opacity: 0,
    y: 70,
    ease: Expo.easeInOut
});

TweenMax.from(".nav-item", 2, {
    delay: 2.7,
    opacity: 0,
    x: -50,
    stagger: 0.5,
    ease: Expo.easeInOut
});


TweenMax.from(".social-link", 2, {
    delay: 2.7,
    opacity: 0,
    y: 50,
    stagger: 0.5,
    ease: Expo.easeInOut
});

TweenMax.from("#ham", 2, {
    delay: 1.8,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});


let hamburger = document.getElementById("ham");
let navCloser = document.getElementById("closeMenu");
let navCont = document.getElementById("nav-cont");

hamburger.addEventListener('click', openNav);

function openNav(){
    navCont.style.height = '100%';
}


navCloser.addEventListener('click', closeNav);

function closeNav(){
    navCont.style.height = '0%';
}