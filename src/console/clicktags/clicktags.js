import "./clicktags.scss";

let panel_left = document.querySelector('.panel-left');

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

var debug_panel_props = "<div class='debug-panel-header'>ClickTags</div><div class='debug-panel-content clicktag-wrapper'>"+clicktag_html+"</div>";


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

panel_left.innerHTML += debug_panel_props;