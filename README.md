# README #

Create pharma-specific HTML display ads quickly along with ISI styles and functionality pre-built into a light, easy-to-use template. No dependencies required. Production assets (before content) compile at a light 8k. It is encouraged that you use CSS transitions / animations for these display ads. No javascript is required, however feel free to add javascript animation libraries to this template.

### STEP 1: Preparing the canvas ###

The first step for building a display ad using this template is to prepare your banner canvas. You do so by adjusting the ad.size meta data tag in the index.html file.

```html
<meta name="ad.size" content="width=300,height=250">
```

Adjust those values to the actual dimensions of your banner. The template will read those dimensions and adjust the size of the banner accordingly. 


### STEP 2: Animation keyframes ###

Animations are encouraged to be handled entirely through CSS transitions. Keyframes are used to trigger these animations. To trigger these animation, class names are dynamically added to the parent container at specific durations. Keyframe durations are stored in the ad.keyframe meta data in the index.html file.

```html
<meta name="ad.keyframes" content="4000,8000,12000">
```

This specific meta tag contains three keyframes separated by commas. At 4000 milliseconds (or, 4 seconds), the classname 'queue1' will be added to the parent container. At 8 seconds, 'queue2' will be added. At 12 seconds, the final class name, 'queue3', will be added. Using the example above, at the 12 second mark, the parent container will have all three classnames for each keyframe: queue1, queue2 and queue3.

You can now target all elements in the banner to animate at any of those keyframes.


### STEP 3: Configure the ISI (Optional) ###

The ISI container and functionality are pre-built into the template. By default, the ISI is built to take up 1/3 of the canvas. To adjust this value, change the $isi-size variable in the variables.scss file.

#### ISI Position ####

The ISI is dynamically positioned based on the banner's aspect ratio. On load, banners will be dynamically categorized as square, wide or tall. All tall and square banners will have an ISI positioned at the bottom of the canvas. Wide banners will position ads on the right of the canvas.

#### Auto-scroll Functionality ####

The ISI has pre-built auto-scroll functionality: 

* Determine whether the ISI should autoscroll on load.
* Set the speed of the autoscroll.
* Delay the autoscroll on load.
* Stop the autoscroll at a specific duration.
* Pause the scroll on hover.

You can adjust these values by adding the following data attributes to the ISI element.

```html
<div id="isi" 
  data-autoscroll        ="true" 
  data-autoscrollspeed   ="10" 
  data-autoscrolldelay   ="1000" 
  data-autoscrollstop    ="15000"
  data-isihover          ="pause"
 >
```

* *data-autoscroll* = Give this attribute a value of 'true' to trigger the autoscroll functionality. If this value doesn't exist, or is set to anything other than "true", then the ISI will NOT autoscroll.
* *data-autoscrollspeed* = Represents the number of pixels the ISI will scroll per second. IE: a value of 10 will autoscroll the ISI 10 pixels per seconds. Adjust this value to meet your speed requirements.
* *data-autoscrolldelay* = Delay the start of the autoscroll by X milliseconds. By default, if the ISI is set to autoscroll, it will begin on load.
* *data-autoscrollstop* = Force the ISI to stop scrolling after X milliseconds. If this is left empty, then the ISI will autoscroll until it reaches the bottom of the ISI.
* *data-isihover* = Pause the autoscroll if the user hovers over the ISI.

Remove all of these attributes to remove all autoscroll functionality from the banner.

It's important to note that the ISI will stop scrolling once the user engages with the banner (ie: click, manual scroll of the ISI, and so on). The ISI will pause scrolling if the user mouses over the ISI. On mouse out, the ISI will continue scrolling.

#### Expand ISI ####

The template also has pre-built "expand" functionalilty which expands the ISI to take up 100% of the banner canvas. Once expanded, the ISI can then be collapsed to it's initial state. To include this fucntionality, add *data-isi-expand="show"* to the ISI header element (.header).


### STEP 4: Styling the banner ###

Banner properties are stored in the variables.scss file. Is it recommended that you store reusable banner variables in the variables.scss files and then call them throughout your css.

It is recommended that you DO NOT adjust values or work within the general.scss file. Instead, override any css properties of frames within the brand.scss file. The brand.scss comes prepopulated with all of the banner selectors. Feel free to add additional selectors to this file as you create HTML elements.


### STEP 5: Animation ###

The animation methodology for this template is built entirely on CSS transitions. Once the html elements are added to the index.html file, and those elements are styled in the brand.scss file, the elements can then be animated using the keyframe classnames.

The steps to animate an element are:

1. Adjust the ad.keyframes meta tag in the *index.html* to add animation keyframe durations.
1. Create the element you wish to animate in the *index.html*.
1. Style the element in the *brand.scss* file. Typically, the styles and properties set in this file are the *on-load* properties of the elements. 
1. Animate the element by adjusting the elements' css properties in *components/keyframes/keyframes.scss* file. Consider these values the "end" state of the elements.

That's it!

In the following example, once the first keyframe is triggered, we are hiding the first frame of the animation and displaying the second frame. To do so, target .frame1 and .frame2 once .queue1 is added to the parent container.

```css

.queue1 .frame1 { opacity: 0; }
.queue1 .frame2 { opacity: 1; }

```

Use this structure to animate all elements using the .queue[#] keyframe classes in the *keyframe* component.


### MODES ###

#### Developer Mode ###

Enter *npm run start* to load the banner in developer mode. While in developer mode, the debug canvas will appear. This canvas will display properties, clicktags and rules of the banner to ensure that the banner is wired up properly.

#### Shortcuts ####

```
CTRL-ALT-I
```
Because project managers are my best friends (and because it gets rather annoying to expand the ISI and take screenshots for every route), functionality was built into the template to allow anyone to fully expand the ISI in full view. The ISI content will appear underneath the banner. To fully expand the ISI, press CTRL-ALT-I. Pressing it again will restore the ISI to it's original state.


```
CTRL-ALT-D
```

This will display the individual keyframes of the banner, and allow users to jump to each of those keyframes. Upon pressing CTRL-ALT-D, the banner animation is disabled and a timeline console is displayed at the top-right of the browser. Clicking each keyframe in the panel will change the state of the banner to that keyframe.


#### Production Mode (Build) ###

Enter *npm run build* to generate production-ready files. These files will be minimized and all debug / shortcut commands will be removed. The /dist folder will contain your production files.



### Contact ###

If you have any questions, or would like to suggest new features or improvements, feel free to reach out to me.

* Carm Hodzic (chodzic@gmail.com)