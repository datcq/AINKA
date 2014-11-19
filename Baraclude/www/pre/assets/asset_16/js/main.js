(function () {
	$('#slider').on('ready', '.asset_16', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt',slide).fadeIn(function(){
			$('.btnBack',slide).bind('tapone', function(){
				anddev.navigation.goToAsset('s4');
			});				
			$('.img1',slide).fadeIn();
			$('.img2',slide).addClass('ani');
			
			$('.plus',slide).bind('tapone', function(){
				$('.puScr',slide).fadeIn();
				$('.aniCt',slide).fadeOut();
			});		
			$('.close',slide).bind('tapone', function(){
				$('.puScr',slide).fadeOut();
				$('.aniCt',slide).fadeIn();
			});
			$(".bntCt > div",slide).bind('tapone', function(){
				$('.'+$(this,slide).attr('rel')).addClass('ani');
			});
		});
	});
})();
