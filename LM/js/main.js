$(document).ready(function(){

		/* boton para el header responsive */
		
		var menuBtn = $('.menu-icon'),
			menu = $('.navigation ul');	
		menuBtn.click(function () {

			if(menu.hasClass('show')){

			menu.removeClass('show');

		}
		else{
			menu.addClass('show');
		}
			
		}) ; 

		const typed = new Typed('.typed',{

		strings:[
			'<i class="palabra">verse</i>',
			'<i class="palabra">sentirse</i>'
		],

		typeSpeed: 75,
		startDelay:300,
		backSpeed:75,
		backDelay:1500,
		loop:true,
		loopCount:false,
		showCursor:true,
		cursorChar:'|',
		contentType:'html',

		});

		
});




