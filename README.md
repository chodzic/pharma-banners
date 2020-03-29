# README #

Create quick pharma HTML display ads quickly with ISI styles and functionality pre-built into a light, easy-to-use template. No dependencies required. Production assets (before content) compile at only 6.2k. It is encouraged to use CSS animations for these banners. No javascript is required. Javascript is only used to 1) listen for keyframes (by adding classes to the parent container) and 2) manage the ISI logic (ie: does it auto-scroll? for how long? at what speed? is there a delay? and so on).


### STEP 1: Preparing the canvas ###

The first step is to prepare your banner canvas. You do so by adjusting the ad.size meta data tag in the index.html file.

```html
<meta name="ad.size" content="width=300,height=250">
```

Adjust those values to the actual dimensions of your banner. The template will read those dimensions and adjust the size of the banner accordingly. The width and height values are converted to classnames and are added to the parent container. The classes are strctured as follows:

```
.w300
.h250
```

These classes are used to manage ISI positioning. For example: ISIs for 300x250 banners typically appear at the bottom of the banner. On 728x90 sizes, the ISIs are typically on the right.

The following sizes are pre-built within the banner.

* 200x200
* 250x250
* 300x250
* 336x280
* 160x600
* 300x600
* 468x60
* 728x90
* 970x90



### STEP 2: Animation keyframes ###

Animations are encouraged to be handled entirely through CSS transitions. Keyframes are used to trigger these animations. To trigger these animation, class names are dynamically added to the parent container at specific keyframes. Keyframe durations are stored in the ad.keyframe meta data in the index.html file.

```html
<meta name="ad.keyframes" content="4000,8000,12000">
```

The meta tag above contains three keyframes separated by commas. At 4000 milliseconds (or, 4 seconds), the classname 'queue1' will be added to the parent container. At 8 seconds, 'queue2' will be added to the parent container. At 12 seconds, the final class name 'queue3' will be added.

You can now target all elements in the banner to animate at any of those keyframes.


### STEP 3: Configure the ISI (Optional) ###

An ISI container is pre-built into the template. By default, the ISI is built to take up 1/3 of the canvas. To adjust this value, change the $isi-size variable in the variables.scss file. For horizontal banners (ie: 728x90), the ISI appears on the right side of the canvas. For vertical or square banners (ie: 300x250), the ISI appears at the bottom.

##### Auto-scroll Functionality #####

The ISI has pre-built functionality: 

* *Auto scroll* - The ISI will autoscroll.
* *Scroll speed* - The speed of the autoscroll.
* *Scroll delay* - Delaying the autoscroll.
* *Scroll hard stop* - Stopping the autoscroll.

You can adjust these values by adding the following data attributes to the ISI element.

```html
<div id="isi" data-autoscroll="true" data-autoscrollspeed="10" data-autoscrolldelay="1000" data-autoscrollstop="15000">
```

To remove the auto-scroll functionality, simply remove the data attributes from the ISI element.

##### Expand ISI #####

The ISI also has pre-built "expand" functionalilty which expands the ISI to take up 100% of the banner canvas. The ISI can then be collapsed to it's initial state. To remove this functionality, simply remove the '.expand' element.



### STEP 4: Styling the banner ###

Banner properties are stored in the variables.scss file. Is it recommended that you store all banner variables in the variables.scss files and then call them throughout your css. 

It is recommended that you DO NOT adjust values or work within the general.scss file. Instead, override any css properties of frames within the brand.scss file. Feel free to add additional selectors to this file.



### Animation ###

The animation methodology for this template is built entirely on CSS transitions. Once the html elements are added to the index.html file, and those elements are styled in the brand.scss file, the elements can then be animated using the keyframe classnames.

The steps to animate an element are:

1. Adjust the ad.keyframes meta tag in the *index.html* to add animation keyframes.
1. Create the element in the *index.html*.
1. Style the element in the *brand.scss* file.
1. Target the element using the keyframe in the *animation.scss* file

That's it!



### BONUS: Shortcuts ###

Because project managers are my best friends (and because it gets rather annoying to expand the ISI and take screenshots for every route), functionality was built into the template to allow anyone to fully expand the ISI in full view under the banner for routing purposes. To fully expand the ISI, press CTRL-ALT-I. Pressing it again will restore the ISI.



### Contact ###

* Carm Hodzic (chodzic@gmail.com)