(function () {
	$('#slider').on('ready', '.slide_001', function (e, el) {
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
		
		
		

			$('.lamp', slide).fadeIn(800,function(){
				$('.box', slide).fadeIn(800,function(){
					$('.line', slide).fadeIn(800,function(){
						$('.lamp_ac', slide).show().addClass('lamp_ac');
						$('.bg_black', slide).delay(800).fadeOut(2800);
						//$('.btnVN, .btnEN, #menu').delay(800).fadeIn(2800);
						$('.lamp_ac', slide).show().addClass('lamp_ac');
					});
				});
			});
		
		
	});
})();
