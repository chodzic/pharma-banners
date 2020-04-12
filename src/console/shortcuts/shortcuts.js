let el_body = document.querySelector('body');

window.onkeydown = function(e) {
  if (e.keyCode == 32 && e.target == document.body) {
	el_body.classList.toggle("debug-panel-hide");
    e.preventDefault();
  }
};