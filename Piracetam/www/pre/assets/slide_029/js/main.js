(function () {
	$('#slider').on('ready', '.slide_029', function (e, el) {
		var slide = $('#container', el);

		setTimeout(function(){
		$('.light', slide).show().addClass('opa');
			
		},800);
		
		$('.board', slide).bind('tapone', function(){
			$('.board_ac', slide).show();
			$('.board', slide).hide();
		});
		$('.board_ac', slide).bind('tapone', function(){
			$('.board', slide).show();
			$('.board_ac', slide).hide();
		});
		
		$('.board_en', slide).bind('tapone', function(){
			$('.board_ac_en', slide).show();
			$('.board_en', slide).hide();
		});
		$('.board_ac_en', slide).bind('tapone', function(){
			$('.board_en', slide).show();
			$('.board_ac_en', slide).hide();
		});
		
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
