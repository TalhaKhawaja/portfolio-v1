import SmoothScroll from 'smooth-scroll';

//Smooth scroll to the section when section link is clicked
export function smoothScroll(name) {
    var scroll = new SmoothScroll();
    var tagName = name.toLowerCase();
    var anchor = document.getElementById(tagName);
    scroll.animateScroll(anchor);
}
