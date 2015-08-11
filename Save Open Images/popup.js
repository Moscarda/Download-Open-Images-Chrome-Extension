function getUrls(){
	//var URLS = "";
	chrome.tabs.query({},function(tabs){     
		tabs.forEach(function(tab){
			if(isPic(tab.url)){
				//chrome.tabs.update(tab.id, {selected: true});
				//alert(tab.url);
				//saveFile(tab.url);
				chrome.runtime.sendMessage(tab.url);
				chrome.storage.sync.get({'closeOnSave': true, 'saveToDef': true}, function(items){
					if(items.closeOnSave){
						chrome.tabs.remove(tab.id, function() { });
					}
				});
				//chrome.tabs.remove(tab.id, function() { });
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
	if(url.indexOf(".png") > -1||url.indexOf(".jpg") > -1||url.indexOf(".tif") > -1||url.indexOf(".gif") > -1||url.indexOf(".bmp") > -1){
		return true;
	}
	return false;
}

document.addEventListener('click', getUrls());