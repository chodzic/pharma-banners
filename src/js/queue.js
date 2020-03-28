/*
|--------------------------------------------------------------------------
| Animation Queue
|--------------------------------------------------------------------------
|
*/


var ad_keyframes = document.querySelector('meta[name="ad.keyframes"]').content.split(",");

function createDelay(delay, i) {
	setTimeout(function(){
    	document.getElementById("content").classList.add('queue' + (i+1));
	}, delay);	
}

/* Create timers for each keyframe which will add a classname of queue[index] to #content */
for (i = 0; i < ad_keyframes.length; i++) {
  var key_val = ad_keyframes[i];
  createDelay(key_val, i);
}