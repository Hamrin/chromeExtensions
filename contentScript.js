function injectJs(link) {
        var scr = document.createElement("script");
        scr.type="text/javascript";
        scr.src=link;
        (document.head || document.body || document.documentElement).appendChild(scr);
		// src.onload = function() {
		// 		    src.parentNode.removeChild(src);
		// 		};
		
		
		// Event listener
		document.addEventListener("onAdplayerError", function(e) {
		    var from = e.target;
		    if (from) {
		        // Deserialize the string
				var data = JSON.parse(from.value);
				// Trigger callback, to finish the event, so that the temporary element can be removed
				var o_event = document.createEvent('Events');
				o_event.initEvent('action', true, false);
				from.value = "This is the response.";
				from.dispatchEvent(o_event);
				//Send to background:
				chrome.runtime.sendMessage({'method':'errorEvent', 'data': data});
				
				// if(data.type == "sessionErrorEvent"){
				// 					console.log("Session Error: " + data.detailedMessage);
				// 				} else if (data.type == "adErrorEvent") {
				// 					console.log("Ad Error: " + data.errorCode);
				// 					console.log("\tError Code: " + data.detailedMessage);
				// 				}
		    }
		}, true);
}

injectJs(chrome.extension.getURL("adPlayerErrors.js"));