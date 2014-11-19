(function () {
	$('#slider').on('ready', '.slide_045', function (e, el) {
		var slide = $('#container', el);
		$('.bt_back', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s07');
		});
		setTimeout(function(){
			$('.light', slide).show().addClass('opa');
			$('.txt', slide).bind('tapone', function(){
				$('.board, .txt', slide).fadeOut();
				$('.light, .lamp', slide).css('opacity', '0.1');
				$('.boardAc', slide).fadeIn(function(){
					$('.light', slide).bind('tapone', function(){
						$('.light, .lamp', slide).css('opacity', '1');
						$('.board, .txt', slide).fadeIn();
						$('.boardAc', slide).fadeOut();
					});	
				});
			});
		},800);
		
		setTimeout(function(){
			$('.light_en', slide).show().addClass('opa');
			$('.txt_en', slide).bind('tapone', function(){
				$('.board_en, .txt_en', slide).fadeOut();
				$('.light_en, .lamp_en', slide).css('opacity', '0.1');
				$('.boardAc_en', slide).fadeIn(function(){
					$('.light_en', slide).bind('tapone', function(){
						$('.light_en, .lamp_en', slide).css('opacity', '1');
						$('.board_en, .txt_en', slide).fadeIn();
						$('.boardAc_en', slide).fadeOut();
					});	
				});
			});
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
		
		//english
		$('.btn_off_en', slide).bind('tapone', function(){
			$('.bgpu_en', slide).show();
			$('.light_pu_en', slide).show().addClass('opa');
				$('.cont_pu_en', slide).delay(800).fadeIn();
			
		});
		$('.btn_on_en', slide).bind('tapone', function(){
			$('.bgpu_en', slide).hide();
			$('.light_pu', slide).hide().removeClass('opa');
		});
		
	});
})();
