(function () {
	$('#slider').on('ready', '.slide_006', function (e, el) {
		var slide = $('#container', el);
		/*$('.btnEN', slide).bind('tapone', function(){
			$('#mainEN, #head2', slide).fadeIn();
			$('#mainVN, #head1', slide).hide();
		});
		
		$('.btnVN', slide).bind('tapone', function(){
			$('#mainVN, #head1', slide).fadeIn();
			$('#mainEN, #head2', slide).hide();
		});*/
		
		$("#tabmenu div", slide).bind('tapone', function(){
			$($(this).attr('rel')).show().addClass('flipInX');
			$(".close", slide).show();
			$(".prod, #tabmenu div, .img_main", slide).hide();
		});
		$(".close", slide).bind('tapone', function(){
			$(".icontent, #close", slide).hide();
			$(".prod, #tabmenu div, .img_main", slide).show();
		});	
		$('.bt_back', slide).bind('tapone', function(){
			anddev.navigation.goToAsset('s02');
		});
	});
})();
