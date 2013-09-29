var intervalTimerId = 0;
var intervalActive = false;

pollForErrors = function() {
	chrome.runtime.sendMessage({'method':'getInfo'},function(response){
		//response is now the info collected by the content script.
		var errors = response.errors;
		var section = document.getElementById('section');
		section.innerHTML = "";
		console.log("Error length: " + errors.length);
		$.each(errors, function(i)
		{
		    var div = $('<div>')
		        .appendTo(section);
			var input = $('<input id="ac-' + i + '" name="accordion-1" type="checkbox">')
			    .appendTo(div);
			if(errors[i].errorCode != undefined) {
				var lbl = $('<label for="ac-' + i + '">'+ errors[i].type + ' ( ' + errors[i].errorCode + ' )' +'</label>')
				.appendTo(div);
			} else {
				var lbl = $('<label for="ac-' + i + '">'+ errors[i].type + '</label>')
				.appendTo(div);
			}

			var art = $('<article class="ac-small"><p>' + errors[i].detailedMessage + '</p></article>')
				.appendTo(div);
		});

	});
}




startInterval = function() {
	intervalActive = true;
	document.getElementById('pauseResumeBtn').innerHTML = "Pause";
	intervalTimerId = setInterval(pollForErrors,1000);
}

stopInterval = function() {
	intervalActive = false;
	document.getElementById('pauseResumeBtn').innerHTML = "Resume";
	clearInterval(intervalTimerId);
}

window.onload = function() {
	
	startInterval();
	
	document.getElementById('clearBtn').onclick = function(event) {
		document.getElementById('section').innerHTML = "";
	}
	
	document.getElementById('pauseResumeBtn').onclick = function(event) {
		if(!intervalActive) {
			startInterval();
		} else {
			stopInterval();
		}
	}
}
