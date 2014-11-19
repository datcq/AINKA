(function () {
	$('#slider').on('ready', '.asset_22', function (e, el) {
		var slide =  $('#container', el);
			$('.aniCt',slide).fadeIn();
			$('.btnBack',slide).bind('tapone', function(){
				anddev.navigation.goToAsset('s19');
			});			
	});
})();
