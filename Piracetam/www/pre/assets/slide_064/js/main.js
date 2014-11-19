(function () {
	$('#slider').on('ready', '.slide_064', function (e, el) {
		var slide = $('#container', el);
		anddev.navigation.disableSwipe();
		
		$('.bt_next', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s62');
		});
		$('.bt_back', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s60');
		});
		
		$('.link64', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s62');
		});
		
		var countDrag = 0;
		
		$('.img1, .img1_en, .img2, .img2_en, .img3, .img3_en',slide).draggable({
			revert: true,
			start:function(){
				anddev.navigation.disableSwipe();
			},
			drag:function(){
			
			},
			stop:function(){
				setTimeout(function(){
					//anddev.navigation.enableSwipe();
				},50);
			}
		});
		
		function checkDragged(){
			if(countDrag==3){
				setTimeout(function(){
					$('.screen1',slide).fadeOut(500,function(){
						$('.screen2',slide).fadeIn(500);
					});
				},300);
			}
		}
		
		$( ".img1.positioned, .img1_en.positioned",slide ).droppable({
			drop: function( event, ui ) {
				console.log(ui);				
				switch(ui.helper[0].id){
					case "img1":
					case "img1_en":
						$('.'+ui.helper[0].id+':not(.positioned)').hide();
						$(this).css('opacity','1');		

						countDrag+=1;	
						checkDragged();
						break;
				}
			}
		});
		$( ".img2.positioned, .img2_en.positioned",slide ).droppable({
			drop: function( event, ui ) {
				console.log(ui);
				switch(ui.helper[0].id){
					case "img2":
					case "img2_en":
						$('.'+ui.helper[0].id+':not(.positioned)').hide();
						$(this).css('opacity','1');		

						countDrag+=1;	
						checkDragged();						
						break;
				}
			}
		});
		$( ".img3.positioned, .img3_en.positioned",slide ).droppable({
			drop: function( event, ui ) {
				console.log(ui);
				switch(ui.helper[0].id){
					case "img3":
					case "img3_en":
						$('.'+ui.helper[0].id+':not(.positioned)').hide();
						$(this).css('opacity','1');

						countDrag+=1;
						checkDragged();
						break;
				}
			}
		});
		
		$('.btnVN, .btnEN').bind('tapone',function(){
			countDrag = 0;
			$('.screen2',slide).hide();
			$('.screen1, .img1, .img1_en, .img2, .img2_en, .img3, .img3_en',slide).show();
			$('.img1.positioned, .img1_en.positioned, .img2.positioned, .img2_en.positioned, .img3.positioned, .img3_en.positioned',slide).css('opacity','0');
		});
	});
})();
