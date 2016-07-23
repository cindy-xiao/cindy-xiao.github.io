
$(document).ready(function() {
	var scrollMagicController = new ScrollMagic.Controller();

	var tween = TweenMax.to("div", 0.5, {
	backgroundColor: 'red',
	color: "white"
	    });
	var scene = new ScrollMagic.Scene({
		triggerElement: "div",
	    })
	    .setTween(tween)
	    .addIndicators({name: "1 (duration: 0)"})
	    .addTo(scrollMagicController);
    });
