import './canvas.scss';		/* Canvas styles */

var el_content = document.getElementById("content");
var el_body = document.body;

var debug_banner_width = el_content.offsetWidth;
var debug_banner_height = el_content.offsetHeight;

var banner_wrapper = document.createElement("div");
banner_wrapper.setAttribute("id", "debug-banner-wrapper");
document.body.insertBefore(banner_wrapper, el_content);
var el_banner_wrapper = document.getElementById("debug-banner-wrapper");
el_banner_wrapper.style.width = debug_banner_width + "px";
el_banner_wrapper.style.height = debug_banner_height + "px";

el_banner_wrapper.innerHTML = "<span id='debug-banner-width'>"+debug_banner_width+"</span><span id='debug-banner-height' style='line-height:"+ debug_banner_height +"px;' >"+debug_banner_height+"</span>";

var debug_panel = document.createElement("div");
debug_panel.setAttribute("id", "debug-panel");
document.body.insertBefore(debug_panel, el_banner_wrapper);

let debug_isi = document.querySelector('#isi');
let debug_legal = document.querySelector('#legal');

var debug_isi_autoscroll = debug_isi.dataset.autoscroll;
var debug_isi_scroll_speed =  debug_isi.dataset.autoscrollspeed;
var debug_isi_scroll_hover =  debug_isi.dataset.isihover;
var debug_isi_scroll_delay = parseInt(debug_isi.dataset.autoscrolldelay);
var debug_isi_scroll_stop = parseInt(debug_isi.dataset.autoscrollstop);

if (el_content.classList.contains("size-tall") || el_content.classList.contains("size-square")) {
	var banner_size =  Math.floor(( debug_legal.offsetHeight / el_content.offsetHeight ) * 100);
} else {
	var banner_size =  Math.floor(( debug_legal.offsetWidth / el_content.offsetWidth ) * 100);
}

debug_panel.innerHTML = "<div class='debug-panel-header'>Properties</div><div class='debug-panel-content'><div class='prop'><label>Width:</label><div class='val'>"+el_content.offsetWidth+"<span class='muted'>px</span></div></div><div class='prop'><label>Height:</label><div class='val'>"+el_content.offsetHeight+"<span class='muted'>px</span></div></div></div><div class='debug-panel-header'>ISI Rules</div><div class='debug-panel-content'><div class='prop'><label>Autoscroll:</label><div class='val'>"+debug_isi_autoscroll+"</div></div><div class='prop'><label>Speed:</label><div class='val'>"+debug_isi_scroll_speed+"<span class='muted'>px per second</span></div></div><div class='prop'><label>Delay:</label><div class='val'>"+debug_isi_scroll_delay+"<span class='muted'>ms</span></div></div><div class='prop'><label>Hard Stop:</label><div class='val'>"+debug_isi_scroll_stop+"<span class='muted'>ms</span></div></div><div class='prop'><label>On Hover:</label><div class='val'>"+debug_isi_scroll_hover+"</div></div><div class='prop'><label>Size:</label><div class='val'>"+banner_size+"<span class='muted'>%</span></div></div></div>";


var clicktag_i = 1;
var found_clicktag = true;
var clicktag_html = "";
do {
	try {
 	   	var clicktag_val = eval(`clickTag${clicktag_i}`);
 	   	clicktag_html += "<div class='prop'><label>Clicktag"+clicktag_i+":</label><div class='val'>"+clicktag_val+"</div></div>";
 	   	clicktag_i++;
	} catch (e) {
   	 	found_clicktag = false;
	}	
}
while (found_clicktag == true);

debug_panel.innerHTML += "<div class='debug-panel-header'>ClickTags</div><div class='debug-panel-content'>"+clicktag_html+"</div>";