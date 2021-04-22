
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



var prop_array = [
	["Autoscroll", debug_isi_autoscroll],
	["Speed", debug_isi_scroll_speed, "px per second"],
	["Delay", debug_isi_scroll_delay, "ms"],
	["Hard Stop", debug_isi_scroll_stop, "ms"],
	["On hover", debug_isi_scroll_hover],
	["Size", banner_size, "%"],
	["Expand",debug_isiexpand]
];

var prop_html = "<div class='debug-panel-header'>ISI RULES</div><div class='debug-panel-content col-2'>";

for(i=0; i<prop_array.length;i++) {
	
	if (prop_array[i][2]) {
		muted_text = "<span class='muted'>"+prop_array[i][2]+"</span>";
	} else {
		muted_text = "";
	}
	
	prop_html += "<div class='prop'><label>"+prop_array[i][0]+":</label><div class='val'>"+prop_array[i][1]+" "+muted_text+"</div></div>";

	/* If autoscroll is FALSE, then doesn't display rest of rules */

	if (prop_array[0][1] == "FALSE") {
		break;
	} 

}

prop_html += "</div>";


panel_left.innerHTML += prop_html;