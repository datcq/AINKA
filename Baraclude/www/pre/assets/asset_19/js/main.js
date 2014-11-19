(function () {
	$('#slider').on('ready', '.asset_19', function (e, el) {
		var slide =  $('#container', el);
		$('.ball2',slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s20');
		});
		$('.ball1',slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s22');
		});
		$('.ball3',slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s21');
		});
		
		var bouncetime = 600;
		var ballheight = [230,230,230];
		
		function ballbounce($obj,$index) {
			$obj.animate({'bottom':20,'opacity':1}, bouncetime, 'linear', function() {					
				$obj.animate({'bottom':ballheight[$index]}, bouncetime, 'linear', function() {
					ballheight[$index]=ballheight[$index]/2;
					setTimeout(function(){
						if(ballheight[$index]>=10){
							ballbounce($obj,$index);
						}else{
							$obj.animate({'bottom':20,'opacity':1}, bouncetime, 'linear');
						}
					},100);					
				});				
			});
		}

			$('.plus',slide).bind('tapone', function(){
				$('.puScr',slide).fadeIn();
				$('.mainCt',slide).fadeOut();
			});		
			$('.close',slide).bind('tapone', function(){
				$('.puScr',slide).fadeOut();
				$('.mainCt',slide).fadeIn();
			});

			$('.txt',slide).delay(5000).fadeIn();
	
		setTimeout(function(){
			ballbounce($('.ball1',slide),0);
			setTimeout(function(){
				ballbounce($('.ball2',slide),1);
				setTimeout(function(){
					ballbounce($('.ball3',slide),2);
					
				},300);
			},300);
		},300);	
	});
})();
