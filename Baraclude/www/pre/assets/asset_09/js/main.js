(function () {
	$('#slider').on('ready', '.asset_09', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt',slide).fadeIn(function(){
			$('.whole',slide).addClass('ani');
			$('.img3',slide).bind('tapone', function(){
				$(this,slide).addClass('ani');
				setTimeout(function(){
					$('.img3',slide).removeClass('ani');
				},1000);
			});	
			$('.img1',slide).bind('tapone', function(){
				$('.pill',slide).addClass('ani');
				$('.img1, .img2',slide).addClass('ani');
				$('.bara',slide).bind('tapone', function(){
					$('.whole',slide).addClass('ani2').bind('webkitTransitionEnd', function(){
						$('.board',slide).fadeIn(function(){
							$('.board',slide).addClass('ani');
						});
					});
				});					
			});			
		});

	});
})();
