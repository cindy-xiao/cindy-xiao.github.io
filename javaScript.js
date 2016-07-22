
$(document).ready(function() {
	var scrollMagicController = new ScrollMagic();

	var tween = TweenMax.to("div", 0.5, {
	backgroundColor: 'rgb(255, 39, 46)',
	scale: 7,
        rotation: 360
	    });
	var scene = new ScrollScene({
		triggerElement: "div",
		offset: 150
	    })
	    .setTween(tween)
	    .addTo(scrollMagicController);
    });
