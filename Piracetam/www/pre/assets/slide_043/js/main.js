(function () {
	$('#slider').on('ready', '.slide_043', function (e, el) {
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
		$('.light, .light2', slide).show().addClass('opa');
			setTimeout(function(){
				$('.chart1, .chart2', slide).addClass('ani');
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
