/*
|--------------------------------------------------------------------------
|   Expand ISI
|--------------------------------------------------------------------------
|
|	Allow the user to expand the ISI to take up 100% of the canvas by 
|	clicking an element. While expanded, the user can restore the ISI
| 	to it's initial height.
|
*/

function expandISI() {
	document.getElementById("content").classList.toggle("isi-expand");
}

document.querySelector('.expand').addEventListener("click", expandISI);