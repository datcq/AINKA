(function () {
	$('#slider').on('ready', '.slide_021', function (e, el) {
		var slide = $('#container', el);
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
