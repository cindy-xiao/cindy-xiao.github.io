
$(document).ready(function() {
	var scrollMagicController = new ScrollMagic.Controller();

	var tween = new TweenMax.to("#block", 2.5, {
	backgroundColor: 'red',
	color: "white"
	    });
	var scene = new ScrollMagic.Scene({
		triggerElement: "container",
	    })
	    .setTween(tween)
	    .addIndicators()
	    .addTo(scrollMagicController);
    });
