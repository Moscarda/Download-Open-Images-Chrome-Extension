function save_options(){ // Saves current values to chrome.storage.
	var CloseOnSaveButton = document.getElementById('CloseTab').checked;
    chrome.storage.sync.set({'closeOnSave': CloseOnSaveButton});
}
function restore_options(){ // Recieves and shows the current chrome.storage values.
	chrome.storage.sync.get({'closeOnSave': true}, function(items){
		document.getElementById('CloseTab').checked = items.closeOnSave;
	});
}

document.addEventListener('DOMContentLoaded', restore_options); // On page load, load previouse settings.
document.getElementById('save').addEventListener('click', save_options); // On save click, save settings.