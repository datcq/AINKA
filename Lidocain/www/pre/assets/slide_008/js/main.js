(function () {
	$('#slider').on('ready', '.slide_008', function (e, el) {
		var slide = $('#container', el);
		/*$('.btnEN', slide).bind('tapone', function(){
			$('#mainEN, #head2', slide).fadeIn();
			$('#mainVN, #head1', slide).hide();
		});
		
		$('.btnVN', slide).bind('tapone', function(){
			$('#mainVN, #head1', slide).fadeIn();
			$('#mainEN, #head2', slide).hide();
		});*/
	
		$('.img1', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s21');
		});
		$('.img2', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s09');
		});
		$('.img3', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s10');
		});
		$('.footnote div:nth-child(1)', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s18');
		});
		$('.bt_back', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s02');
		});
	});
})();
