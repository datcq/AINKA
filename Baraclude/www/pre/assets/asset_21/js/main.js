(function () {
	$('#slider').on('ready', '.asset_21', function (e, el) {
		var slide =  $('#container', el);
		$('.aniCt', slide).fadeIn(function(){
			$('.board, .txt1',slide).addClass('ani');
			$('.btn1',slide).bind('tapone', function(){
				$('.txt2',slide).hide();
				$('.txt1',slide).show();
			});
			$('.btn2',slide).bind('tapone', function(){
				$('.txt1',slide).hide();
				$('.txt2',slide).show();
			});
			$('.btnBack',slide).bind('tapone', function(){
				anddev.navigation.goToAsset('s19');
			});			
		});
	});
})();
