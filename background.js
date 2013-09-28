var errors = [];
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
			
			if(request.method == "errorEvent"){
				console.log("Bg got errorEvent from CS: " + request.data.type);
				errors.push(request.data);
				// if(request.data.type == "sessionErrorEvent"){
				// 					console.log("Session Error: " + request.data.detailedMessage);
				// 				} else if (request.data.type == "adErrorEvent") {
				// 					console.log("Ad Error: " + request.data.errorCode);
				// 					console.log("\tError Code: " + request.data.detailedMessage);
				// 				}
			} else if(request.method == "getInfo") {
				console.log("Bg got request from Popup");
				sendResponse({'errors':errors});
			}
			

    		
    		// sendResponse({farewell: "goodbye"});
  		});