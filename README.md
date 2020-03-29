# README #

Create pharma HTML display ads quickly along with ISI styles and functionality pre-built into a light, easy-to-use template. No dependencies required. Production assets (before content) compile at a light 7k. It is encouraged that you use CSS transitions / animations for these banners. No javascript is required. Javascript is only used to 

1. listen for keyframes (which you will set in html) 
2. manage the ISI logic (ie: does it auto-scroll? for how long? at what speed? is there a delay? and so on).


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

These classes are used to manage ISI positioning. For example: ISIs for 300x250 banners typically appear at the bottom of the banner. On 728x90 sizes, the ISIs are typically on the right. This allows the template to dynamically identify the size of the banner through CSS by listening for a class combination of, say, .w300.h250.

The following sizes are pre-built within the template.

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

Animations are encouraged to be handled entirely through CSS transitions. Keyframes are used to trigger these animations. To trigger these animation, class names are dynamically added to the parent container at specific durations. Keyframe durations are stored in the ad.keyframe meta data in the index.html file.

```html
<meta name="ad.keyframes" content="4000,8000,12000">
```

The meta tag above contains three keyframes separated by commas. At 4000 milliseconds (or, 4 seconds), the classname 'queue1' will be added to the parent container. At 8 seconds, 'queue2' will be added to the parent container. At 12 seconds, the final class name 'queue3' will be added. Using the example above, at the 12 second mark, the parent container will have all three classnames for each keyframe: queue1, queue2 and queue3.

You can now target all elements in the banner to animate at any of those keyframes.


### STEP 3: Configure the ISI (Optional) ###

The ISI container and functionality are pre-built into the template. By default, the ISI is built to take up 1/3 of the canvas. To adjust this value, change the $isi-size variable in the variables.scss file. For horizontal banners (ie: 728x90), the ISI appears on the right side of the canvas. For vertical or square banners (ie: 300x250), the ISI appears at the bottom. This logic is pre-set within the template and wouldn't need to be adjusted.

#### Auto-scroll Functionality ####

The ISI has pre-built auto-scroll functionality: 

* *Auto scroll* - The ISI will autoscroll on load.
* *Auto scroll speed* - The speed of the autoscroll determined by pixels per second.
* *Auto scroll delay* - Delaying the autoscroll on load.
* *Auto scroll hard stop* - Stopping the autoscroll at a specific duration.

You can adjust these values by adding the following data attributes to the ISI element.

```html
<div id="isi" data-autoscroll="true" data-autoscrollspeed="10" data-autoscrolldelay="1000" data-autoscrollstop="15000">
```

* *data-autoscroll* = Give this attribute a value of 'true' to trigger the autoscroll functionality.
* *data-autoscrollspeed* = Represents the number of pixels the ISI will scroll per second. IE: a value of 10 will autoscroll the ISI 10 pixels per seconds. Adjust this value to meet your requirements.
* *data-autoscrolldelay* = Delay the start of the autoscroll by X milliseconds.
* *data-autoscrollstop* = Force the ISI to stop scrolling after X milliseconds.

To remove the auto-scroll functionality, simply remove the data attributes from the ISI element.

It's important to note that the ISI will stop scrolling once the user engages with the banner (ie: click, manual scroll of the ISI, and so on). The ISI will pause scrolling if the user mouses over the ISI. On mouse out, the ISI will continue scrolling.

#### Expand ISI ####

The template also has pre-built "expand" functionalilty which expands the ISI to take up 100% of the banner canvas. Once expanded, the ISI can then be collapsed to it's initial state. To remove this functionality, simply remove the '.expand' element.



### STEP 4: Styling the banner ###

Banner properties are stored in the variables.scss file. Is it recommended that you store all banner variables in the variables.scss files and then call them throughout your css. 

It is recommended that you DO NOT adjust values or work within the general.scss file. Instead, override any css properties of frames within the brand.scss file. Feel free to add additional selectors to this file.



### STEP 5: Animation ###

The animation methodology for this template is built entirely on CSS transitions. Once the html elements are added to the index.html file, and those elements are styled in the brand.scss file, the elements can then be animated using the keyframe classnames.

The steps to animate an element are:

1. Adjust the ad.keyframes meta tag in the *index.html* to add animation keyframe durations.
1. Create the element you wish to animate in the *index.html*.
1. Style the element in the *brand.scss* file.
1. Target the element using the keyframe in the *animation.scss* file to change the element property, thus animating the element.

That's it!

In the following example, once the first keyframe is triggered, we are hiding the first frame of the animation and displaying the second frame.

```css

	.queue1 .frame1 { opacity: 0; }
	.queue1 .frame2 { opacity: 1; }

```

Use this structure to animate all elements using the .queue[#] keyframe classes in the *animation.scss* file.


### BONUS: Shortcuts ###

Because project managers are my best friends (and because it gets rather annoying to expand the ISI and take screenshots for every route), functionality was built into the template to allow anyone to fully expand the ISI in full view. The ISI content will appear underneath the banner. To fully expand the ISI, press CTRL-ALT-I. Pressing it again will restore the ISI to it's original state.



### Contact ###

* Carm Hodzic (chodzic@gmail.com)