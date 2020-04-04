import './_timeline.scss';		/* Timeline styles */

/* Debug mode to cycle through keyframes */
function removeClassByPrefix(el, prefix) {
    var regx = new RegExp('\\b' + prefix + '.-*?\\b', 'g');
    el.className = el.className.replace(regx, '');
    return el;
}

document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "d") {  // case sensitive
		
    	/* Toggle the classname in the parent container */
		document.getElementById("content").classList.toggle("mode-timeline");

		/* Kill all animation queues */
		var lastTimeout = setTimeout(";");
		for (var i = 0 ; i < lastTimeout ; i++) {
		    clearTimeout(i); 
		}

		/* Remove all queue classes from the parent */
		removeClassByPrefix(document.getElementById("content"), "queue-");

		/* Get all keyframes from meta data */
		var ad_keyframes = document.querySelector('meta[name="ad.keyframes"]').content.split(",");

		/* Build timeline */
		var timeline_html = "";
		for (i = 0; i < ad_keyframes.length; i++) {
  			var key_val = ad_keyframes[i];
  			timeline_html += "<div class='queue-time' data-index='"+(i+1)+"' data-time='"+key_val+"'>"+key_val+"</div>";
		}

		/* Inject timeline onto canvas */
		document.body.innerHTML += "<div class='timeline'>" + timeline_html + "</div>";

		/* Click listener for each timeline queue */
		document.querySelectorAll('.timeline .queue-time').forEach(item => {
		  item.addEventListener('click', event => {

		  	/* Remove all queue classes from the parent container */
		  	removeClassByPrefix(document.getElementById("content"), "queue-");
		    
		  	for (var q=0; q < item.dataset.index; q++) {
		  		document.getElementById("content").classList.toggle("queue-" + (q+1));
		  	}

		  })
		});
	}
} );