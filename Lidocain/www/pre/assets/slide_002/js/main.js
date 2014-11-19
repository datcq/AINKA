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
		
		$('.circle1, .circle1 span', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s05');
		});
		$('.circle2, .circle2 span', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s06');
		});
		$('.circle3, .circle3 span', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s11');
		});
		$('.circle4, .circle4 span', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s12');
		});
		$('.circle5, .circle5 span', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s08');
		});
		
	});
})();
