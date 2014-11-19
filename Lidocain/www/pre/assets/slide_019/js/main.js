(function () {
	$('#slider').on('ready', '.slide_019', function (e, el) {
		var slide = $('#container', el);
		
		
		function moveit(obj, t, xCenter, yCenter, r1, r2) {
			if($('.box',slide).hasClass('act')) return;
		
			var newT = t + 0.01;			
			var newLeft = Math.floor(xCenter + (r1 * Math.cos(newT)));
			var newTop = Math.floor(yCenter + (r2 * Math.sin(newT)));
			
			obj.css('top',newTop).css('left',newLeft);	
			obj.attr('data-t',newT);
						
			if(obj.css('top').replace('px','') > yCenter){
				obj.css('z-index',parseInt($('.prod').css('z-index'))+1);
			}else{
				obj.css('z-index',parseInt($('.prod').css('z-index'))-1);
			}
			
			setTimeout(function(){
				moveit(obj, newT, xCenter, yCenter, r1, r2);
			},50);
		}	

		function runCircle(){	
			moveit($('.circle1',slide),parseFloat($('.circle1',slide).attr('data-t')),520,280,440,130);
			moveit($('.circle2',slide),parseFloat($('.circle2',slide).attr('data-t')),520,280,440,130);
			moveit($('.circle3',slide),parseFloat($('.circle3',slide).attr('data-t')),520,280,440,130);
			moveit($('.circle4',slide),parseFloat($('.circle4',slide).attr('data-t')),520,280,440,130);
			moveit($('.circle5',slide),parseFloat($('.circle5',slide).attr('data-t')),520,280,440,130);
			
			
		};
		
		runCircle();
		
	});
})();
