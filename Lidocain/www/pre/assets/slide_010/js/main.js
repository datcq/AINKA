(function () {
	$('#slider').on('ready', '.slide_010', function (e, el) {
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
			$('.chart', slide).addClass('ani');
		},300);
		
		$('.btn_pu', slide).bind('tapone', function(){
			setTimeout(function(){
			$('.chart', slide).removeClass('ani');
		},300);
			$('.bg_pu', slide).show().addClass('flipInX');
			$('.board, .footnote, .btn_pu, .subtitle', slide).hide();
		});
		$('.btn_close', slide).bind('tapone', function(){
			setTimeout(function(){
			$('.chart', slide).addClass('ani');
		},300);
			$('.board, .footnote, .btn_pu, .subtitle', slide).fadeIn();
			$('.bg_pu', slide).hide();
		});
		$('.bt_back', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s08');
		});
		//anddev.navigation.disableSwipe();
		/*slide.bind('swiperight',function(){
   				anddev.navigation.goToAsset('s09');
  			});
			slide.bind('swipeleft',function(){
   				anddev.navigation.goToAsset('s17');
  			});*/
		
	});
})();
