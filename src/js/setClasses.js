/*
|--------------------------------------------------------------------------
|   Set Classes & Values
|--------------------------------------------------------------------------
|
|	Detect and set classnames and values of elements.
|
*/



/*  The width and height of banners will be set by the ad.size meta tag found
	in the index.html file. Two class names will be added to the #content
	element to represent the width and height of the banner. The classnames 
	will follow this naming structure:
		h[val] and w[val]

	Example for a 300x250 banner:
		.w300 .h250

	Use those classnames to target specific banner sizes and style elements
	within those sizes appropriately.

*/

var ad_size = document.querySelector('meta[name="ad.size"]').content.split(",");
var ad_width = ad_size[0].split("=")[1];
var ad_height = ad_size[1].split("=")[1];
el_content = document.getElementById("content");
el_content.classList.add("w" + ad_width);
el_content.classList.add("h" + ad_height);


/*  Sets the overall width and height of the banner based on the meta data value. */
el_content.style.height = ad_height + "px";
el_content.style.width = ad_width + "px";