//options script
function save_options(){
	var CloseOnSaveButton = document.getElementById('CloseTab').checked;
    chrome.storage.sync.set({'closeOnSave': CloseOnSaveButton});
	var saveToDefButton = document.getElementById('SaveLoc').checked;
	chrome.storage.sync.set({'saveToDef': saveToDefButton});
}
function restore_options(){
	chrome.storage.sync.get({'closeOnSave': true, 'saveToDef': true}, function(items){
		document.getElementById('CloseTab').checked = items.closeOnSave;
		document.getElementById('SaveLoc').checked = items.saveToDef;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);