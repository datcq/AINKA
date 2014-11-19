(function () {
	$('#slider').on('ready', '.slide_002', function (e, el) {
		var slide = $('#container', el);
		/*$('.btnEN', slide).bind('tapone', function(){
			$('#mainEN, #head2', slide).fadeIn();
			$('#mainVN, #head1', slide).hide();
		});
		$('.btnVN', slide).bind('tapone', function(){
			$('#mainVN, #head1', slide).fadeIn();
			$('#mainEN, #head2', slide).hide();
		});*/
		$('.bt_back', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s07');
		});
		setTimeout(function(){
		$('.light', slide).show().addClass('opa');
			setTimeout(function(){
				$('.chart', slide).addClass('ani');
					setTimeout(function(){
						$('.txt_chart', slide).fadeIn();
					},800);
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
