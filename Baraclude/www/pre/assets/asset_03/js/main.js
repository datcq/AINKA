(function () {
	$('#slider').on('ready', '.asset_03', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt', slide).fadeIn(function(){
			$('.img2',slide).bind('tapone', function(){
				$('.img1',slide).fadeIn();
				$('.img3',slide).addClass('ani');
			});
		});
	});
})();
