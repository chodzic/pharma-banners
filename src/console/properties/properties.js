/* TODO: Add the following properties:
|  
|  Assets:
|  Weight:
|
*/


let panel_left = document.querySelector('.panel-left');

/* 
|	Get properties
*/
var debug_banner_width = el_content.offsetWidth;
var debug_banner_height = el_content.offsetHeight;
var ad_keyframes = document.querySelector('meta[name="ad.keyframes"]').content.split(",");

var prop_array = [
	["Width", el_content.offsetWidth, "px"],
	["Height", el_content.offsetHeight, "px"],
	["Keyframes",ad_keyframes.length]
];

var prop_html = "<div class='debug-panel-header'>Properties</div><div class='debug-panel-content col-2'>";

for(i=0; i<prop_array.length;i++) {
	if (prop_array[i][2]) {
		muted_text = "<span class='muted'>"+prop_array[i][2]+"</span>";
	} else {
		muted_text = "";
	}
	prop_html += "<div class='prop'><label>"+prop_array[i][0]+":</label><div class='val'>"+prop_array[i][1]+" "+muted_text+"</div></div>";
}

prop_html += "</div>";

panel_left.innerHTML += prop_html;