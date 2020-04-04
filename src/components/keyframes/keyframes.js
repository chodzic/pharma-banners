/*
|--------------------------------------------------------------------------
| 	Timeline / Animation Queue
|--------------------------------------------------------------------------
|
|	Keyframes are stored in the ad.keyframes meta tag in the index.html
|	file. An intervdal is created for each keyframe. An incrementing
|	classname is appended to the #content element. The classnames are used
| 	to trigger CSS animations.
|
*/

import keyframe_queues from './keyframes.scss';

var meta_timeline = document.querySelector('meta[name="ad.keyframes"]');

if (meta_timeline) {

	var ad_keyframes = meta_timeline.content.split(",");
	const queueTimeouts = [];

	function createDelay(delay, i) {
		queueTimeouts.push( setTimeout(function(){
	    	document.getElementById("content").classList.add('queue-' + (i+1));
		}, delay) );	
	}

	/* Create timers for each keyframe which will add a classname of queue[index] to #content */
	for (var i = 0; i < ad_keyframes.length; i++) {
	  var key_val = ad_keyframes[i];
	  createDelay(key_val, i);
	}

}