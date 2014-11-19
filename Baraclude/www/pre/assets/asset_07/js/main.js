(function () {
	$('#slider').on('ready', '.asset_07', function (e, el) {
		var slide =  $('#container', el);
			$('.aniCt',slide).fadeIn(function(){
				$('.warn',slide).bind('tapone', function(){
					$('.img1',slide).fadeIn();
					$('.img2',slide).addClass('ani');
				});
			});
	});
})();
