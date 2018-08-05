$(document).ready(function(){
	$('.fadeIn').hide().fadeIn(500);

	$('a').click(function(event){
		event.preventDefault();
		nextPage = this.href;
		$('.fadeIn').fadeOut(200, newpage);
	});

	function newpage() {
		window.location = nextPage;
	}
	

});