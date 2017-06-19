function dyniframesize() {
	$("iframe").each(function(){
		var pTar = this;
		pTar.height=0;
		//console.info(pTar);
		/*if (document.getElementById){ 
			pTar = document.getElementById(down);
			pTar.height=0;
		} 
		else{ 
			eval('pTar = ' + down + ';'); 
		} */
		if (pTar && !window.opera){
			pTar.style.display="block";
			if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight){
				pTar.height = pTar.contentDocument.body.offsetHeight +20; 
				//pTar.width = pTar.contentDocument.body.scrollWidth+20; 
			} 
			else if (pTar.Document && pTar.Document.body.scrollHeight){
				pTar.height = 0; 
				//pTar.width = pTar.Document.body.scrollWidth; 
			} 
		} 
	});
	
} 