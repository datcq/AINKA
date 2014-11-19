(function () {
	$('#slider').on('ready', '.asset_08', function (e, el) {
		var slide =  $('#container', el);
			$('.aniCt',slide).fadeIn(function(){
				$('.btnBt > div',slide).bind('tapone', function(){
					$('.board',slide).hide();
					$($(this,slide).attr('rel'),slide).show();
				});
				$('.b4Btn',slide).bind('tapone', function(){
					$($(this,slide).attr('rel')).fadeIn();
				});
			});
	});
})();
