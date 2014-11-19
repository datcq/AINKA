(function () {
	$('#slider').on('ready', '.slide_003', function (e, el) {
		var slide = $('#container', el);
		
		$('.btn_glass',slide).draggable({
			start:function(){
				anddev.navigation.disableSwipe();
			},
			drag:function(){
			
			},
			stop:function(){
				anddev.navigation.enableSwipe();
			}
		});
		
		$('.areaVoi, .areaNut, .areaChai',slide).droppable({
			drop: function( event, ui ) {
				//console.log($( this ));
			
				$('.voi, .chai, .nut',slide).hide();
				$('.'+$( this ).attr('name'), slide).fadeIn(200);
			}
		});
		
		/*$('.btnEN', slide).bind('tapone', function(){
			$('#mainEN, #head2', slide).fadeIn();
			$('#mainVN, #head1', slide).hide();
		});
		
		$('.btnVN', slide).bind('tapone', function(){
			$('#mainVN, #head1', slide).fadeIn();
			$('#mainEN, #head2', slide).hide();
		});*/
	$('.footnote', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s04');
		});
	});
})();
