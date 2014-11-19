(function () {
	$('#slider').on('ready', '.asset_20', function (e, el) {
		var slide =  $('#container', el);
				setTimeout(function(){
			$('.aniCt',slide).fadeIn(function(){
					var delay = 0.25;
					for(index = 1; index <= 9; index++){
						$('.board1',slide).append("<div class='step s1 s1_"+index+" po' style='-webkit-transition-delay: "+delay+"s'></div>");
						$('.board2',slide).append("<div class='step s2 s2_"+index+" po' style='-webkit-transition-delay: "+delay+"s'></div>");
						delay+=0.25;
					}
				setTimeout(function(){
					$('.s1',slide).addClass('ani');		
				},100);					
			});
				$('.board1',slide).bind('tapone', function(){
						$('.board1',slide).fadeOut();
						$('.board2',slide).fadeIn(function(){
							$('.s2',slide).addClass('ani');	
						});
				});
				$('.board2',slide).bind('tapone', function(){
						$('.board1',slide).fadeIn();
						$('.board2',slide).fadeOut();		
						});
				});					
				$('.btnBack',slide).bind('tapone', function(){
					anddev.navigation.goToAsset('s19');
				});					

	});
})();
