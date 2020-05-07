// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    //About
    new ScrollMagic.Scene({
        triggerElement: "#trigger-about",
        triggerHook: 1.0,
        duration: "140%",
        offset: 100
    })
    .setClassToggle("#reveal-about", "visible")
    .addTo(controller);

    //Experience
    new ScrollMagic.Scene({
        triggerElement: "#trigger-exp",
        triggerHook: 1.0,
        duration: "140%",
        offset: 100
    })
    .setClassToggle("#reveal-exp", "visible")
    .addTo(controller);

    //skills
    new ScrollMagic.Scene({
        triggerElement: "#trigger-skills",
        triggerHook: 1.0,
        duration: "140%",
        offset: 100
    })
    .setClassToggle("#reveal-skills", "visible")
    .addTo(controller);

    