$(document).ready(function(){
	$('.fadeIn').fadeIn(700);

	$('a').click(function(event){
		event.preventDefault();
		nextPage = this.href;
		$('.fadeIn').fadeOut(200, newpage);
	});

	function newpage() {
		window.location = nextPage;
	}
	

});