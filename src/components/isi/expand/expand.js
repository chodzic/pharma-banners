/*
|--------------------------------------------------------------------------
|   Expand ISI
|--------------------------------------------------------------------------
|
|	Allow the user to expand the ISI to take up 100% of the canvas by
| 	clicking any element with an .expand class. While expanded, the user 
|	can restore the ISI to it's initial height.
|
*/

import isi_expand from './expand.scss';

function expandISI() {
	document.getElementById("content").classList.toggle("isi-expand");
}

document.querySelector('.expand').addEventListener("click", expandISI);