function init() {
	var errors = chrome.extension.getBackgroundPage().getErrors();
	for (var i = 0; i < errors.length; i++){
	document.getElementById("content");
	    div.innerHTML += errors[i].type + " \n\t " + errors[i].detailedMessage;
		if(errors[i].hasOwnProperty("errorCode")) {
			div.innerHTML += "\n" + errors[i].errorCode;
		}
	}
}

init();