import './_isi_show.scss';		/* Timeline styles */

/* Expand the ISI and position it below the banner by pressing CTRL+ALT+I */

document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "i") {  // case sensitive
		document.getElementById("content").classList.toggle("isi-show");
    }
} );