// init controller
var controller = new ScrollMagic.Controller();

//edu
    new ScrollMagic.Scene({
        triggerElement: "#trigger-edu-img",
        triggerHook: 1.0, 
        duration: "140%", 
        offset: 60 
    })
    .setClassToggle("#reveal-edu-img", "visible") 
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#trigger-edu-txt",
        triggerHook: 1.0,
        duration: "120%", 
        offset: 10 
    })
    .setClassToggle("#reveal-edu-txt", "visible")
    .addTo(controller);

//learn
    new ScrollMagic.Scene({
        triggerElement: "#trigger-learn-img",
        triggerHook: 1.0,
        duration: "140%",
        offset: 60
    })
    .setClassToggle("#reveal-learn-img", "visible")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#trigger-learn-txt",
        triggerHook: 1.0,
        duration: "120%",
        offset: 10
    })
    .setClassToggle("#reveal-learn-txt", "visible")
    .addTo(controller);

//Music
    new ScrollMagic.Scene({
        triggerElement: "#trigger-music-img",
        triggerHook: 1.0,
        duration: "140%",
        offset: 60
    })
    .setClassToggle("#reveal-music-img", "visible")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#trigger-music-txt",
        triggerHook: 1.0,
        duration: "120%",
        offset: 10
    })
    .setClassToggle("#reveal-music-txt", "visible")
    .addTo(controller);

//Food
    new ScrollMagic.Scene({
        triggerElement: "#trigger-food-img",
        triggerHook: 1.0,
        duration: "140%",
        offset: 60
    })
    .setClassToggle("#reveal-food-img", "visible")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#trigger-food-txt",
        triggerHook: 1.0,
        duration: "120%",
        offset: 10
    })
    .setClassToggle("#reveal-food-txt", "visible")
    .addTo(controller);