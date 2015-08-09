function getUrls(){
	//var URLS = "";
	chrome.tabs.query({},function(tabs){     
		tabs.forEach(function(tab){
			if(isPic(tab.url)){
				//chrome.tabs.update(tab.id, {selected: true});
				//alert(tab.url);
				//saveFile(tab.url);
				chrome.runtime.sendMessage(tab.url);
				chrome.tabs.remove(tab.id, function() { });
				/*chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
					if(response == "image saves successfully"){
						chrome.tabs.remove(tab.id, function() { });
					}
				}*/
				//URLS += tab.url + "\n";
			}
		});
		//alert(URLS);
		//console.log(URLS);
		//chrome.runtime.sendMessage(URLS);
	});
}
function isPic(url){
	if(url.match(".png")||url.match(".jpg")||url.match(".tif")||url.match(".gif")||url.match(".bmp")){
		return true;
	}
	return false;
}

document.addEventListener('click', getUrls());