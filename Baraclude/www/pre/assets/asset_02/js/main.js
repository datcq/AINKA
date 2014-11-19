(function () {
	$('#slider').on('ready', '.asset_02', function (e, el) {
		var slide = $('#container', el);
		
		var frames = [
          "pre/global/images/globe/globe_00001.png",
          "pre/global/images/globe/globe_00002.png",
          "pre/global/images/globe/globe_00003.png",
          "pre/global/images/globe/globe_00004.png",
          "pre/global/images/globe/globe_00005.png",
          "pre/global/images/globe/globe_00006.png",
          "pre/global/images/globe/globe_00007.png",
          "pre/global/images/globe/globe_00008.png",
          "pre/global/images/globe/globe_00009.png",
          "pre/global/images/globe/globe_00010.png",
          "pre/global/images/globe/globe_00011.png",
          "pre/global/images/globe/globe_00012.png",
          "pre/global/images/globe/globe_00013.png",
          "pre/global/images/globe/globe_00014.png",
          "pre/global/images/globe/globe_00015.png",
          "pre/global/images/globe/globe_00016.png",
          "pre/global/images/globe/globe_00017.png",
          "pre/global/images/globe/globe_00018.png",
          "pre/global/images/globe/globe_00019.png",
          "pre/global/images/globe/globe_00020.png",
          "pre/global/images/globe/globe_00021.png",
          "pre/global/images/globe/globe_00022.png",
          "pre/global/images/globe/globe_00023.png",
          "pre/global/images/globe/globe_00024.png",
          "pre/global/images/globe/globe_00025.png",
          "pre/global/images/globe/globe_00026.png",
          "pre/global/images/globe/globe_00027.png",
          "pre/global/images/globe/globe_00028.png",
          "pre/global/images/globe/globe_00029.png",
          "pre/global/images/globe/globe_00030.png",
          "pre/global/images/globe/globe_00031.png",
          "pre/global/images/globe/globe_00032.png",
          "pre/global/images/globe/globe_00033.png",
          "pre/global/images/globe/globe_00034.png",
		  "pre/global/images/globe/globe_00035.png"
        ];
		
		$(".globe",slide).spritespin({
			width     : 536,
			height    : 536,
			frames    : frames.length,
			behavior  : "null", // "hold"
			module    : "360",
			sense     : -1,
			source    : frames,
			animate   : true,
			loop      : true,
			frameWrap : true,
			frameStep : 1,
			frameTime : 200,
			onFrame: checkFrame,
			enableCanvas : true
		});
		
		function checkFrame(){
			//console.log('Check 360frames: ' +  $("#360frames").spritespin("frame") );
		}
		
		$('.claim',slide).fadeIn(200);
		$('.globe',slide).fadeIn(200,function(){
			$('.globe',slide).addClass('ani');
			
			setTimeout(function(){					
				$(".globe",slide).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
					$(".globe",slide).unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
					
					$('.board',slide).fadeIn(500, function(){
						loadContent();
					});
				});
				$('.globe',slide).addClass('moveLeft');
			},1000);
		});	
		
		$('.btnReload',slide).bind('tapone',function(){
			loadContent();
		});
		
		var curImg = 1;
		function loadContent(){
			if(curImg==4){
				$('.btnReload',slide).hide();
				$(".globe",slide).spritespin('animate',true);
				$('.img'+curImg,slide).fadeOut(500);
				curImg = 1;
				
				$('.img'+curImg,slide).delay(500).fadeIn(500);		
			}else{
				$('.img'+curImg,slide).fadeIn(500);		
			}			
			
				
			var inter = setInterval(function(){
				$('.img'+curImg,slide).fadeOut(500);
				setTimeout(function(){
					curImg+=1;
					$('.img'+curImg,slide).fadeIn(500,function(){
						if(curImg==4){
							$(".globe",slide).spritespin('animate',false);
							clearInterval(inter);
							
							$('.btnReload',slide).show();
						}
					});								
				},500);							
			},3000);
		}
	});
})();
