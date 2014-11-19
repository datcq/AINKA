(function () {
	$('#slider').on('ready', '.asset_18', function (e, el) {
		var slide =  $('#container', el);
		
		$('.head div span',slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s23');
		});
		
		$('.aniCt',slide).fadeIn(function(){
			$('.aniCt div',slide).addClass('ani');
			$('.arrow',slide).bind('webkitTransitionEnd', function(){
				setTimeout(function(){
					$('.step_9, .step_14, .step_12',slide).css('opacity',1).addClass('ani2_2');
					$('.box', slide).show();
					$('.box',slide).bind('tapone', function(){
						anddev.navigation.goToAsset('s19');
					});
					$('.step_12',slide).bind('tapone', function(){
						anddev.navigation.goToAsset('s23');
					});
				},1000);
			});
		});	
	});
})();
