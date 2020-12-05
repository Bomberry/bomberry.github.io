// JavaScript and JQuery functions for Bomberry.com

// :: JavaScript ::
// Blocks of JavaScript

// :: JQuery ::
// Blocks of JQuery


// :: JQuery ::
// Variant of https://bootsnipp.com/snippets/WPD9O
// NOTE: Show the Modal component
$(function() {
  $('img').on('click', function() {
    $('.imgSource').attr('src', $(this).attr('src'));
    $('#imgModal').modal('show');
  });
});


// :: JQuery ::
// Variant of https://css-tricks.com/snippets/jquery/smooth-scrolling/  :: JQuery ::
// Smooths the scrolling between anchors on a page. Used for showing and hiding/returning to 'work' sections
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  // .not('[href="#carousel-index"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        // document.addEventListener('touchstart', handler, {passive: true});
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300, function() { // value was 1000 (ms)
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// :: JQuery ::
// popModal function for showing imaage(s)
$(function() {
  $('.popModal').on('click', function() {
    $('.modal-content').attr('class', 'modal-content ' + $(this).attr(
      'data-style'));
    $('.imagePreview').attr('src', $(this).find('img').attr('src'));
    // $('.imageCaption').text($(this).find('figcaption').text());
    $('.imageCaption').text($(this).find('img').attr('data-figcaption'));
    $('.imageDetail').text($(this).find('img').attr('data-figdetail'));

    // $('#modalDialog').on('shown.bs.modal', function() {
    //   $(this).find('.modal-dialog').css({
    //     width: 'auto',
    //     height: 'auto',
    //     'max-height': '100%'
    //   });
    // });

    $('#modal').on('show', function() {
      $(this).find('.modal-body').css({
        width: 'auto', //probably not needed
        height: 'auto', //probably not needed
        'max-height': '100%'
      });
    });

    $('#modalDialog').modal('show');
  });
});


// :: JQuery ::
// Change interval to 2000
// $("#carousel-index").carousel({
//   interval: 6000,
//   pause: 'none'
// });


// :: JavaScript ::
// Change the hight or effect of the global navbar
// called in
// Navbar Effect
function navbarFX() {
  $(window).on('load resize scroll', function() {
    if ($(window).scrollTop() >= 50) {
      $('.navbar-fixed-top').addClass('box-shadow').addClass('short-nav');
    } else {
      $('.navbar-fixed-top').removeClass('box-shadow').removeClass(
        'short-nav');
    }
  });
}


// :: JQuery ::
// JQuery to call JavaScript functions
$(function() {
  //  window.alert("OK");
  navbarFX();
});


// :: JQuery ::
// Navbar "ACTIVE" Button Effect
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
// NOTE: Check to see that his is being used.


// :: JQuery ::
// NOTE: Page Fade Out Effect (https://stackoverflow.com/questions/19397515/fading-out-a-whole-page-with-jquery)
// NOTE: check https://christopheraue.net/design/fading-pages-on-load-and-unload for another process
// Delegate all clicks on "a" tag (links)
// Remove target elements using [attribute_to_match$='value_to_match'] in the list on"click" list
$(document).on("click", "a[href]:not([href^='mailto:'], [href$='javascript:void(0)'], [href$='#'], [data-js-page-fade$='false'])", function () {
  // get the href attribute
  var newUrl = $(this).attr("href");
  // veryfy if the new url exists or is a hash
  if (!newUrl || newUrl[0] === "#") {
    // set that hash
    location.hash = newUrl;
    return;
  }
  // now, fadeout the html (whole page)
  $("html").fadeOut(function () {
    // when the animation is complete, set the new location
    location = newUrl;
  });
  // prevent the default browser behavior.
  return false;
});


// NOTE: Page Fade Out Effect (https://coderwall.com/p/oirbaq/fade-in-page-on-load)
// $(document).ready(function(){
// /*! Fades in page on load */
// $('body').css('display', 'none');
// $('body').fadeIn(100);
// });


// :: JQuery ::
// NOTE: Fix for Safari bug with "Back" button (Page Fade Out Effect — above)
$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload()
    }
});






// :: JQuery ::
// ShowAll Button Effect
// $(".btn-show-all").attr("aria-expanded","true");
// $(".btn-show-all").on("click", function(){
//    $(".btn-show-all").find(".active").removeClass("active");
//    $(this).addClass("active");
// });

// $('.btn-show-all').on('click', function () {
// if($('.btn-show-all').hasClass('glyphicon-chevron-down')) {
//   $('.btn-show-all').addClass('showing');
//   } else {
//   $('.btn-show-all').removeClass('showing');
//   }
// });










// :: JavaScript ::
// NOTE: Set all TOC lists to do somehting
// FIXME: edit this
// $(window).on('load', function() {
// $(document).ready(function () {
//   // Function code here.
//   var toc = document.getElementById('TableOfContents')
//   var toc_links = document.getElementById('TableOfContents').getElementsByTagName('a')
//   // toc.setAttribute("data-test", "value");
//   for (var link_item of toc_links) {
//     console.log(link_item.id);
//   }
//   // toc_links.forEach(function(element, i){
//   //   //do your stuffs
//   // });
//
//   // toc_links.setAttribute('class', 'toc-link');
//   // toc_links.setAttribute("data-test", "value");
// });


// $("#TableOfContents").contents().find("a").css("data-test", "value");


// :: JavaScript ::
// Removal of wrapping HTML tag in JavaScript
// NOTE: This fixes HUGO .TableOfContents output, removing UI/LI and leaving the A tags.
// Copyright (c) 2017 Yihui Xie & 2018 Vincent Tam under MIT
// (function() {
//   var toc = document.getElementById('TableOfContents');
//   if (!toc) return;
//   do {
//     var li, ul = toc.querySelector('ul');
//     if (ul.childElementCount !== 1) break;
//     li = ul.firstElementChild;
//     if (li.tagName !== 'LI') break;
//     // remove <ul><li></li></ul> where only <ul> only contains one <li>
//     ul.outerHTML = li.innerHTML;
//   } while (toc.childElementCount >= 1);
// })();
//
// (function() {
//   //document.getElementById('TableOfContents').getElementsByTagName("a")[0].setAttribute("class", "democlass");
//   var newTOC = document.getElementById('TableOfContents')
//   if (!newTOC) return;
//   do {
//     var a = newTOC.querySelector('a');
//     a.setAttribute("data-test-toc", "toc-test-data");
//     a.style.backgroundColor('blue');
//   } while (newTOC.childElementCount >= 1);
// })
//
// $(document).ready(function(){
//   $("button.openbtn").click(function(){
//     $("#toc_aside").find("ul:first, li:first").contents().unwrap();
//     $("#TableOfContents").find("a").attr('data-value', 'no-show');
//     $("#TableOfContents").find("a").attr('onclick', 'closeAside()');
//   });
// });
// :: JQuery ::
$(document).ready(function(){
    // $("#toc_aside").find("ul, li").contents().unwrap();
    $("#TableOfContents").find("a").attr('data-js-page-fade', 'false'); // set the tag attribute to unbind page fade effect
    $("#TableOfContents").find("a").attr('onclick', 'closeAside()'); // add onclick function to close aside
});
// BUG: There's an issue when it comes to nested ul/li elements. Need to remove the first UL/LI pair, only.
// NOTE: Removed the first line that was unwrapping the content, removing the UL/LI tags, as it had repercussions in the toc DOM


// :: JQuery ::
// Show/Hide selected elements <sections> on a page
// NOTE: This is being used in Resume
$(document).ready(function() {
  $(".btn-show-all").click(function() {
    // $(".content").toggle();
    $(this).text(function(i, t) {
      return t == 'show all' ? 'show less' : 'show all';
    })
  });
});
$(document).ready(function() {
  $(".btn-show-more").click(function() {
    // $(".content").toggle();
    $(this).html(function(i, t) {
      // return t == 'more info<span class="fas fa-chevron-circle-down icon-pad-left animated heartBeat infinite"></span>' ? 'less info<span class="fas fa-chevron-circle-down icon-pad-left animated heartBeat infinite"></span>' : 'more info<span class="fas fa-chevron-circle-down icon-pad-left animated heartBeat infinite"></span>';
      return t == 'more info' ? 'less info' : 'more info';
    })
  });
});
// BUG: This code isn't changing the lable properly.




// :: JQuery ::
// Module: tile-flip
// NOTE: Flip selected tile element on a page
// NOTE: This is being used for (tile-flip) tiles
$(document).ready(function() {

  $(".open-tile").click(function() {
    $(this).closest(".tile").addClass("flip-card transitioning");
    $(".tile-overlay").addClass("fade-in");
  });

  $(".close-tile").click(function() {
    $(this).closest(".tile").removeClass("flip-card");
    $(".tile-overlay").removeClass("fade-in");
    $(".tile-overlay").addClass("fade-out");
    $(this).closest(".tile").delay(800).queue(function(){
      $(this).removeClass("transitioning").dequeue();
    });
    $(".tile-overlay").delay(800).queue(function(){
      $(this).removeClass("fade-out").dequeue();
    });
  });

  $(".tile-overlay").click(function() {
    var $tile = $(".tile.flip-card");
    $tile.removeClass("flip-card");
    $(this).removeClass("fade-in");
    $(this).addClass("fade-out");
    $tile.delay(800).queue(function(){
      $(this).removeClass("transitioning").dequeue();
    });
    $(this).delay(800).queue(function(){
      $(this).removeClass("fade-out").dequeue();
    });
  });



});



// NOTE: Variation
// function isOnScreen(elem) {
// 	// if the element doesn't exist, abort
// 	if( elem.length == 0 ) {
// 		return;
// 	}
// 	var $window = jQuery(window)
// 	var viewport_top = $window.scrollTop()
// 	var viewport_height = $window.height()
// 	var viewport_bottom = viewport_top + viewport_height
// 	var $elem = jQuery(elem)
// 	var top = $elem.offset().top
// 	var height = $elem.height()
// 	var bottom = top + height
//
// 	return (top >= viewport_top && top < viewport_bottom) ||
// 	(bottom > viewport_top && bottom <= viewport_bottom) ||
// 	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
// }
//
// jQuery( document ).ready( function() {
// 	window.addEventListener('scroll', function(e) {
// 		if( isOnScreen( jQuery( '.tile.flip-card' ) ) ) { /* Pass element id/class you want to check */
// 			// alert( 'The specified container is in view.' );
//  		} else {
//       var $tile = $(".tile.flip-card");
//       $tile.removeClass("flip-card");
//       $(this).removeClass("fade-in");
//       $(this).addClass("fade-out");
//       $tile.delay(800).queue(function(){
//         $(this).removeClass("transitioning").dequeue();
//       });
//       $(this).delay(800).queue(function(){
//         $(this).removeClass("fade-out").dequeue();
//       });
//
//     }
// 	});
// });

// NOTE: Variation
// $.fn.isOnScreen = function(el){
// var win = $(window);
// var bounds = el.offset();
//
// var viewport = {
// top : win.scrollTop()
// };
//
// viewport.bottom = viewport.top + win.height();
// bounds.bottom = bounds.top + el.outerHeight();
//
// return (!(viewport.bottom < bounds.top || viewport.bottom < bounds.bottom || viewport.top > bounds.bottom || viewport.top > bounds.top));
// };

// NOTE: Variation
// $.fn.isOnScreen = function(){
//
//     var win = $(window);
//
//     var viewport = {
//         top : win.scrollTop(),
//         // left : win.scrollLeft()
//     };
//     // viewport.right = viewport.left + win.width();
//     viewport.bottom = viewport.top + win.height();
//
//     var bounds = this.offset();
//     // bounds.right = bounds.left + this.outerWidth();
//     bounds.bottom = bounds.top + this.outerHeight();
//
//     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
//
// };

// NOTE: Variation
// $(window).scroll(function() {
// // changesd true to false
//    if ($('.flip-card').isOnScreen() == false) {
//      // alert("removing orange");
//      // $('.orange').remove();
//
//      var $tile = $(".tile.flip-card");
//      $tile.removeClass("flip-card");
//      $(this).removeClass("fade-in");
//      $(this).addClass("fade-out");
//      $tile.delay(800).queue(function(){
//        $(this).removeClass("transitioning").dequeue();
//      });
//      $(this).delay(800).queue(function(){
//        $(this).removeClass("fade-out").dequeue();
//      });
//
//    }
//   // if ($('.red').isOnScreen() == true) {
//   //   alert("removing red");
//   //   // $('.red').remove();
//   //  }
//
// });








// :: JavaScript ::
// WOW.js setup
var wow = new WOW({
  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null // optional scroll container selector, otherwise use window
});

// wow.init(); // Is this first instance of WOW?


// :: JQuery ::
// Reinit WOW on page refresh
$(window).on('load', function() {
  new WOW().init(); // Is this the second instance of WOW?
});
// NOTE: Check to see which is being used, and remove the other


// NOTE: Page unload animation
// $(window).on('unload', function() {
//   document.write("¡¡¡ UNLOADING PAGE !!!");
// });
//



// :: JavaScript ::
// NOTE: A javascript library for creating divs that expand to fill the screen when they are clicked on
// URL: https://colinlohner.github.io/FSM-JS/
// URL: https://github.com/colinlohner/FSM-JS
//Setup
var fsmActual = document.createElement('div');
fsmActual.setAttribute('id', 'fsm_actual');
document.body.appendChild(fsmActual);
var $fsm = document.querySelectorAll('.fsm');;
var $fsmActual = document.querySelector('#fsm_actual');
$fsmActual.style.position = "absolute";

var position = {};
var size = {};

//modal action stuffs
var openFSM = function(event) {
	var $this = event.currentTarget;
    var clientRect = $this.getBoundingClientRect();
    position = {
        top: $this.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
        left: clientRect.left
    }

	size = {
		width: window.getComputedStyle($this).width,
		height: window.getComputedStyle($this).height
	}

	$fsmActual.style.position = "absolute";
    $fsmActual.style.top = position.top + 'px';
	$fsmActual.style.left = position.left + 'px';
	$fsmActual.style.height = size.height;
	$fsmActual.style.width = size.width;
    $fsmActual.style.margin = $this.style.margin;
    document.body.classList.add('no-scroll');

	setTimeout(function(){
        $fsmActual.innerHTML = $this.innerHTML;
		var classes = $this.classList.value.split(' ');
		for (var i = 0; i < classes.length; i++) {
			$fsmActual.classList.add(classes[i]);
		}
		$fsmActual.classList.add('growing');
		$fsmActual.style.height = '100vh';
		$fsmActual.style.width = '100vw';
        $fsmActual.style.top = window.pageYOffset + 'px';
		$fsmActual.style.left = '0';
		$fsmActual.style.margin = '0';
	}, 1);

	setTimeout(function(){
		$fsmActual.classList.remove('growing');
		$fsmActual.classList.add('full-screen')
	}, 1000);
};

var closeFSM = function(event){
	var $this = event.currentTarget;

	$this.style.height = size.height;
	$this.style.width = size.width;
	$this.style.top = position.top + 'px';
	$this.style.left = position.left + 'px';
	$this.style.margin = '0';
	$this.classList.remove('full-screen');
	$this.classList.add('shrinking');

	setTimeout(function(){
		while($this.firstChild) $this.removeChild($this.firstChild);
		var classList = $this.classList;
		while (classList.length > 0) {
			 classList.remove(classList.item(0));
		}
		$this.style = '';;
	}, 1000);
};

for (var i = 0; i < $fsm.length; i++) {
	$fsm[i].addEventListener("click", openFSM);
}
$fsmActual.addEventListener("click", closeFSM);





// :: JavaScript ::
// NOTE: Show/Hide Aside (Table of Contents)
/* Set the width of the aside to 250px (show it) */
function openAside() {
  document.getElementById("toc_aside").style.right = "0";
}
/* Set the width of the sidebar to 0 (hide it) */
function closeAside() {
  document.getElementById("toc_aside").style.right = "-100vw";
}



// generate TOC
// $(function() {
//   var toc = $('section.sidebar.TOC');
//   var ul = $('<ul />');
//   toc.append(ul);
//   $('section.feature').each(function() {
//     var $this = $(this);
//     var item = $('<li><a href="#' + $this.attr('id') + '">' + this.attr(
//       'id') + '</a></li>');
//     ul.append(item);
//   });
// });


// :: JavaScript ::
// NOTE: Show/Hide Element Toggle button
// Show an element
var show = function(elem) {
  // Get the natural height of the element
  var getHeight = function() {
    elem.style.display = 'block'; // Make it visible
    var height = elem.scrollHeight + 'px'; // Get it's height
    elem.style.display = ''; //  Hide it again
    return height;
  };
  var height = getHeight(); // Get the natural height
  elem.classList.add('is-visible'); // Make the element visible
  elem.style.height = height; // Update the max-height
  // Once the transition is complete, remove the inline max-height so the content can scale responsively
  window.setTimeout(function() {
    elem.style.height = '';
  }, 350);
};
// :: JavaScript ::
// Hide an element
var hide = function(elem) {
  // Give the element a height to change from
  elem.style.height = elem.scrollHeight + 'px';
  // Set the height back to 0
  window.setTimeout(function() {
    elem.style.height = '0';
  }, 1);
  // When the transition is complete, hide it
  window.setTimeout(function() {
    elem.classList.remove('is-visible');
  }, 350);
};
// Toggle element visibility
var toggle = function(elem, timing) {
  // If the element is visible, hide it
  if (elem.classList.contains('is-visible')) {
    hide(elem);
    return;
  }
  // Otherwise, show it
  show(elem);
};

// Listen for click events
document.addEventListener('click', function(event) {
  // Make sure clicked element is our toggle
  if (!event.target.classList.contains('toggle')) return;
  // Prevent default link behavior
  event.preventDefault();
  // Get the content
  var content = document.querySelector(event.target.hash);
  if (!content) return;
  // Toggle the content
  toggle(content);
}, false);
