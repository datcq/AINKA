(function () {
	$('#slider').on('ready', '.asset_05', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt', slide).fadeIn(function(){
			$('.men',slide).bind('tapone', function(){
				$('.img1',slide).fadeIn();
				$('.img2',slide).addClass('ani');
				setTimeout(function(){
					$('.txt1',slide).show();
				},500);
			});
			
			$('.btn1',slide).bind('tapone', function(){
				$('.txt2',slide).hide();
				$('.txt1',slide).show();
			});
			$('.btn2',slide).bind('tapone', function(){
				$('.txt1',slide).hide();
				$('.txt2',slide).show();
			});
		});
	});
})();
