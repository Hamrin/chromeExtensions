(function(){
	
	var hej = window.hej = {
		
		i: 0,
		
		supportTimerId: 0,
		
		checkStatus:function(){
	        hej.i++;

	        if(hej.i > 100){
	            console.log("No vpsupport available.");
				clearInterval(hej.supportTimerId);
	        }

			if(window.videoplaza_js_support !== undefined){
	            hej.stopChecking();
			}
		},
		
		errorEventHandler : function( e ) {
			hej.trigger(JSON.stringify(e),function(response){
				//Callback for when content script returns event.
			});
		},
		
		addEventHandlers : function() {
			window.videoplaza_js_support.addEventListener( "sessionErrorEvent", this.errorEventHandler );
			window.videoplaza_js_support.addEventListener( "adErrorEvent", this.errorEventHandler );
		},
		
		
		startChecking:function() {
			hej.supportTimerId = setInterval(hej.checkStatus, 100);
		},

		stopChecking:function(){
			//Didn't find VpSupport!
			clearInterval(hej.supportTimerId);
	        hej.addEventHandlers();
		},
		
		trigger:function(data, f_callback) {
		        var d = document.createElement("textarea"),
		            e = document.createEvent("Events");
		        d.style.cssText = "display:none;";
		        d.value = data == null ? "" : data;
		        d.addEventListener("action", function() {
		            f_callback && f_callback(d.value);
		            d.parentNode.removeChild(d);
		        }, true)
		        document.body.appendChild(d);

		        // Fire events, to notify the Content script
		        e.initEvent("onAdplayerError", false, true);
		        d.dispatchEvent(e);
		    }
		
	};
	
	hej.startChecking();
	
})();