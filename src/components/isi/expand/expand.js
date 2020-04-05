/*
|--------------------------------------------------------------------------
|   Expand ISI
|--------------------------------------------------------------------------
|
|	Allow the user to expand the ISI to take up 100% of the canvas by
| 	clicking any element with an .expand class. While expanded, the user 
|	can restore the ISI to it's initial height.
|
|	To add the expand icon to the canvas, give the '#legal .header' element
|	a data attribute of data-isi-expand="true". The expand icon will be 
|	injected into this element, along with a click listener to expand the ISI.
|
*/

import isi_expand from './expand.scss';

/*
|	Detect whether to inject the expand icon to the canvas.
*/

var expand_parent = document.querySelectorAll('[data-isi-expand]');

if (expand_parent.length) {
	
	/* inject the expand icon */
	expand_parent[0].innerHTML += "<span class='expand'></span>";

	/* Add classname to parent. */
	document.getElementById("content").classList.add("has-isi-expand");

	/* Function to expand the ISI */
	function expandISI() {
		document.getElementById("content").classList.toggle("isi-expand");
	}

	/* Expand icon click listener */

	document.addEventListener('click',function(e){
    	if(e.target && e.target.classList== 'expand'){
          expandISI();
     	}
 	});

	//document.querySelector('.expand').addEventListener("click", expandISI);

} else {

	/* Add classname to parent. */
	document.getElementById("content").classList.add("no-isi-expand");


}