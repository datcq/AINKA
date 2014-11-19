(function () {
	$('#slider').on('ready', '.asset_04', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt',slide).fadeIn(function(){
			var click = 0;
			$('.pill',slide).bind('tapone', function(){
				switch(click){
					case 0: 
						$('.arr1',slide).fadeIn();						
						click++;
						break;						
					case 1:
						$('.pill',slide).addClass('pill2');
						$('.aniF1',slide).fadeOut();
						$('.aniF2',slide).fadeIn(function(){
							$('.arrs2',slide).fadeIn(function(){
								$('.arrs2',slide).addClass('aniF2');
								$('.arrs2_8_1, .arrs2_9, .arrs2_10',slide).addClass('aniF4');

							});
						});
						$('.aniF2',slide).bind('tapone', function(){
							$('.lab2',slide).fadeIn();
						});
						click++;
						break;
						
					case 2:
						$('.pill',slide).addClass('pill3');
						$('.lab2',slide).fadeOut();
						$('.aniF3',slide).fadeIn();						
						$('.aniF2',slide).not('.aniF4').fadeOut();
						$('.st2_8.aniF4, .arrs2_8_1',slide).fadeIn();
						$('.aniF2',slide).unbind('tapone');
						$('.aniF4',slide).bind('tapone', function(){
							$('.lab3',slide).fadeIn();
						});						
						click++;
						break;
						
					case 3:
						$('.pill',slide).addClass('pill4');						
						$('.lab3',slide).fadeOut();
						$('.aniF2, .aniF4',slide).fadeOut();
						$('.aniF1',slide).not('.st1_10, .arr10_1, .arr10_2').fadeIn();						
						$('.aniF4',slide).unbind('tapone');
						$('.st4_10',slide).fadeIn(function(){
							$('.arr3',slide).delay(300).fadeIn();						
						})
						$('.st4_10',slide).bind('tapone', function(){
							$('.lab4',slide).fadeIn();
							
						});	
						
						$(slide).on( "mousedown",function(){
							anddev.navigation.disableSwipe();
						});
						$(slide).on( "mouseup",function(){
							setTimeout(function(){
								anddev.navigation.enableSwipe();
							},200);
						});
						
						$(slide).on('swipeleft', function(){
							$(slide).off('swipeleft');
							$(slide).off( "mousedown");
							$(slide).off( "mousedup");
							
							$('.aniCt',slide).fadeOut();
							$('.board',slide).fadeIn();
							
							setTimeout(function(){
								anddev.navigation.enableSwipe();
							},100)
						});	
						$('.pill',slide).bind('tapone', function(){
							anddev.navigation.goToAsset('s16');
						});						
						break;
					
				}
			});

		});
	});
})();
