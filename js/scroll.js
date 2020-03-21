// init controller
var controller = new ScrollMagic.Controller();

var intro = new ScrollMagic.Scene({
    duration: 1000, // the scene should last for a scroll distance of 100px
    triggerElement: "#top",
    offset: 300 // start this scene after scrolling for 50px
})

.setPin('#top') // pins the element for the the scene's duration
.addTo(controller); // assign the scene to the controller

// create a scene
var edu = new ScrollMagic.Scene({
    duration: 500, // the scene should last for a scroll distance of 100px
    triggerElement: "#edu",
    offset: 250 // start this scene after scrolling for 50px
})

.setPin('#edu') // pins the element for the the scene's duration
.addTo(controller); // assign the scene to the controller

var learning = new ScrollMagic.Scene({
    duration: 500, // the scene should last for a scroll distance of 100px
    triggerElement: "#learn",
    offset: 250 // start this scene after scrolling for 50px
})

.setPin('#learn') // pins the element for the the scene's duration
.addTo(controller); // assign the scene to the controller
