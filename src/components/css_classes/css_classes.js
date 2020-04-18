/*
|--------------------------------------------------------------------------
|   Set Classes & Values
|--------------------------------------------------------------------------
|
|	Detect and set classnames to the parent container. These class names
|	will be used to conditionally style the banner.
|
*/

el_content = document.getElementById("content");
el_legal = document.getElementById("legal");
el_legal_header = document.querySelector("#legal .header");
el_legal_footer = document.querySelector("#legal .footer");
el_isi = document.getElementById("isi");
el_isi_expand = document.querySelector("#legal .header .expand");



/*
| 	The width and height of banners will be set by the ad.size meta tag found
|	in the index.html file. Two class names will be added to the #content
|	element to represent the width and height of the banner. The classnames 
|	will follow this naming structure:
|		h[val] and w[val]
|
|	Example for a 300x250 banner:
|		.w300 .h250
|
|	Use those classnames to target specific banner sizes and style elements
|	within those sizes appropriately.
|
*/

var ad_size = document.querySelector('meta[name="ad.size"]').content.split(",");
var ad_width = ad_size[0].split("=")[1];
var ad_height = ad_size[1].split("=")[1];
el_content.classList.add("w" + ad_width);
el_content.classList.add("h" + ad_height);


/*  Sets the overall width and height of the banner based on the ad.size meta data value. */
el_content.style.height = ad_height + "px";
el_content.style.width = ad_width + "px";




/*
| 	Determine the aspect ratio of the banner and then categorize it as either
|	tall, square or wide. The class name .size-[category] will be added to the
|	#content element.
*/

ad_aspect_ratio = ad_width / ad_height;

if (ad_aspect_ratio < 0.8) {
	size_category = "tall";
} else if (ad_aspect_ratio >= 0.8 && ad_aspect_ratio <= 2) {
	size_category = "square";
} else {
	size_category = "wide";
}

el_content.classList.add("size-" + size_category);;



// If an ISI is detected, then give the parent container a classname of .has-isi
if (el_isi) {
	el_content.classList.add("has-isi");
} else {
	el_content.classList.add("no-isi");
}


// if the legal header is detected, then give the parent container a classname of .has-legal-header
if (el_legal_header) {
	el_content.classList.add("has-legal-header");
} else {
	el_content.classList.add("no-legal-header");
}


// if the legal footer is detected, then give the parent container a classname of .has-legal-footer
if (el_legal_footer) {
	el_content.classList.add("has-legal-footer");
} else {
	el_content.classList.add("no-legal-footer");
}