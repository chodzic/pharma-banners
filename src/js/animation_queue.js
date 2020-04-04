/*
|--------------------------------------------------------------------------
| 	Animation Queue
|--------------------------------------------------------------------------
|
|	Keyframes are stored in the ad.keyframes meta tag in the index.html
|	file. An intervdal is created for each keyframe. An incrementing
|	classname is appended to the #content element. The classnames are used
| 	to trigger CSS animations.
|
*/

var ad_keyframes = document.querySelector('meta[name="ad.keyframes"]').content.split(",");
const queueTimeouts = [];

function createDelay(delay, i) {
	queueTimeouts.push( setTimeout(function(){
    	document.getElementById("content").classList.add('queue-' + (i+1));
	}, delay) );	
}

/* Create timers for each keyframe which will add a classname of queue[index] to #content */
for (i = 0; i < ad_keyframes.length; i++) {
  var key_val = ad_keyframes[i];
  createDelay(key_val, i);
}