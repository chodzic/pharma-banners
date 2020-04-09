let panel_left = document.querySelector('.panel-left');

console.log(panel_left);

/* 
|	Get properties
*/
var debug_banner_width = el_content.offsetWidth;
var debug_banner_height = el_content.offsetHeight;



debug_panel_props = "<div class='debug-panel-header'>Properties</div><div class='debug-panel-content col-50'><div class='prop'><label>Width:</label><div class='val'>"+el_content.offsetWidth+" <span class='muted'>px</span></div></div><div class='prop'><label>Height:</label><div class='val'>"+el_content.offsetHeight+" <span class='muted'>px</span></div></div></div>";


panel_left.innerHTML += debug_panel_props;
