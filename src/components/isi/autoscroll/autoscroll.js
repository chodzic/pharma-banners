/*
|--------------------------------------------------------------------------
|   ISI Auto Scroll
|--------------------------------------------------------------------------
|
|	Control the auto-scroll properties of the ISI using data attributes on
|   the #isi element.
|
|	To auto-scroll the #isi, add the following data attribute to #isi
|		data-autoscroll="true"
|
|   To set the speed of the auto-scroll, add the following data attribute
|   to #isi. The value will represent the number of pixels the #isi will 
|   move per second. If this value is missing, the default will be 10. 
|   	data-autoscrollspeed="10"
|
|	To set the delay of the auto-scroll, add the following data attribute.
|	This value will represent the delay in milliseconds before the ISI will
|	will begin auto-scrolling. If this value is missing, then the ISI will
|	auto-scroll on load.
|		data-autoscrolldelay="1000"
|
|	To set a hard stop to the auto-scroll after X milliseconds, add the
|	following data attribute. If this value is missing, the auto-scroll 
|	will scroll to the very bottom of the ISI.
|		data-autoscrollstop="15000"
|
*/

let isi = document.querySelector('#isi');

isi_autoscroll = isi.dataset.autoscroll.toLowerCase();
isi_scroll_speed =  isi.dataset.autoscrollspeed ? ( parseFloat(isi.dataset.autoscrollspeed) / 10 ) : 1;
isi_scroll_delay = parseInt(isi.dataset.autoscrolldelay);
isi_scroll_stop = parseInt(isi.dataset.autoscrollstop);
isi_scroll_hover = isi.dataset.isihover.toLowerCase();
scrollpos = 0;


function pauseScroll() {
	isi_scroll = false;
}

function startScroll() {
	isi_scroll = true;
}

function killScroll() {
	pauseScroll();
	clearInterval(autoscroll); 
}

// Will the ISI autoscroll?
if (isi_autoscroll == "true") {

	startScroll();

	// Does the autoscroll stop after X milliseconds?
	if (isi_scroll_stop) {

		// Set a timeout that will trigger a stop to the autoscroll
		setTimeout(function() {
			clearInterval(autoscroll); 
		}, isi_scroll_stop);

	}

	// Set the delay for the autoscroll. If 0 then the ISI will autoscroll on load
	setTimeout(function() {

		// Start the autoscroll
		autoscroll = setInterval(function() {

			if (isi_scroll == false) { 
				// do nothing
			} else {

				// If the ISI has scrolled to the bottom...
				if( isi.scrollTop === (isi.scrollHeight - isi.offsetHeight)) {
					killScroll();
				} else {
					scrollpos = scrollpos + isi_scroll_speed;
					isi.scrollTo({top: scrollpos, behavior: 'smooth'});				
				}
			}
		}, 100);

	}, isi_scroll_delay)

	
	// If the user interacts with the isi, pause the scroll 
	isi.addEventListener("wheel", pauseScroll);
	

	// Should the ISI pause if the user hovers over it?
	if (isi_scroll_hover == "pause") {
		isi.addEventListener("mouseover", pauseScroll);
		isi.addEventListener("mouseout", startScroll);		
	}

	// If user clicks any part of the banner, stop the autoscroll
	document.querySelector('#content').addEventListener("mousedown", killScroll);

}