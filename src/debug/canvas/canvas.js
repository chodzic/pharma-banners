import './canvas.scss';		/* Canvas styles */


/* 
|	Get elements
*/
let el_body = document.body;
let el_content = document.getElementById("content");
let debug_isi = document.querySelector('#isi');
let debug_legal = document.querySelector('#legal');
let debug_isiexpand = (document.querySelector("[data-isi-expand]")) ? "TRUE" : "FALSE";


/* 
|	Get properties
*/
var debug_banner_width = el_content.offsetWidth;
var debug_banner_height = el_content.offsetHeight;


/* 
|	Create debug canvas
*/
var banner_wrapper = document.createElement("div");
banner_wrapper.setAttribute("id", "debug-banner-wrapper");
document.body.insertBefore(banner_wrapper, el_content);
var el_banner_wrapper = document.getElementById("debug-banner-wrapper");


/* 
|	Create debug panel for banner properties
*/
var debug_panel_props = document.createElement("div");
debug_panel_props.setAttribute("id", "debug-panel");
debug_panel_props.classList.add("panel-left");
document.body.insertBefore(debug_panel_props, el_banner_wrapper);



/* 
|	Get ISI properties
*/
var debug_isi_autoscroll = debug_isi.dataset.autoscroll;
var debug_isi_scroll_speed =  debug_isi.dataset.autoscrollspeed;
var debug_isi_scroll_hover =  debug_isi.dataset.isihover;
var debug_isi_scroll_delay = parseInt(debug_isi.dataset.autoscrolldelay);
var debug_isi_scroll_stop = parseInt(debug_isi.dataset.autoscrollstop);



/* 
|	Get ISI size compared to banner canvas
*/
if (el_content.classList.contains("size-tall") || el_content.classList.contains("size-square")) {
	var banner_size =  Math.floor(( debug_legal.offsetHeight / el_content.offsetHeight ) * 100);
} else {
	var banner_size =  Math.floor(( debug_legal.offsetWidth / el_content.offsetWidth ) * 100);
}



/* 
|	Generate HTML for the Prop Panel
*/
debug_panel_props.innerHTML = "<div class='debug-panel-header'>Properties</div><div class='debug-panel-content'><div class='prop'><label>Width:</label><div class='val'>"+el_content.offsetWidth+" <span class='muted'>px</span></div></div><div class='prop'><label>Height:</label><div class='val'>"+el_content.offsetHeight+" <span class='muted'>px</span></div></div></div><div class='debug-panel-header'>ISI Rules</div><div class='debug-panel-content'><div class='prop'><label>Autoscroll:</label><div class='val'>"+debug_isi_autoscroll+"</div></div><div class='prop'><label>Speed:</label><div class='val'>"+debug_isi_scroll_speed+" <span class='muted'>px per second</span></div></div><div class='prop'><label>Delay:</label><div class='val'>"+debug_isi_scroll_delay+" <span class='muted'>ms</span></div></div><div class='prop'><label>Hard Stop:</label><div class='val'>"+debug_isi_scroll_stop+" <span class='muted'>ms</span></div></div><div class='prop'><label>On Hover:</label><div class='val'>"+debug_isi_scroll_hover+"</div></div><div class='prop'><label>Size:</label><div class='val'>"+banner_size+" <span class='muted'>%</span></div></div><div class='prop'><label>Expand:</label><div class='val'>"+debug_isiexpand+"</div></div></div>";

var clicktag_i = 1;
var found_clicktag = true;
var clicktag_html = "";
do {
	try {
 	   	var clicktag_val = eval(`clickTag${clicktag_i}`);
 	   	clicktag_html += "<div class='prop debug-clickTag"+clicktag_i+"'><label>Clicktag"+clicktag_i+":</label><div class='val'><a href='"+clicktag_val+"' target='_blank'>"+clicktag_val+"</a></div></div>";
 	   	clicktag_i++;
	} catch (e) {
   	 	found_clicktag = false;
	}	
}
while (found_clicktag == true);

debug_panel_props.innerHTML += "<div class='debug-panel-header'>ClickTags</div><div class='debug-panel-content'>"+clicktag_html+"</div>";


var onclick_els = document.querySelectorAll('[onclick]');

for(var o=0; o < onclick_els.length; o++) {
	onclick_els[o].addEventListener("mouseenter", function(event) {
		var el_attr = event.target.getAttribute("onclick")
		var onclick_pos = el_attr.search("clickTag");
		var onclick_val = el_attr.slice(onclick_pos,onclick_pos+9);
		var tag_el = document.querySelectorAll('.debug-'+onclick_val);
		tag_el[0].classList.add("over");
	});

	onclick_els[o].addEventListener("mouseleave", function(event) {
		document.querySelectorAll('.prop.over')[0].classList.remove("over");
	});
}




/* 
|	Create debug panel for banner actions
*/
var debug_panel_actions = document.createElement("div");
debug_panel_actions.setAttribute("id", "debug-panel");
debug_panel_actions.classList.add("panel-right");
document.body.insertBefore(debug_panel_actions, el_banner_wrapper);



/* 
|	Generate HTML for the Action Panel
*/
debug_panel_actions.innerHTML = "<div class='debug-panel-header'>Timeline</div>";
debug_panel_actions.innerHTML += "<div class='debug-panel-content'><div class='action action-timer'><div class='timer'><span id='timeline-bar'></span></div><div id='debug-keyframes'></div></div></div>";
debug_panel_actions.innerHTML += "<div class='debug-panel-header'>Actions</div><div class='debug-panel-content'><div class='action'><label>Show ISI:</label><div class='input off onoff' data-toggleclass='isi-show' data-toggleclasstarget='#content'></div></div><div class='action'><label>Show Background Pattern:</label><div class='input onoff' data-toggleclass='debug-hide-background' data-toggleclasstarget='body'></div></div>";


var onoff = document.getElementsByClassName('onoff');

for (var i = 0; i < onoff.length; i++) {
	onoff[i].addEventListener('click',function(e){
		var onoff_classname = e.target.getAttribute("data-toggleclass");
		var onoff_target = e.target.getAttribute("data-toggleclasstarget");
		e.target.classList.toggle("off");
		var debug_onoff_target = document.querySelector(onoff_target);
		debug_onoff_target.classList.toggle(onoff_classname);
	});
}





window.onkeydown = function(e) {
  if (e.keyCode == 32 && e.target == document.body) {
	el_body.classList.toggle("debug-panel-hide");
    e.preventDefault();
  }
};



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
		keyframes_html += "<span style='left: "+key_pos+"%' data-index='"+(i+1)+"' data-time='"+key_val+"'>"+key_val+"</span>";
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