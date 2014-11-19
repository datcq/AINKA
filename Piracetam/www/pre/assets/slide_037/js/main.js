(function () {
	$('#slider').on('ready', '.slide_037', function (e, el) {
		var slide = $('#container', el);
$('.bt_back', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s07');
		});
		setTimeout(function(){
		$('.light', slide).show().addClass('opa');
			setTimeout(function(){
				$('.txt', slide).bind('tapone', function(){
					$('.boardO', slide).fadeIn();
					$('.board, .txt', slide).fadeOut();
					$('.lamp, .light', slide).css('opacity', '0.1');
					$('.numYellow', slide).fadeIn(function(){
						$('.light', slide).bind('tapone', function(){
							$('boardO, .numYellow', slide).fadeOut();	
							$('.board, .txt', slide).fadeIn();
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
					$('.boardO_en', slide).fadeIn();
					$('#mainEN .board, .txt_en', slide).fadeOut();
					$('#mainEN .lamp, #mainEN .light', slide).css('opacity', '0.1');
					$('#mainEN .numYellow', slide).fadeIn(function(){
						$('#mainEN .light', slide).bind('tapone', function(){
							$('.boardO_en, #mainEN .numYellow', slide).fadeOut();	
							$('#mainEN .board, .txt_en', slide).fadeIn();
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
