anddev.helpers.modernizr.player="Browser";

if(anddev.helpers.modernizr.player=="Browser"){
	steal("./player/Browser.js")
}

(function(anddev) {
	anddev.ready(function($) {
		
		
		$("#stage").on("swipeleft", "#slider", function(e) {
			var nextAsset = anddev.navigation.models.assets.next({hideonslide:false});
			if(nextAsset.slide.type=="pdf")
			{
				showPdf("pre/assets/"+nextAsset.thumb+"/"+nextAsset.thumb+".pdf");
				e.stopPropagation();
				return false;
			}
		});
		$("#stage").on("swiperight", "#slider", function(e) {
			var nextAsset = anddev.navigation.models.assets.prev({hideonslide:false});
			if(nextAsset.slide.type=="pdf")
			{
				showPdf("pre/assets/"+nextAsset.thumb+"/"+nextAsset.thumb+".pdf");
				e.stopPropagation();
				return false;
			}
		});
		
		var _gotoAsset = anddev.navigation.goToAsset;
		anddev.navigation.goToAsset = function(asset) {
			
			var nextAsset = anddev.navigation.models.assets.getModel(asset);
			if(nextAsset.slide.type=="pdf")
			{
				if(anddev.helpers.modernizr.player=="SI" || anddev.helpers.modernizr.player=="Browser")
					_gotoAsset.apply(this, arguments);	
				else
					showPdf("pre/assets/"+nextAsset.thumb+"/"+nextAsset.thumb+".pdf");
			}
			else
			{
				_gotoAsset.apply(this, arguments);	
			}
				
		};
	});
})(anddev || {});