(function () {
	$('#slider').on('ready', '.asset_23_2', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt', slide).fadeIn(function(){
			$('.board',slide).addClass('ani');
			$('.btnBack',slide).bind('tapone', function(){
				anddev.navigation.goToAsset('s23');
			});			
		});
	});
})();
