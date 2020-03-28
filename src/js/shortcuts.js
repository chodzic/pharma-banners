/*
|--------------------------------------------------------------------------
|   Shortcuts
|--------------------------------------------------------------------------
|
|	Keyboard shortcuts to trigger specific functionality for testing and 
|	routing purposes.
|
*/


/* Expand the ISI and position it below the banner by pressing CTRL+ALT+I */

document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "i") {  // case sensitive
		document.getElementById("content").classList.toggle("isi-show");
    }
} );