(function () {
	$('#slider').on('ready', '.slide_062', function (e, el) {
		var slide = $('#container', el);
		
		/*$('.spray',slide).css({
			background : 'url(../images/spray.gif) no-repeat'
		});*/
				
		/*$('.btnEN').bind('tapone', function(){
			$('#mainEN, #head2').fadeIn();
			$('#mainVN, #head1').hide();
		});
		$('.btnVN', slide).bind('tapone', function(){
			$('#mainVN, #head1').fadeIn();
			$('#mainEN, #head2').hide();
		});*/
		
		
		$('.btn_off', slide).bind('tapone', function(){
			$('.lamp_ac', slide).fadeIn(2000);
			$('.btn_off', slide).hide();
			$('.btn_on', slide).show();
		});
		$('.btn_on', slide).bind('tapone', function(){
			$('.btn_on, .lamp_ac', slide).hide();
			$('.btn_off', slide).show();
		});
	
		
	});
})();
