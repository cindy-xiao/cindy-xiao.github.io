$(document).ready(function(){
	$('.fadeIn').hide().fadeIn(700);

	$('a').click(function(event){
		event.preventDefault();
		nextPage = this.href;
		$('.fadeIn').fadeOut(350, newpage);
	});

	function newpage() {
		window.location = nextPage;
	}
	

});