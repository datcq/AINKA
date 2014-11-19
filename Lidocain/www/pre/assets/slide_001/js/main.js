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
		
		$('.bullet1',slide).addClass('bullet1');
		$('.bullet2',slide).addClass('bullet2');
		setTimeout(function(){
			setTimeout(function(){
				$('.spray', slide).show();
				$('.spray', slide).css({
					background : 'url(pre/assets/slide_001/images/spray.gif?'+Math.random()+') no-repeat'
				});				
				
				setTimeout(function(){
					$('.spray', slide).fadeOut();
				},1800);
			},100);
		},300);
		$('.bullet1', slide).bind('tapone', function(){
			$('.circle1', slide).show().addClass('bounceIn');
			$('.circle2, .circle3, .circle4, .circle5', slide).hide();
		});
		$('.bullet2', slide).bind('tapone', function(){
			$('.circle4', slide).show().addClass('bounceIn');
			$('.circle1, .circle3, .circle2, .circle5', slide).hide();
		});
		$('.bullet3', slide).bind('tapone', function(){
			$('.circle2', slide).show().addClass('bounceIn');
			$('.circle1, .circle3, .circle4, .circle5', slide).hide();
		});
		$('.bullet4', slide).bind('tapone', function(){
			$('.circle3', slide).show().addClass('bounceIn');
			$('.circle1, .circle2, .circle4, .circle5', slide).hide();
		});
		
		$('.bullet5', slide).bind('tapone', function(){
			$('.circle5', slide).show().addClass('bounceIn');
			$('.circle1, .circle2, .circle3, .circle4', slide).hide();
		});
	
		
	});
})();
