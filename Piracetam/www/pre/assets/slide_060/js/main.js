(function () {
	$('#slider').on('ready', '.slide_060', function (e, el) {
		var slide = $('#container', el);
				
		$('.btn_off', slide).bind('tapone', function(){
			$('.bg1, .lamp1, .btn_on', slide).fadeIn();
			$('.bg, .lamp, .btn_off', slide).fadeOut();
		});
		$('.btn_on', slide).bind('tapone', function(){
			$('.bg1, .lamp1, .btn_on', slide).fadeOut();
			$('.bg, .lamp, .btn_off', slide).fadeIn();
		});
		
		//
		$('#mainEN .btn_off', slide).bind('tapone', function(){
			$('.bg1, .lamp1_en, #mainEN .btn_on', slide).fadeIn();
			$('.bg, .lamp_en, #mainEN .btn_off', slide).fadeOut();
		});
		$('#mainEN .btn_on', slide).bind('tapone', function(){
			$('.bg1, .lamp1_en, #mainEN .btn_on', slide).fadeOut();
			$('.bg, .lamp_en, #mainEN .btn_off', slide).fadeIn();
		});
		
	});
})();
