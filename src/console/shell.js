
/* 
|	Get elements
*/
let el_content = document.getElementById("content");
let el_isi = document.querySelector(".isi-wrapper");


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
|	Create debug panel for banner actions
*/
var debug_panel_actions = document.createElement("div");
debug_panel_actions.setAttribute("id", "debug-panel");
debug_panel_actions.classList.add("panel-right");
document.body.insertBefore(debug_panel_actions, el_banner_wrapper);
debug_panel_actions.innerHTML += "<div class='wrapper-timeline'></div><div class='wrapper-actions'></div>";


/*
|	Set fixed width of ISI
*/

var isi_width = el_isi.offsetWidth;
el_isi.style.width = el_isi.offsetWidth - 20 + "px";
console.log(isi_width);