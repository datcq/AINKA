function clearLocalStorage() {
	if (window.localStorage == null)
		return;
		
	/*for ( var name in localStorage) {
		if (name.indexOf("anddev/tracking/") != -1) {
			alert(name);
		}
	}*/
		
	var pattern = "anddev/Pipolphen";
	
	//Check to back asset open PDF - no clear cache
	if(localStorage.getItem(pattern+"/openPDFAndroid")==""||localStorage.getItem(pattern+"/openPDFAndroid")==undefined||localStorage.getItem(pattern+"/openPDFAndroid")==null){
				
	}else{
		localStorage.removeItem(pattern+"/openPDFAndroid");
		return;
	}
	
	for ( var name in localStorage) {
		//console.log(name);
	
		if (name.indexOf(pattern) != -1) {
			//alert(localStorage.getItem(name));		
			
			if(name.indexOf(pattern+"/openPDFAndroid")!=-1){
				//alert(localStorage.getItem(name));
				//window.openPDFAndroid = localStorage.getItem(name);
			}
			
			localStorage.removeItem(name);
		}
	}	
}
clearLocalStorage();