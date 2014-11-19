(function () {
	$('#slider').on('ready', '.asset_12', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt',slide).fadeIn(function(){
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
			$('.line',slide).fadeIn(function(){
				setTimeout(function(){
					$('.line',slide).addClass('ani').bind('webkitTransitionEnd', function(){
						$('.num',slide).fadeIn();
					});
				},500);
			});	
		});
		$('.btnpdf',slide).bind('tapone',function(){
			//console.log($(this).attr('data-link'));
		
			window.openPDFAndroid($(this).attr('data-link'));
		});
	});
})();
