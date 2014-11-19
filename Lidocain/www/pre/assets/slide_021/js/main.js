(function () {
	$('#slider').on('ready', '.slide_021', function (e, el) {
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
				$('.spray', slide).show();
				$('.spray', slide).css({
					background : 'url(pre/assets/slide_001/images/spray.gif?'+Math.random()+') no-repeat'
				});				
				
				setTimeout(function(){
					$('.spray', slide).fadeOut();
				},1800);
			},100);
		/*setTimeout(function(){
			$('.img1', slide).fadeIn(500,function(){
				$('.img2', slide).delay(300).fadeIn(500,function(){
					$('.img3', slide).delay(300).fadeIn(500,function(){
					});
				});
			});
		},1800);*/
		$('.img1', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s22');
		});
		$('.img2', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s20');
		});
		$('.img3', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s18');
		});
		$('.bt_back', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s08');
		});
		//anddev.navigation.disableSwipe();
	});
})();
