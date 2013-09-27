var errors = [];
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
			errors.push(request.data);
    		if(request.data.type == "sessionErrorEvent"){
				// console.log("Session Error: " + request.data.detailedMessage);
			} else if (request.data.type == "adErrorEvent") {
				// console.log("Ad Error: " + request.data.errorCode);
				// console.log("\tError Code: " + request.data.detailedMessage);
			}
    		// sendResponse({farewell: "goodbye"});
  		});
function getErrors(){
	return errors;
}
