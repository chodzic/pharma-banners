let panel_right = document.querySelector('.wrapper-actions');

/* 
|	Generate HTML for the Action Panel
*/
debug_panel_actions = "<div class='debug-panel-header'>Actions</div><div class='debug-panel-content action-options'><div class='action'><label>Show ISI:</label><div class='input off onoff' data-toggleclass='isi-show' data-toggleclasstarget='#content'></div></div><div class='action'><label>Show Background Pattern:</label><div class='input onoff' data-toggleclass='debug-hide-background' data-toggleclasstarget='body'></div></div>";

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