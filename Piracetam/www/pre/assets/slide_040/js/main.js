(function () {
	$('#slider').on('ready', '.slide_040', function (e, el) {
		var slide = $('#container', el);

		setTimeout(function(){
		$('.light', slide).show().addClass('opa');
			setTimeout(function(){
				$('.txt', slide).bind('tapone', function(){
					$('.board, .txt', slide).fadeOut();
					$('.lamp, .light', slide).css('opacity', '0.25');
					$('.boardAc', slide).fadeIn(function(){
						$(this).bind('tapone', function(){
							$('.board, .txt', slide).fadeIn();
							$(this, slide).fadeOut();
							$('.lamp, .light', slide).css('opacity', '1');
						});
					});
				});
			},800);
		},800);
		
		setTimeout(function(){
		$('#mainEN .light', slide).show().addClass('opa');
			setTimeout(function(){
				$('.txt_en', slide).bind('tapone', function(){
					$('#mainEN .board, .txt_en', slide).fadeOut();
					$('#mainEN .lamp, #mainEN .light', slide).css('opacity', '0.25');
					$('.boardAc_en', slide).fadeIn(function(){
						$(this).bind('tapone', function(){
							$('#mainEN .board, .txt_en', slide).fadeIn();
							$(this, slide).fadeOut();
							$('#mainEN .lamp, #mainEN .light', slide).css('opacity', '1');
						});
					});
				});
			},800);
		},800);
		
		$('.btn_off', slide).bind('tapone', function(){
			$('.bgpu', slide).show();
			$('.light_pu', slide).show().addClass('opa');
				$('.cont_pu', slide).delay(800).fadeIn();
			
		});
		$('.btn_on', slide).bind('tapone', function(){
			$('.bgpu', slide).hide();
			$('.light_pu', slide).hide().removeClass('opa');
		});
	});
})();
