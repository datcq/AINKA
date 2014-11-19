(function () {
	$('#slider').on('ready', '.slide_050', function (e, el) {
		var slide = $('#container', el);

		setTimeout(function(){
			$('.light', slide).show().addClass('opa');
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
