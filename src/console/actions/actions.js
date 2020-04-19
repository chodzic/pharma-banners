import "./actions.scss";

let panel_right = document.querySelector('.wrapper-actions');
let isi = document.querySelector('#isi');


/* 
|	Generate HTML for the Action Panel
*/

var isi_actions = isi ? "<div class='action'><label>Show ISI:</label><div class='input off onoff' data-toggleclass='isi-show' data-toggleclasstarget='body'></div></div><div class='action action-isi-fpo'><label>Show ISI FPO Message:</label><div class='input off onoff' data-toggleclass='isi-show-fpo' data-toggleclasstarget='body'></div></div>" : "";

var debug_panel_actions = "<div class='debug-panel-header'>Actions</div><div class='debug-panel-content action-options'>"+isi_actions+"<div class='note'>Press spacebar to hide console.</div></div>";

panel_right.innerHTML = debug_panel_actions;


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


if (isi) {

	let isi_placeholder = document.createElement('div');
	isi_placeholder.classList.add("isi-fpo");
	isi_placeholder.innerHTML = "<span>The ISI has been repositioned below the banner's canvas for routing purposes.</span>";

	let isi_properties = document.createElement('div');
	isi_properties.classList.add("isi-properties");

	var el_isi = document.querySelector(".isi-wrapper");
	var el_isi_h2 = document.querySelector(".isi-wrapper h2");
	var el_isi_h3 = document.querySelector(".isi-wrapper h3");
	var el_isi_p = document.querySelector(".isi-wrapper p");
	var el_isi_ul = document.querySelector(".isi-wrapper ul");
	var el_isi_li = document.querySelector(".isi-wrapper ul li");
	var el_isi_a = document.querySelector(".isi-wrapper .link");

	function getElComputedStyle(el,prop) {
		return window.getComputedStyle(el, null).getPropertyValue(prop);
	}


	function rgb2hex(rgb) {
	    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	    function hex(x) {
	        return ("0" + parseInt(x).toString(16)).slice(-2);
	    }
	    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}


	var prop_array = [
		["General", 
			[
				[ "font-family", getElComputedStyle(el_isi,"font-family") ],
				[ "font-size", getElComputedStyle(el_isi,"font-size") ],
				[ "font-weight", getElComputedStyle(el_isi,"font-weight") ],
				[ "color", rgb2hex(getElComputedStyle(el_isi,"color")) ]
			]
		],
		["Headline &lt;h2>", 
			[
				[ "font-family", getElComputedStyle(el_isi_h2,"font-family") ],
				[ "font-size", getElComputedStyle(el_isi_h2,"font-size") ],
				[ "font-weight", getElComputedStyle(el_isi_h2,"font-weight") ],
				[ "line-height", getElComputedStyle(el_isi_h2,"line-height") ],
				[ "color", rgb2hex(getElComputedStyle(el_isi_h2,"color")) ]
			] 
		],
		["Subhead &lt;h3>", 
			[
				[ "font-family", getElComputedStyle(el_isi_h3,"font-family") ],
				[ "font-size", getElComputedStyle(el_isi_h3,"font-size") ],
				[ "font-weight", getElComputedStyle(el_isi_h3,"font-weight") ],
				[ "line-height", getElComputedStyle(el_isi_h2,"line-height") ],
				[ "color", rgb2hex(getElComputedStyle(el_isi_h2,"color")) ]
			] 
		],
		["Paragraph &lt;p>", 
			[
				[ "font-family", getElComputedStyle(el_isi_p,"font-family") ],
				[ "font-size", getElComputedStyle(el_isi_p,"font-size") ],
				[ "font-weight", getElComputedStyle(el_isi_p,"font-weight") ],
				[ "line-height", getElComputedStyle(el_isi_p,"line-height") ],
				[ "color", rgb2hex(getElComputedStyle(el_isi_p,"color")) ]
			] 
		],
		["List Item &lt;li>", 
			[
				[ "font-family", getElComputedStyle(el_isi_li,"font-family") ],
				[ "font-size", getElComputedStyle(el_isi_li,"font-size") ],
				[ "font-weight", getElComputedStyle(el_isi_li,"font-weight") ],
				[ "line-height", getElComputedStyle(el_isi_li,"line-height") ],
				[ "color", rgb2hex(getElComputedStyle(el_isi_li,"color")) ],
				[ "padding-left", getElComputedStyle(el_isi_ul,"padding-left") ]
			] 
		],
		["Link", 
			[
				[ "font-family", getElComputedStyle(el_isi_a,"font-family") ],
				[ "font-size", getElComputedStyle(el_isi_a,"font-size") ],
				[ "font-weight", getElComputedStyle(el_isi_a,"font-weight") ],
				[ "color", rgb2hex(getElComputedStyle(el_isi_a,"color")) ]
			] 
		]
	];




	var prop_html = "";
	for (var i=0; i<prop_array.length; i++) {
		prop_html += "<div class='element'><div class='el-type'>"+prop_array[i][0]+"</div>";

		for (var p=0; p<(prop_array[i][1].length);p++) {

			prop_html += "<div class='prop-wrap'><div class='selector'>"+prop_array[i][1][p][0]+":</div><div class='value'>"+prop_array[i][1][p][1]+"</div></div>"
		}
		prop_html += "</div>";
	}

	isi_properties.innerHTML = prop_html;



	document.querySelector('[data-toggleclass=isi-show]').addEventListener('click', function(e){
		let isi = document.querySelector("#isi");
		isi_placeholder.style.height = isi.offsetHeight + "px";
		isi_placeholder.style.width = isi.offsetWidth + "px";
		isi.insertBefore(isi_placeholder, isi.firstElementChild);
		isi.insertBefore(isi_properties, isi.firstElementChild);
	});


}