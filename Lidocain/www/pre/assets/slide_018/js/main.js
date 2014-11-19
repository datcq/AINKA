(function () {
	$('#slider').on('ready', '.slide_018', function (e, el) {
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
			anddev.navigation.goToAsset('s21');
		});
		anddev.navigation.disableSwipe();
	});
})();
