document.addEventListener("DOMContentLoaded", function() {

	$('.lblInp input').keyup(function() {
		if($(this).val().length > 0){
			$(this).closest('.lblInp input').addClass('filled');
		}
		else{
			$(this).closest('.lblInp input').removeClass('filled');
		}
	});
	$('.lblInp textarea').keyup(function() {
		if($(this).val().length > 0){
			$(this).closest('.lblInp textarea').addClass('filled');
		}
		else{
			$(this).closest('.lblInp textarea').removeClass('filled');
		}
		
	});
	//scroll
	var intq = 0;
	var z = 0;
	var item = $('.header__nav a');
	item.on('click', function(e) {
		e.preventDefault()
		intq = $(this).data().target;
		z = $(intq).offset().top;
		$('html, body').animate({
			scrollTop: z
		}, 500);
	});
	var nav = $('.menu li');
	console.log(nav);
	nav.on('click', function(e) {
		e.preventDefault()
		intqn = $(this).data().target;
		z = $(intqn).offset().top;
		$('html, body').animate({
			scrollTop: z
		}, 500);
		$('body').toggleClass('open');
	});


	
	var rocket = $('.up__wrapper');

	rocket.on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 1500) {
			rocket.fadeIn(100);
		} else {
			rocket.fadeOut(100);
		};
	});
	
	// flicker
	var zzzimg = $('.contact__img img');
	
	(function( $ ) {
		$(function() {
			var $output = $('.contact__img img');
	
					$( window ).scroll(function() {
						$output.addClass('contact__flash');
						clearTimeout( $.data( this, "scrollCheck" ) );
						$.data( this, "scrollCheck", setTimeout(function() {
							$output.removeClass('contact__flash');
						}, 250) );
	
					});
	
		});
	
	})( jQuery );

	// menu
	$('button').on('click', function(){
		$('body').toggleClass('open');
	});
	$(function() {

		//E-mail Ajax Send !!!work only with mail.php!!!
		$(".my_form").submit(function() { //Change
			var th = $(this);
			console.log(th);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function() {
				th.find(".submitForm input").addClass('sended').val("Sended!");
				setTimeout(function() {
					$('.submitForm input').removeClass('sended').val("Submit");
					th.trigger("reset");
				}, 5000);
			});
			return false;
		});
	});
});
