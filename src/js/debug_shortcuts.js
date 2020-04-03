/*
|--------------------------------------------------------------------------
|   Shortcuts
|--------------------------------------------------------------------------
|
|	Keyboard shortcuts to trigger specific functionality for testing and 
|	routing purposes.
|
*/


/* Expand the ISI and position it below the banner by pressing CTRL+ALT+I */

document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "i") {  // case sensitive
		document.getElementById("content").classList.toggle("isi-show");
    }
} );


/* Debug mode to cycle through keyframes */

function removeClassByPrefix(el, prefix) {
    var regx = new RegExp('\\b' + prefix + '.*?\\b', 'g');
    el.className = el.className.replace(regx, '');
    return el;
}

document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "d") {  // case sensitive
		document.getElementById("content").classList.toggle("mode-debug");
		var lastTimeout = setTimeout(";");
		for (var i = 0 ; i < lastTimeout ; i++) {
		    clearTimeout(i); 
		}
		removeClassByPrefix(document.getElementById("content"), "queue");
		var ad_keyframes = document.querySelector('meta[name="ad.keyframes"]').content.split(",");
		debug_html = "";
		for (i = 0; i < ad_keyframes.length; i++) {
  			var key_val = ad_keyframes[i];
  			debug_html += "<div class='queue-time' data-index='"+(i+1)+"' data-time='"+key_val+"'>"+key_val+"</div>";
		}
		document.body.innerHTML += "<div class='debug'>" + debug_html + "</div>";

		document.querySelectorAll('.debug .queue-time').forEach(item => {
		  item.addEventListener('click', event => {
		  	removeClassByPrefix(document.getElementById("content"), "queue");
		    
		  	for (q = 0; q < item.dataset.index; q++) {
		  		document.getElementById("content").classList.toggle("queue" + (q+1));
		  	}
		    console.log(item.dataset.time);
		  })
		});
	}
} );


// create keyframes