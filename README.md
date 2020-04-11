# README #

Quickly create pharma-specific HTML display ads along with ISI styles and functionality pre-built into a light, easy-to-use template. No dependencies required. Production assets (before assets and content) compile at a light 8k -- including ISI autoscroll logic and animation framework. It is encouraged that you use CSS transitions / animations for these display ads. No javascript is required. However feel free to add javascript animation libraries to this template.

A console / preview mode is included in this package for testing and demo purposes.


### SET UP & CONFIGURATION ###

Clone this repo and run the following commands:

```
npm run start
```
This will run developer mode on http://localhost:9000 and auto-refresh that environment on update.

```
npm run build:demo
```
This will build a package to demo the banner. It will include the console / previewer.

```
npm run build:prod
```
This will build a package for release. All HTML, CSS and JS will be minified and injected into the `index.html` file. All image assets will be included in the /assets/ directory.


### STEP 1: Preparing the canvas ###

The first step for building a display ad using this template is to prepare your banner canvas. You do so by adjusting the ad.size meta data tag in the `index.html` file.

```html
<meta name="ad.size" content="width=300,height=250">
```

Adjust those values to the desired dimensions of your banner. The template will read those dimensions and adjust the size of the banner accordingly. 


### STEP 2: Animations ###


#### Keyframes ####

A light-weight animation framework is built into this template. This framework listens for keyframes and uses classnames and CSS to target elements.

Animations are encouraged to be handled entirely through CSS transitions. Keyframes are used to trigger these animations. To trigger these animation, class names are dynamically added to the parent container at specific durations. Keyframe durations are stored in the ad.keyframe meta data in the `index.html` file.

```html
<meta name="ad.keyframes" content="4000,8000,12000">
```

This specific meta tag contains three keyframes separated by commas. At 4000 milliseconds (or, 4 seconds), the classname 'queue1' will be added to the parent container. At 8 seconds, 'queue2' will be added. At 12 seconds, the final class name, 'queue3', will be added. Using the example above, at the 12 second mark, the parent container will have all three classnames for each keyframe: queue1, queue2 and queue3.


#### Create and style animation elements ####

General banner properties are stored in the `/styles/_variables.scss` file. Is it recommended that you create and store reusable banner variables in this file and then call them throughout your css.

All elements must be stored within the #content element found in the `index.html` file. Once you create your elements, you then style them in the `/styles/_brands.scss` file. Consider these properties the "onload" or "initial" values of these elements.



#### Animate elements ####

The animation methodology for this template is built entirely on CSS transitions. Once the html elements are added to the `index.html` file, and those elements are styled in the `/styles/_brand.scss` file, the elements can then be animated using the keyframe classnames.

In the following example, once the first keyframe is triggered, we are hiding the first frame of the animation and displaying the second frame. To do so, target .frame1 and .frame2 once .queue1 is added to the parent container.

```css

.queue1 .frame-1 { opacity: 0; }
.queue1 .frame-2 { opacity: 1; }

```

This will give .frame-1 an opacity of 0 (or, hide it) and give .frame-2 an opacity of 1 (or, show it) once .queue1 is added to the DOM.

Use this structure to animate all elements using the .queue[#] keyframe classes in the *keyframe* component.



### STEP 3: Configure the ISI (Optional) ###

The ISI container and functionality are pre-built into the template. By default, the ISI is built to take up 1/3 of the canvas. To adjust this value, change the $isi-size variable in the `styles/_variables.scss` file.

#### ISI Position ####

The ISI is dynamically positioned based on the banner's aspect ratio. On load, banners will be dynamically categorized as square, wide or tall. All tall and square banners will have an ISI positioned at the bottom of the canvas. Wide banners will position ads on the right of the canvas.

#### Auto-scroll Functionality ####

The ISI has pre-built auto-scroll functionality. They are: 

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

It's important to note that the ISI will stop scrolling once the user engages with the banner (ie: click text within the ISI, expand the ISI, manual scroll of the ISI).

#### Expand ISI ####

The template also has pre-built "expand" functionalilty which expands the ISI to take up 100% of the banner canvas. Once expanded, the ISI can then be collapsed to it's initial state. To include this fucntionality, add *data-isi-expand="show"* to the ISI header element (.header).



### CONSOLE ###

     In development and demo mode, the banner will appear within a console. The purpose of this console is to allow developers, QA analysts and project managers to produce, test and route banners more efficiently.

#### Banner Properties ###

     The banner properties (width, height, keyframes...) are displayed in the console to ensure that the dimensions are correct.

#### ISI Rules ###

     The ISI rules (autoscroll, speed, hover, etc...) are displayed in the console, allowing QA analysts to ensure these rules are properly set.

#### ClickTags ###

     All clickTags set in the banner are displayed in the console. As you hover over clickable elements within the banner (frames, links, etc...), the clicktags in the console are highlighted, indicating that the clicktable element will take the user to the highlighted clickTag.

#### Timeline ###

     All keyframes of the banner are displayed in the timeline. Clicking each of the keyframes display that particular keyframe of the banner. 

#### Actions ###

     Toggles are built into the console which allow the user to hide and show specific elements from the console.

     * SHOW ISI - Expands the ISI and repositions it below the banner.
     * BACKGROUND PATTERN - Hide/show the background pattern of the canvas.



### Contact ###

If you have any questions, or would like to suggest new features or improvements, feel free to reach out to me.

* Carm Hodzic (chodzic@gmail.com)