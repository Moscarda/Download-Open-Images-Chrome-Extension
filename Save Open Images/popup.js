function getUrls(){ // Checks all of the open tabs for pictures and download them.
	chrome.tabs.query({},function(tabs){ // Gets a list of open tabs.
		tabs.forEach(function(tab){ // For each open tab check if the url is a picture url and if so, send a message with the url to background.js.
			if(isPic(tab.url)){
				chrome.runtime.sendMessage(tab.url);
				chrome.storage.sync.get({'closeOnSave': true, 'saveToDef': true}, function(items){ // Get values from option page.
					if(items.closeOnSave){ // If autoclose checked close open picture tabs.
						chrome.tabs.remove(tab.id, function() { });
					}
				});
			}
		});
	});
}
function isPic(url){ // Checks if the url is a picture url.
	if(url.indexOf(".png") > -1||url.indexOf(".jpg") > -1||url.indexOf(".tif") > -1||url.indexOf(".gif") > -1||url.indexOf(".bmp") > -1){
		return true;
	}
	return false;
}

document.addEventListener('click', getUrls()); // When the popup button is clicked, run getUrls().