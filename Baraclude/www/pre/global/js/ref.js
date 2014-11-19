(function (anddev) {
    anddev.ready(function ($) {
    	
    	$("body").on("tapone",".ref",function(){
    		console.log("Open REF: "+$(this).attr("data-link"));
			
			if($(this).attr("data-link")){
				window.openPDFAndroid($(this).attr("data-link"));
			}else{
				window.openPDFAndroid("ref.pdf?page=1");
			}
    	});
    });
})(anddev || {});