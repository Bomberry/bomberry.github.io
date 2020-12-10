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
//
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
// TODO: Check to see that his is being used.
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});



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



// :: JQuery ::
// NOTE: Fix for Safari bug with "Back" button (Page Fade Out Effect — above)
$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload()
    }
});







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

  // TODO: Add function for scrolling (flip when out of viewport)

});



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
// Listen for click events (toggle class)
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
