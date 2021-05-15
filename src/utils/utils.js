import SmoothScroll from 'smooth-scroll';

//Smooth scroll to the section when section link is clicked
export function smoothScroll(name) {
    var scroll = new SmoothScroll();
    var anchor = document.getElementById(name.toLowerCase());
    scroll.animateScroll(anchor);
}
