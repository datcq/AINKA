(function () {
	$('#slider').on('ready', '.slide_023', function (e, el) {
		var slide = $('#container', el);
		/*$('.btnEN', slide).bind('tapone', function(){
			$('#mainEN, #head2', slide).fadeIn();
			$('#mainVN, #head1', slide).hide();
		});
		
		$('.btnVN', slide).bind('tapone', function(){
			$('#mainVN, #head1', slide).fadeIn();
			$('#mainEN, #head2', slide).hide();
		});*/

		$('.img2', slide).bind('tapone', function(){
			$('.img1', slide).fadeIn(800);
			
			$('.prod', slide).bind('tapone', function(){
				
				
			setTimeout(function(){
				$('.spray', slide).show();
				$('.spray', slide).css({
					background : 'url(pre/assets/slide_001/images/spray.gif?'+Math.random()+') no-repeat'
				});	
				setTimeout(function(){
					$('.spray', slide).fadeOut();
				},1800);			
				setTimeout(function(){
					$('.img2', slide).addClass('slide_023_img2');
				},500);
				
			},100);	
				
				
			
			});
			
		});
		
		
	});
})();
