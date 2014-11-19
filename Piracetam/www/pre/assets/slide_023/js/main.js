(function () {
	$('#slider').on('ready', '.slide_023', function (e, el) {
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
					
	});
})();
