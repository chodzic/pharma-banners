/* Call the main styles */
import style 		from './main.scss';

/* Set class names to the main container. These class names will help style the banner,
position elements, and allow specific functionality to fire. */
import setClasses 	from './css_classes/css_classes.js';

/* Set the keyframe durations from the values stored in the ad.keyframes meta tag. */
import keyframes 	from './keyframes/keyframes.js';


/* 	Call the ISI component if the ISI exists. IMPORTANT: Give the ISI parent an ID of 'legal' */
if ( document.getElementById("legal") ) {
	const scroll = require("./isi/isi.js");
}

/* If the mode is NOT 'production', then include the console interface. */
if (process.env.NODE_ENV !== 'production') {
	const debug = require("../console/_console.js");
}