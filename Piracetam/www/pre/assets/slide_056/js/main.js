(function () {
	$('#slider').on('ready', '.slide_056', function (e, el) {
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
			$('.chart1_1, .chart2_1', slide).delay(500).fadeIn(300);
				$('.chart1_2, .chart2_2, .detail1, .detail2', slide).delay(1000).fadeIn(300);
				
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
