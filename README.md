# README #

Create quick pharma HTML display ads quickly with ISI styles and functionality pre-built into a light, easy-to-use template. No dependencies required. Production assets (before content) compile at only 6.2k.

### Getting started ###

* In the index.html file, adjust the 'ad.size' meta data value to match the dimensions of your desired banner. 
* The following sizes come pre-configured in the template: 200x200, 250x250, 300x250, 336x280, 160x600, 300x600, 468x60, 728x90 and 970x90.
* The ISI will render at 1/3 of the banner canvas for all sizes. This value can be adjusted.
* Functionality to expand the ISI to take up 100% of the banner canvas, as well as collapsing it to the default size.
* The ISI has pre-built auto-scroll rules: delay, scroll speed and hard stop.
* Shortcut to reveal the entire ISI below the banner for routing / screenshot purposing.
* Animations are managed via CSS using class names which are added at defined keyframes. In the index.html file, adjust the 'ad.keyframes' meta data to set the keyframes for your animations.


### How do I configure the ISI? ###

* Control the auto-scrolling rules of the ISI using data attributes applied to the #isi element.
* data-autoscroll="true" | ISI autoscrolls on load.
* data-autoscrollspeed="X" | X represents the number of pixels the ISI will scroll per second.
* data-autoscrolldelay="X" | X represents a scroll delay in milliseconds.
* data-autoscrollstop="X" | X represents a hard stop to the autoscroll in milliseconds


### Contact ###

* Carm Hodzic (chodzic@gmail.com)