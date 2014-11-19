(function () {
	$('#slider').on('ready', '.slide_007', function (e, el) {
		var slide = $('#container', el);
		anddev.navigation.disableSwipe();		
		
		$('.bt_next', slide).bind('tapone', function(){
			anddev.helpers.storage.set('showEndAsset7','true');
			anddev.navigation.goToAsset('s45');
		});
		$('.bt_back', slide).bind('tapone', function(){
			anddev.helpers.storage.set('showEndAsset7','');
			anddev.navigation.goToAsset('s01');
		});
		$('.lamp_ac1', slide).bind('tapone', function(){
			anddev.helpers.storage.set('showEndAsset7','true');
			anddev.navigation.goToAsset('s45');
		});
		$('.lamp_ac2', slide).bind('tapone', function(){
			anddev.helpers.storage.set('showEndAsset7','true');
			anddev.navigation.goToAsset('s23');
		});
		$('.lamp_ac3', slide).bind('tapone', function(){
			anddev.helpers.storage.set('showEndAsset7','true');
			anddev.navigation.goToAsset('s37');
		});
		$('.lamp_ac4', slide).bind('tapone', function(){
			anddev.helpers.storage.set('showEndAsset7','true');
			anddev.navigation.goToAsset('s15');
		});
		$('.lamp_ac5', slide).bind('tapone', function(){
			anddev.helpers.storage.set('showEndAsset7','true');
			anddev.navigation.goToAsset('s48');
		});
		$('.lamp_ac6', slide).bind('tapone', function(){
			anddev.helpers.storage.set('showEndAsset7','true');
			anddev.navigation.goToAsset('s56');
		});
		$('.lamp_ac7', slide).bind('tapone', function(){
			anddev.helpers.storage.set('showEndAsset7','true');
			anddev.navigation.goToAsset('s02');
		});
		
		function showAsset(){
			if(anddev.helpers.storage.get('showEndAsset7')==true){
				anddev.helpers.storage.set('showEndAsset7','');
				$('.img_drug', slide).css('width','231px');
				$('.lamp_ac',slide).show();
				$('.drug, .crock',slide).hide();
				return;		
			}else{
				$('#drug1',slide).draggable({ 
					revert: true,
					start: function(){
						anddev.navigation.disableSwipe();
					},
					drag: function(){
					
					},
					stop: function(){
						setTimeout(function(){
							//anddev.navigation.enableSwipe();
						},200);				
					}			
				});
			
				$( ".battery",slide ).droppable({
					drop: function( event, ui ) {
						console.log(ui);
						
						switch(ui.helper[0].id){
							case "drug1":
								$('.'+ui.helper[0].id).hide();
								$('.img_drug',slide).css('width','33px');
								$('.lamp_ac1',slide).show();
								
								$('#drug2',slide).draggable({ 
									revert: true,
									start: function(){
										anddev.navigation.disableSwipe();
									},
									drag: function(){
									
									},
									stop: function(){
										setTimeout(function(){
											//anddev.navigation.enableSwipe();
										},200);				
									}			
								});
								break;
							case "drug2":
								$('.'+ui.helper[0].id).hide();
								$('.img_drug',slide).css('width','66px');
								$('.lamp_ac2',slide).show();
								
								$('#drug3',slide).draggable({ 
									revert: true,
									start: function(){
										anddev.navigation.disableSwipe();
									},
									drag: function(){
									
									},
									stop: function(){
										setTimeout(function(){
											//anddev.navigation.enableSwipe();
										},200);				
									}			
								});
								
								break;
							case "drug3":
								$('.'+ui.helper[0].id).hide();
								$('.img_drug',slide).css('width','99px');
								$('.lamp_ac3',slide).show();
								
								$('#drug4',slide).draggable({ 
									revert: true,
									start: function(){
										anddev.navigation.disableSwipe();
									},
									drag: function(){
									
									},
									stop: function(){
										setTimeout(function(){
											//anddev.navigation.enableSwipe();
										},200);				
									}			
								});
								break;
							case "drug4":
								$('.'+ui.helper[0].id).hide();
								$('.img_drug',slide).css('width','132px');
								$('.lamp_ac4',slide).show();
								
								$('#drug5',slide).draggable({ 
									revert: true,
									start: function(){
										anddev.navigation.disableSwipe();
									},
									drag: function(){
									
									},
									stop: function(){
										setTimeout(function(){
											//anddev.navigation.enableSwipe();
										},200);				
									}			
								});
								break;
							case "drug5":
								$('.'+ui.helper[0].id).hide();
								$('.img_drug',slide).css('width','165px');
								$('.lamp_ac5',slide).show();
								
								$('#crock1',slide).draggable({ 
									revert: true,
									start: function(){
										anddev.navigation.disableSwipe();
									},
									drag: function(){
									
									},
									stop: function(){
										setTimeout(function(){
											//anddev.navigation.enableSwipe();
										},200);				
									}			
								});
								break;
							case "crock1":
								$('.'+ui.helper[0].id).hide();
								$('.img_drug',slide).css('width','198px');
								$('.lamp_ac6',slide).show();
								
								$('#crock2',slide).draggable({ 
									revert: true,
									start: function(){
										anddev.navigation.disableSwipe();
									},
									drag: function(){
									
									},
									stop: function(){
										setTimeout(function(){
											//anddev.navigation.enableSwipe();
										},200);				
									}			
								});
								break;
							case "crock2":
								$('.'+ui.helper[0].id).hide();
								$('.img_drug',slide).css('width','231px');
								$('.lamp_ac7',slide).show();
								break;
							
						}
					}			
				});	
			}
		};
		
		showAsset();
	});
})();
