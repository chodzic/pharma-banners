
let panel_left = document.querySelector('.panel-left');
let debug_isi = document.querySelector('#isi');
let debug_legal = document.querySelector('#legal');
let debug_isiexpand = (document.querySelector("[data-isi-expand]")) ? "TRUE" : "FALSE";


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




debug_panel_props = "<div class='debug-panel-header'>ISI Rules</div><div class='debug-panel-content col-50'><div class='prop'><label>Autoscroll:</label><div class='val'>"+debug_isi_autoscroll+"</div></div><div class='prop'><label>Speed:</label><div class='val'>"+debug_isi_scroll_speed+" <span class='muted'>px per second</span></div></div><div class='prop'><label>Delay:</label><div class='val'>"+debug_isi_scroll_delay+" <span class='muted'>ms</span></div></div><div class='prop'><label>Hard Stop:</label><div class='val'>"+debug_isi_scroll_stop+" <span class='muted'>ms</span></div></div><div class='prop'><label>On Hover:</label><div class='val'>"+debug_isi_scroll_hover+"</div></div><div class='prop'><label>Size:</label><div class='val'>"+banner_size+" <span class='muted'>%</span></div></div><div class='prop'><label>Expand:</label><div class='val'>"+debug_isiexpand+"</div></div></div>";


panel_left.innerHTML += debug_panel_props;