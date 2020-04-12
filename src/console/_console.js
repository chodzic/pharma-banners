import './canvas.scss';		/* Canvas styles */
import './icons.scss';		/* Icons */
import './shell.js';
import './properties/properties';
import './clicktags/clicktags';
import './timeline/timeline';
import './actions/actions';
import './shortcuts/shortcuts';

let isi = document.querySelector('#isi');

if (isi) {
	require('./isi_rules/isi_rules');
}