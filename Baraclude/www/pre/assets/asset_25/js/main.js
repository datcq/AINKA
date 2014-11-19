(function () {
	$('#slider').on('ready', '.asset_25', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt',slide).fadeIn(function(){
			$('.qRow div',slide).bind('tapone', function(){
				$($(this,slide).siblings('div')).removeClass('checked');
				$(this,slide).addClass('checked');
			});
			$('.reset',slide).bind('tapone', function(){
				$('.qRow div',slide).removeClass('checked');
			});
		});
	});
})();
