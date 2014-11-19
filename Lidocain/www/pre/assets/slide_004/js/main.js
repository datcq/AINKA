(function () {
	$('#slider').on('ready', '.slide_004', function (e, el) {
		var slide = $('#container', el);
		/*$('.btnEN', slide).bind('tapone', function(){
			$('#mainEN, #head2', slide).fadeIn();
			$('#mainVN, #head1', slide).hide();
		});
		
		$('.btnVN', slide).bind('tapone', function(){
			$('#mainVN, #head1', slide).fadeIn();
			$('#mainEN, #head2', slide).hide();
		});*/
		setTimeout(function(){
			$('.chart', slide).addClass('ani');
		},300);
		
		$('.btn_pu', slide).bind('tapone', function(){
			$('.btn_next', slide).show();
			setTimeout(function(){
			$('.chart', slide).removeClass('ani');
			},300);
			$('.bg_pu', slide).show().addClass('flipInX');
			$('.board, .footnote, .btn_pu, .subtitle', slide).hide();
		});
		$('.btn_close', slide).bind('tapone', function(){
			$('.btn_next', slide).hide();
			setTimeout(function(){
			$('.chart', slide).addClass('ani');
		},300);
			$('.board, .footnote, .btn_pu, .subtitle', slide).fadeIn();
			$('.bg_pu', slide).hide();
		});
		
		$('.btn_next', slide).bind('tapone', function(){
			$('.bg_pu2, .btn_back', slide).show();
			$('.bg_pu, .btn_next', slide).hide();
		});
		
		$('.btn_back', slide).bind('tapone', function(){
			$('.img2', slide).removeClass('slide_004_img2');
			$('.bg_pu, .btn_next', slide).show();
			$('.bg_pu2, .btn_back, .img1', slide).hide();
		});
		
		
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
					$('.img2', slide).addClass('slide_004_img2');
				},500);
				
			},100);	
				
				
			
			});
			
		});
		
		
	});
})();
