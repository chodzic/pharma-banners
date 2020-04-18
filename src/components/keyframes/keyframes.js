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


function startKeyframe() {

	/* Get keyframes */
	var meta_timeline = document.querySelector('meta[name="ad.keyframes"]');


	/* If keyframes exist, then create each keyframe timeout */
	if (meta_timeline) {

		var ad_keyframes = meta_timeline.content.split(",");
		const queueTimeouts = [];

		/* Create each keyframe timeout. */
		function createDelay(delay, i) {
			queueTimeouts.push( setTimeout(function(){
				/* Add the .queue-[index] class name to the #content element. */
		    	document.getElementById("content").classList.add('queue-' + (i+1));
			}, delay) );	
		}

		/* Create timers for each keyframe which will add a classname of queue-[index] to #content */
		for (var i = 0; i < ad_keyframes.length; i++) {
		  var key_val = ad_keyframes[i];
		  createDelay(key_val, i);
		}

		startKeyframe();
		
	}

}