(function () {
	$('#slider').on('ready', '.asset_13', function (e, el) {
		var slide = $('#container', el);
		//anddev.navigation.disableSwipe();
		$('.globe, .flag, .ctInfo',slide).anddev_disableswipe();
		
		$('.btnBack',slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s12');
		});	
		$('.btnNext',slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s14');
		});	
		$('#aniCt',slide).fadeIn(function(){
			$('.flag',slide).bind('tapone', function(){
				$('.ctInfo',slide).fadeOut();
				
				if($($(this,slide).attr('rel')).css('display')=='none'){
					$($(this,slide).attr('rel')).fadeIn();
				}
			});
		});
		
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
			behavior  : "drag", // "hold"
			module    : "360",
			sense     : -1,
			source    : frames,
			animate   : false,
			loop      : false,
			frameWrap : true,
			frameStep : 1,
			frameTime : 200,
			onFrame: checkFrame,
			enableCanvas : true
		});
		
		$('.flag4',slide).delay(1000).fadeIn(200);
		
		function checkFrame(){		
			$('.ctInfo',slide).hide();
		
			switch($(".globe",slide).spritespin("frame")){
				case 32:
				case 33:
				case 34:
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					$('.flag1,.flag2,.flag3',slide).hide();
					$('.flag4',slide).show();
					break;
				case 8:
				case 9:
				case 10:					
					$('.flag1,.flag2,.flag3',slide).show();
					$('.flag4',slide).show();
					break;				
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
					$('.flag1,.flag2,.flag3',slide).show();
					$('.flag4',slide).hide();
					break;
				case 20:
					$('.flag1,.flag2, .flag4,.flag3',slide).hide();
					break;	
				case 21:
					$('.flag4,.flag3,.flag2',slide).hide();
					break;	
				case 22:
					$('.flag4,.flag3,.flag2,.flag1',slide).hide();
					break;
				default:
					$('.ctInfo',slide).hide();
					$('.flag',slide).hide();
					break;
			}
		
			$('#aniCt',slide).removeClass().addClass('globe_frame_'+$(".globe",slide).spritespin("frame"));
		
			console.log('Check globe: ' +  $(".globe").spritespin("frame") );
		}
		
	});
})();
