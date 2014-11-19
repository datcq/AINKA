(function () {
	$('#slider').on('ready', '.asset_06', function (e, el) {
		var slide =  $('#container', el);
		
		$('.aniCt', slide).fadeIn(function(){
			$('.btn1',slide).bind('tapone', function(){
				$('.tab2',slide).hide();
				$('.tab1',slide).show();
			});
			$('.btn2',slide).bind('tapone', function(){
				$('.tab1',slide).hide();
				$('.tab2',slide).show();
			});
			$('.to11',slide).bind('tapone', function(){
				$('.aniCt',slide).fadeOut();
				$('.s3',slide).fadeIn();
			});
			$('.btnBack',slide).bind('tapone', function(){
				$('.aniCt',slide).fadeIn();
				$('.s3',slide).fadeOut();
			});
			
			$('.bntCt > div',slide).bind('tapone', function(){
				$('.'+$(this,slide).attr('rel')).fadeIn();
				
			});
		});	

		//anddev.navigation.disableSwipe();
		
		$("#circle",slide).drcom_circle({
			"src":"pre/assets/asset_06/images/circle_active.png",
			change:function(value,deg){	
				console.log(value+":"+deg);
			
				$('.hour',slide).css({
					'-webkit-transform':'rotate('+Math.round(deg)+'deg)'
				});				
				$('.minute',slide).css({
					'-webkit-transform':'rotate('+Math.round(value*720/17)+'deg)'
				})
				
				//$(".percent").html(Math.round(value));				
			},
			release:function(){
				//this.block=false;
			},
			loadCompleted:function()
			{	
				$("#circle",slide).controller().scrollTo(17,4);
				$(".tab1Txt",slide).delay(4000).fadeIn();
			}
		});
	});
})();
