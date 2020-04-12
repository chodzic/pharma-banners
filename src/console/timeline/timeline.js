import "./timeline.scss";


let panel_right = document.querySelector('.wrapper-timeline');

var debug_panel_actions = "<div class='debug-panel-header'>Timeline</div><div class='debug-panel-content'><div class='action action-timer'><div class='timer'><span id='timeline-bar'></span></div><div id='debug-keyframes'></div></div></div>";

panel_right.innerHTML = debug_panel_actions;



/* Debug mode to cycle through keyframes */
function removeClassByPrefix(el, prefix) {
    var regx = new RegExp('\\b' + prefix + '.-*?\\b', 'g');
    el.className = el.className.replace(regx, '');
    return el;
}


function timelineControls() {

	/* Kill all animation queues */
	var lastTimeout = setTimeout(";");
	for (var i = 0 ; i < lastTimeout ; i++) {
	    clearTimeout(i); 
	}

	/* Remove all queue classes from the parent */
	removeClassByPrefix(document.getElementById("content"), "queue-");

}

/* Get all keyframes from meta data */
var ad_keyframes = document.querySelector('meta[name="ad.keyframes"]').content.split(",");

/* Build timeline */
var keyframes_html = "";
for (i = 0; i < ad_keyframes.length; i++) {
		var key_val = ad_keyframes[i];
		var key_pos = (key_val / 15000) * 100;;
		keyframes_html += "<span class='keyframe' style='left: "+key_pos+"%' data-index='"+(i+1)+"' data-time='"+key_val+"'>"+key_val+"</span>";
}

var debug_keyframes = document.getElementById("debug-keyframes");
var debug_timer_bar = document.getElementById("timeline-bar");
debug_keyframes.innerHTML = keyframes_html;


var timeline_interval = 10;
var timeline_current = 0;
var timeline = setInterval(function() {

	timeline_current = timeline_current + timeline_interval;
	if (timeline_current > 15000) {
		clearTimeout(timeline);
	} else {
		var timeline_progress = (timeline_current/15000)*100;
		debug_timer_bar.style.width = timeline_progress + "%";
	}

},timeline_interval);


/* Click listener for each timeline queue */
document.querySelectorAll('.keyframe').forEach(item => {
  item.addEventListener('click', event => {

  	/* Stops timer */
  	clearInterval(timeline);

  	/* Move timeline to keyframe*/
  	debug_timer_bar.style.width = event.target.style.left

  	/* Select the keyframe */
  	let all_keyframes = document.getElementsByClassName('keyframe');

	for (var i = 0; i < all_keyframes.length; i++) {
	   all_keyframes[i].classList.remove('on');
	}
  	event.target.classList.add("on");

  	/* Remove all queue classes from the parent container */
  	removeClassByPrefix(document.getElementById("content"), "queue-");
    
  	for (var q=0; q < item.dataset.index; q++) {
  		document.getElementById("content").classList.toggle("queue-" + (q+1));
  	}

  })
});