import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

let myHover3D = new Hover3D("li"); 

// X-axis offset
myHover3D.xOffset = -2;
// Y-axis offset
myHover3D.yOffset = 2;
// Attack. How fast the element reacts to cursor movement
myHover3D.attack = 0.1;
// Release. How fast the element repairs its initial state when your cursor leaves it
myHover3D.release = 0.5;
// Sets the distance between the user and the z=0 plane
myHover3D.perspective = 500;