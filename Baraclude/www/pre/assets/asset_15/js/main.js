(function () {
	$('#slider').on('ready', '.asset_15', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt',slide).fadeIn(function(){
			$('.hbv',slide).bind('tapone', function(){
				setTimeout(function(){
					var delay = 0.25;
					for(index = 1; index <= 24; index++){
						console.log(index+":"+$.inArray(index,[2,4,6,8,10,12,14,16,18,20,21,23]));
					
						if($.inArray(index,[2,4,6,8,10,12,14,16,18,20,21,23])>-1){
							$('.aniCt',slide).append("<div class='arrow arrow_"+index+" step step_"+index+" po' dataStep='"+index+"' style='-webkit-transition-delay: "+delay+"s'></div>");
						}else{
							$('.aniCt',slide).append("<div class='step step_"+index+" po' dataStep='"+index+"' style='-webkit-transition-delay: "+delay+"s'></div>");
						}
						delay+=0.25;
						
						if(index==24){
							$('.arrow',slide).on("swipe",function(){
								$(this).hide();
								var hideStep = Math.round($(this).attr('dataStep'));
								$('.step',slide).each(function( index ) {
									if( hideStep < Math.round($(this).attr('dataStep'))){
										$(this).hide();
									}
								});
							});
						}
					}
				},500);
				setTimeout(function(){
					$('.step',slide).addClass('ani');
					
					$('.arrow',slide).mousedown(function(){
						anddev.navigation.disableSwipe();
					});
					$(".arrow",slide).mouseup(function(){
						setTimeout(function(){
							anddev.navigation.enableSwipe();
						},200);
					});
					
				},1000);			
				});			
		});
	});
})();
