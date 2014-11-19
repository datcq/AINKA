(function () {
	$('#slider').on('ready', '.slide_057', function (e, el) {
		var slide = $('#container', el);
		setTimeout(function(){
			$('.light', slide).show().addClass('opa');
			$('.txt', slide).bind('tapone', function(){
				$('.board, .txt', slide).fadeOut();
				$('.light, .lamp', slide).css('opacity', '0.2');
				$('.boardAc', slide).fadeIn(function(){
					$('.light', slide).bind('tapone', function(){
						$('.light, .lamp', slide).css('opacity', '1');
						$('.board, .txt', slide).fadeIn();
						$('.boardAc', slide).fadeOut();
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
		
	});
})();
