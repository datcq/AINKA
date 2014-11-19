(function () {
	$('#slider').on('ready', '.slide_053', function (e, el) {
		var slide = $('#container', el);

		$('.table',slide).bind('tapone', function(){
			$('.table',slide).removeClass('out').addClass('act');			
			$('#chart',slide).removeClass('act').addClass('out');		
			$('.light_ye', slide).delay(500).fadeIn(800);	
			$('.light, .lamp1, .light2, .lamp2', slide).hide();
		});
		$('#chart',slide).bind('tapone', function(){
			$('.#chart',slide).removeClass('out').addClass('act');			
			$('.table',slide).removeClass('act').addClass('out');
			$('.light_ye', slide).delay(500).fadeIn(800);	
			$('.light, .lamp1, .light2, .lamp2', slide).hide();
		});
		setTimeout(function(){
		$('.light, .light2', slide).show().addClass('opa');
			setTimeout(function(){
				$('.bar', slide).addClass('ani');
					setTimeout(function(){
						$('.numchart', slide).fadeIn();
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
