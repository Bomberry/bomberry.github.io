// JavaScript and JQuery functions for Bomberry.com
// NOTE: DEVELOPMENT
// NOTE: Move to bomberry.js when finished





// :: JavaScript ::
// Blocks of JavaScript

//
// var elementOptions = {
//     // root: document.querySelector('.flip-card.transitioning'),
//     // rootMargin: '0px 0px -100%',
//     rootMargin: '0px 0px 0px',
//     // threshold: [0, 0.8]
//     threshold: [0]
// }


// NOTE: Target Element (flipped tile card)
// var isWatching = 0;
// console.log("initial isWatching: FALSE [" + isWatching + "]");

// let target = document.querySelector('.flip-card.transitioning');
// let targetB = watchElement;
//
// var observer = new IntersectionObserver(callbackMessage, elementOptions);
// // observer.observe(target);
//
// var thisObserver = new IntersectionObserver(callbackFn, elementOptions);
// // thisObserver.observe(document.getElementById("elementToObserve"));
// /* ... */
// // thisObserver.unobserve(document.getElementById("elementToObserve"));



// NOTE: Is in viewport helper function
// var isInViewport = function (elem) {
//   console.log(elem);
//   var elementBCR = $(elem)[0].getBoundingClientRect();
//   var boxPadding = 210
//   return (
//     // elementBCR.top >= 0 &&
//     elementBCR.top >= 0 - elementBCR.height + boxPadding &&
//     // elementBCR.left >= 0 &&
//     // elementBCR.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//     elementBCR.bottom <= (window.innerHeight + elementBCR.height - boxPadding)
//     // elementBCR.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };




// function startWatching() {
//   console.log("Start Watching \\\\\\\\");
//   isWatching = 1
//   console.log("watching:");
//   console.log(watchElement);
// };
//
// function stopWatching() {
//   console.log("Stop Watching ////");
//   isWatching = 0;
//   watchElement = null;
//   console.log("watching:");
//   console.log(watchElement);
// }


// function callbackFn() {
//   console.log("-----   thisObserver.callbackFn   -----");
// }

// if ('.flip-card.transitioning') {
//   console.log("the element is " + elementExists);
// }
// TODO: REMOVE DUPS
// let target = document.querySelector('.flip-card.transitioning');
// observer.observe(target);


// function messageHere() {
//   console.log("Here's a message... ");
// };


// function callbackMessage(e) {
//
//   console.log("-- Callback: isWatching: " + isWatching);
//   console.log(e);
//
//   if (isWatching) {
//     console.log("callbackMessage.isWatching: TRUE [" + isWatching +"] Now I'm really gonna flip the tile!");
//     console.log("< Changing isWatching: " + isWatching);
//     isWatching = 0;
//     console.log("< To isWatching: " + isWatching);
//   } else {
//     console.log("callbackMessage.isWatching: TRUE [" + isWatching +"] Now I'm totally watching it.");
//     console.log("> Changing isWatching: " + isWatching);
//     isWatching = 1;
//     console.log("> To isWatching: " + isWatching);
//   };
//
// };

// TODO: REMOVE DUPS
// let target = document.querySelector('.flip-card.transitioning');
// observer.observe(target);
// var testIsElementInViewport = function(elem) {
//   console.log("watching: " + elem);
//   console.log(elem);
//   if (isInViewport(elem)) {
//     console.log("testIsElementInViewport isInViewport TRUE: " + elem);
//     return;
//   }
//   console.log("testIsElementInViewport isInViewport FALSE: " + elem);
//   $(".tile-overlay").click();
//   stopWatching();
//
// };

// function watcher() {
//   if (isWatching) {
//     console.log("** watcher isWatching: TRUE [" + isWatching +"]");
//     testIsElementInViewport(watchElement);
//     // if (isInViewport(watchElement)) {
//     //   console.log("IN VIEW");
//     // } else {
//     //   console.log("OUT VIEW");
//     // };
//   } else {
//     console.log("** watcher isWatching: FALSE [" + isWatching +"]");
//   };
// }


// function here() {
//   $(window).on('scroll', function () {
//     if (isWatching) {
//       watcher();
//     };
//     // watcher();
//   //
//   //   if (isWatching) {
//   //     console.log("**  isWatching: TRUE [" + isWatching +"]");
//   //   } else {
//   //     console.log("**  isWatching: FALSE [" + isWatching +"]");
//   //   };
//   //
//   //   if ($('.flip-card.transitioning').length) {
//   //     // console.log("I'm visible!");
//   //     console.log("TRUE: the element is: " + elementExists);
//   //
//   //     let target = document.querySelector('.flip-card.transitioning');
//   //     observer.observe(target);
//   //
//   //     isWatching = 1;
//   //
//   //     // messageHere();
//   //
//   //   } else {
//   //     // console.log(". . .");
//   //     console.log("FALSE: the element is: " + elementExists);
//   //     // observer.unobserve(target);
//   //     isWatching = 0;
//   //   }
//   });
// };

// console.log("the element is " + elementExists);


// function modalScrollExit() {
//   $(window).on('scroll', function functionName() {
//     if ('.flip-card.transitioning') {
//       // $('.flip-card.transitioning').addClass('className').addClass('className');
//       console.log('true');
//     } else {
//       // $('.flip-card.transitioning').removeClass('className').removeClass('className');
//       console.log('false');
//     }
//   });
// }



// // NOTE:
// // NOTE: Setting up
// const numSteps = 20.0;
//
// let boxElement;
//
// let prevRatio = 0.0;
// let increasingColor = "rgba(40, 40, 190, ratio)";
// let decreasingColor = "rgba(190, 40, 40, ratio)";
// let increasingShadow = "-100px ratiopx 6px blue"
// let decreasingShadow = "100px ratiopx 6px green"
// let startOffset = "ratiopx"
// let endOffset = "ratiopx"
// let thisOffset = "ratiopx"
//
//
// // Add object to watch
// window.addEventListener("load", (event) => {
//   boxElement = document.querySelector("#thisThing");
//   createObserver();
// }, false);
//
//
// // NOTE: Creating the intersection observer
// function createObserver() {
//   let observer;
//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: buildThresholdList()
//   };
//
//   observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(boxElement);
// }
//
// // NOTE: Building the array of threshold ratios
// function buildThresholdList() {
//   let thresholds = [];
//   let numSteps = 20;
//
//   for (let i=1.0; i<=numSteps; i++) {
//     // let ratio = i/numSteps;
//     let ratio = i/numSteps;
//     thresholds.push(ratio);
//   }
//
//   thresholds.push(0);
//   return thresholds;
// }
//
// // NOTE: Handling intersection changes
// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > prevRatio) {
//       // entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
//       // entry.target.style.opacity = entry.intersectionRatio;
//       entry.target.style.transform = "translateY(startOffset.replace('ratio', entry.intersectionRatio * 100))";
//       // entry.target.style.boxshadow = "increasingShadow.replace('ratio', entry.intersectionRatio)";
//       console.log(thisOffset.replace("ratio", entry.intersectionRatio * 100));
//     } else {
//       // entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
//       // entry.target.style.opacity = entry.intersectionRatio;
//       entry.target.style.transform = "translateY(endOffset.replace('ratio', entry.intersectionRatio * 100))";
//       // entry.target.style.boxshadow = "decreasingShadow.replace('ratio', entry.intersectionRatio * 100)";
//       console.log(thisOffset.replace("ratio", entry.intersectionRatio * -100));
//     }
//     console.log(entry.intersectionRatio);
//
//     prevRatio = entry.intersectionRatio;
//     console.log(prevRatio);
//   });
// }



// :: JQuery ::
// Blocks of JQuery













// NOTE: jQuery-Visible plugin from Sam Sehnert
// Site: https://github.com/customd/jquery-visible
// Help: https://css-tricks.com/slide-in-as-you-scroll-down-boxes/
//
// (function($) {
//
//   /**
//    * Copyright 2012, Digital Fusion
//    * Licensed under the MIT license.
//    * http://teamdf.com/jquery-plugins/license/
//    *
//    * @author Sam Sehnert
//    * @desc A small plugin that checks whether elements are within
//    *     the user visible viewport of a web browser.
//    *     only accounts for vertical position, not horizontal.
//   */
//   // NOTE: When the window scrolls, check if module is visible
//   $.fn.visible = function(partial) {
//
//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;
//
//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//
//   };
//
// })(jQuery);
// Example:
// All that’s left for us is using it when the window “scrolls” to add a class name.
// $(window).scroll(function(event) {
//
//   $(".module").each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in");
//     }
//   });
//
// });
// CSS example transform - slide up :
// .come-in {
//   transform: translateY(150px);
//   animation: come-in 0.8s ease forwards;
// }
// .come-in:nth-child(odd) {
//   animation-duration: 0.6s; /* So they look staggered */
// }
//
// @keyframes come-in {
//   to { transform: translateY(0); }
// }
//
// If elements are already visible, let them be
// var win = $(window);
// var allMods = $(".module");
//
// // Already visible modules
// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible");
//   }
// });
//
// win.scroll(function(event) {
//
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in");
//     }
//   });
//
// });






// :: JQuery ::
// WARNING: (Duplicate) Original function in bomberry.js:119
// JQuery to call JavaScript functions
// $(function() {
//   //  window.alert("OK");
//   // modalScrollExit();
//   here();
// });














// NOTE: CODE TO LEARN FROM
// proto.start = function() {
//     !1 === this.tracking && (this.tracking = !0, window.addEventListener("resize", this.refreshAllElementMetrics), window.addEventListener("orientationchange", this.refreshAllElementMetrics), window.addEventListener("scroll", this.refreshAllElementStates), this.refreshAllElementMetrics())
// },
// proto.stop = function() {
//     !0 === this.tracking && (this.tracking = !1, window.removeEventListener("resize", this.refreshAllElementMetrics), window.removeEventListener("orientationchange", this.refreshAllElementMetrics), window.removeEventListener("scroll", this.refreshAllElementStates))
// },
// proto.refreshAllElementMetrics = function(e, t) {
//     "number" != typeof e && (e = this._getScrollY()),
//     "number" != typeof t && (t = this._getWindowHeight()),
//     this._scrollY = e,
//     this._windowHeight = t,
//     this.elements.forEach(this.refreshElementMetrics, this)
// },
// proto.refreshElementMetrics = function(e) {
//     if (!e.isActive)
//         return e;
//     var t = ac_dom_metrics.getDimensions(e.element, e.useRenderedPosition),
//         i = ac_dom_metrics.getPagePosition(e.element, e.useRenderedPosition);
//     return e = ac_Object.extend(e, t, i), this.refreshElementState(e)
// },
// proto.refreshAllElementStates = function(e) {
//     "number" != typeof e && (e = this._getScrollY()),
//     this._scrollY = e,
//     this.elements.forEach(this.refreshElementState, this)
// },
// proto.refreshElementState = function(e) {
//     if (!e.isActive)
//         return e;
//     var t = e.inView;
//     return e.pixelsInView = this._elementPixelsInView(e), e.percentInView = this._elementPercentInView(e), e.inView = e.pixelsInView > 0, e.inView && this._ifInView(e, t), t && this._ifAlreadyInView(e), e
// },
// proto.pauseElementTracking = function(e) {
//     e && (e.isActive = !1)
// },
// proto.resumeElementTracking = function(e) {
//     e && (e.isActive = !0)
// },
// proto._getWindowHeight = function() {
//     return window.innerHeight
// },
// proto._getScrollY = function() {
//     return ac_dom_metrics.getScrollY()
// },
//
//
//
//
//
//
//
//
// jQuery(document).ready(function($) {
//     jQuery(window).scroll(function() {
//         var $main_header = jQuery('#main-header'),
//             $body = jQuery('body'),
//             scrollPercentage = 100 * (jQuery(this).scrollTop() / $body.height()),
//             scroll = $(window).scrollTop(),
//             objectPosition = $body.offset().top;
//
//         if (scroll < objectPosition) {
//             $main_header.removeClass("et_highlight_nav");
//         }
//         if (scrollPercentage >= 50) {
//             $main_header.addClass("et_highlight_nav");
//         }
//     });
// });
//
