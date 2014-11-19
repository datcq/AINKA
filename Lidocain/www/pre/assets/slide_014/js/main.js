(function () {
	$('#slider').on('ready', '.slide_014', function (e, el) {
		var slide = $('#container', el);
		/*$('.btnEN', slide).bind('tapone', function(){
			$('#mainEN, #head2', slide).fadeIn();
			$('#mainVN, #head1', slide).hide();
		});
		
		$('.btnVN', slide).bind('tapone', function(){
			$('#mainVN, #head1', slide).fadeIn();
			$('#mainEN, #head2', slide).hide();
		});*/
		$('.step1', slide).fadeIn(function(){
			$('.step2', slide).fadeIn(function(){
				$('.step3', slide).fadeIn(function(){
					$('.step4', slide).fadeIn(function(){
						$('.step5', slide).fadeIn(function(){
							$('.step6', slide).fadeIn(function(){
								$('.step7', slide).fadeIn(function(){
									$('.step8', slide).fadeIn(function(){
									});
								});
							});
						});
					});
				});
			});
		});
		
		
		
		setTimeout(function(){
			$('.chart', slide).addClass('ani');
		},300);
		
		$('.btn_pu', slide).bind('tapone', function(){
			setTimeout(function(){
			$('.chart', slide).removeClass('ani');
		},300);
			$('.bg_pu', slide).fadeIn();
			$('.board, .footnote, .btn_pu', slide).hide();
		});
		$('.btn_close', slide).bind('tapone', function(){
			setTimeout(function(){
			$('.chart', slide).addClass('ani');
		},300);
			$('.board, .footnote, .btn_pu', slide).fadeIn();
			$('.bg_pu', slide).hide();
		});
		
	});
})();
