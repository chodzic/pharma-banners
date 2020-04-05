import './canvas.scss';		/* Canvas styles */

var el_content = document.getElementById("content");
var el_body = document.body;

var debug_banner_width = el_content.offsetWidth;
var debug_banner_height = el_content.offsetHeight;
console.log(debug_banner_width);

var banner_wrapper = document.createElement("div");
banner_wrapper.setAttribute("id", "debug-banner-wrapper");
document.body.insertBefore(banner_wrapper, el_content);
var el_banner_wrapper = document.getElementById("debug-banner-wrapper");
el_banner_wrapper.style.width = debug_banner_width + "px";
el_banner_wrapper.style.height = debug_banner_height + "px";

el_banner_wrapper.innerHTML = "<span id='debug-banner-width'>"+debug_banner_width+"</span><span id='debug-banner-height' style='line-height:"+ debug_banner_height +"px;' >"+debug_banner_height+"</span>" + el_banner_wrapper.innerHTML;