$(function() {
    console.log("Hi"); 
    var scrollMagicController = new ScrollMagic.Controller();

    // INTRO LINES
    var tween_intro2drop = TweenMax.to("#intro-line-2", 1, {
      y: 30
    });

    var scene_intro2drop = new ScrollMagic.Scene({
      triggerHook: 1,
      offset: 0,
      duration: 500
    })
    .setTween(tween_intro2drop)
    .addTo(scrollMagicController)
    
    var tween_intro3drop = TweenMax.to("#intro-line-3", 1, {
      y: 45
    });

    var scene_intro3drop = new ScrollMagic.Scene({
      triggerHook: 1,
      offset: 0,
      duration: 500
    })
    .setTween(tween_intro3drop)
    .addTo(scrollMagicController)
    
    var tween_intro4drop = TweenMax.to("#intro-line-4", 1, {
      y: 60
    });

    var scene_intro4drop = new ScrollMagic.Scene({
      triggerHook: 1,
      offset: 0,
      duration: 500
    })
    .setTween(tween_intro4drop)
    .addTo(scrollMagicController)
    
    
    // ABOUT TITLE 
    
    var tween_aboutdrop = TweenMax.to("#about-title", 1, {
      y: 0
    });

    var scene_aboutdrop = new ScrollMagic.Scene({
      triggerElement: '#about-title',
      offset: -150,
      duration: 300
    })
    .setTween(tween_aboutdrop)
    .addTo(scrollMagicController)
    
    
    
    // TIMELINE
    
    var tween1_circlegrow = TweenMax.to("#circle1", 1, {
      scale: 5,        
    });

    var scene1_circlegrow = new ScrollMagic.Scene({
      triggerElement: '#circle1',
      offset: -150, // how far below scene we want the animation to trigger
      duration: 300
    })
    .setTween(tween1_circlegrow)
    .addTo(scrollMagicController)
    
    var tween1_ringgrow = TweenMax.to("#ring1", 1, {
      scale: 15,      
      opacity: 0,
    });

    var scene1_ringgrow = new ScrollMagic.Scene({
      triggerElement: '#ring1',
      offset: -50, // how far below scene we want the animation to trigger
      duration: 400
    })
    .setTween(tween1_ringgrow)
    .addTo(scrollMagicController)
    
    var tween2_circlegrow = TweenMax.to("#circle2", 1, {
      scale: 5,        
    });

    var scene2_circlegrow = new ScrollMagic.Scene({
      triggerElement: '#circle2',
      offset: -150, // how far below scene we want the animation to trigger
      duration: 300
    })
    .setTween(tween2_circlegrow)
    .addTo(scrollMagicController)
    
    var tween2_ringgrow = TweenMax.to("#ring2", 1, {
      scale: 15,      
      opacity: 0,
    });

    var scene1_ringgrow = new ScrollMagic.Scene({
      triggerElement: '#ring2',
      offset: -50, // how far below scene we want the animation to trigger
      duration: 400
    })
    .setTween(tween2_ringgrow)
    .addTo(scrollMagicController)
    
    var tween_projectdrop = TweenMax.to("#school-title", 1, {
      y: 0
    });
    

    var scene_projectdrop = new ScrollMagic.Scene({
      triggerElement: '#school-title',
      offset: -150, // how far below scene we want the animation to trigger
      duration: 300
    })
    .setTween(tween_projectdrop)
    .addTo(scrollMagicController)
    
    var tween_projectdrop = TweenMax.to("#work-title", 1, {
      y: 0
    });

    var scene_projectdrop = new ScrollMagic.Scene({
      triggerElement: '#work-title',
      offset: -150, // how far below scene we want the animation to trigger
      duration: 300
    })
    .setTween(tween_projectdrop)
    .addTo(scrollMagicController)
    
    var tween_projectdrop = TweenMax.to("#next-title", 1, {
      y: 30
    });

    var scene_projectdrop = new ScrollMagic.Scene({
      triggerElement: '#next-title',
      offset: -150, // how far below scene we want the animation to trigger
      duration: 300
    })
    .setTween(tween_projectdrop)
    .addTo(scrollMagicController)
    
    
    // PROJECTS
    
    var tween_projectdrop = TweenMax.to("#project-title", 1, {
      y: 0
    });

    var scene_projectdrop = new ScrollMagic.Scene({
      triggerElement: '#project-title',
      offset: -150, // how far below scene we want the animation to trigger
      duration: 300
    })
    .setTween(tween_projectdrop)
    .addTo(scrollMagicController)

    
    
    
    // make a controller and add indicators to all scenes attached
//    var controller = new ScrollMagic.Controller({addIndicators: true});
//    // this scene will automatically have indicators added to it
//    new ScrollMagic.Scene()
//                   .addTo(controller);
    

});