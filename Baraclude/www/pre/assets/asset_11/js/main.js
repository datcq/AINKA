(function () {
	$('#slider').on('ready', '.asset_11', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt',slide).fadeIn(function(){
			//$('.board1, .board2',slide).addClass('cc');
			$('.board2',slide).bind('tapone', function(){
				$(this,slide).removeClass('act ff');
				$('.board1',slide).addClass('act');
				$('.col2a, .col2b, .col2c',slide).removeClass('ani');
				setTimeout(function(){
					$('.col2a',slide).addClass('ani');
					setTimeout(function(){
						$('.col2b',slide).addClass('ani');
						setTimeout(function(){
							$('.col2c',slide).addClass('ani');
						},500);
					},500);
				},500);
			});
			$('.board1',slide).bind('tapone', function(){
				$(this,slide).removeClass('act ff');
				$('.board2',slide).addClass('act');
				
				$('.col1a, .col1b, .col1c',slide).removeClass('ani');
				setTimeout(function(){
					$('.col1a',slide).addClass('ani');
					setTimeout(function(){
						$('.col1b',slide).addClass('ani');
						setTimeout(function(){
							$('.col1c',slide).addClass('ani');
						},500);
					},500);
				},500);
			});
			$('.plus',slide).bind('tapone', function(){
				$('.puScr',slide).fadeIn();
				$('.aniCt',slide).fadeOut();
			});		
			$('.close',slide).bind('tapone', function(){
				$('.puScr',slide).fadeOut();
				$('.aniCt',slide).fadeIn();
			});
			$('.col',slide).fadeIn();	
		});
		
		$('.btnpdf',slide).bind('tapone',function(){
			//console.log($(this).attr('data-link'));
		
			window.openPDFAndroid($(this).attr('data-link'));
		});
	});
})();
