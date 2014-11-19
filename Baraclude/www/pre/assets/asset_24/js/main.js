(function () {
	$('#slider').on('ready', '.asset_24', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt',slide).fadeIn(function(){
				$('.btnBack',slide).bind('tapone', function(){
					anddev.navigation.goToAsset('s23');
				});			
					var delay = 0.25;
					for(index = 1; index <= 7; index++){
						$('.board1',slide).append("<div class='step s1 s1_"+index+" po' style='-webkit-transition-delay: "+delay+"s'></div>");
						delay+=0.25;
					}
				setTimeout(function(){
					$('.s1',slide).addClass('ani');		
				},100);					
			});
	});
})();
