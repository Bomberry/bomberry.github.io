// JavaScript and JQuery functions for Bomberry.com

// :: JavaScript ::
// Blocks of JavaScript

// :: JQuery ::
// Blocks of JQuery


// :: JQuery ::
// Variant of https://bootsnipp.com/snippets/WPD9O
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
        }, 1000, function() {
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
// popModal function for showing imaage
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
$(document).on("click", "a[href]:not([href^='mailto:'], [href$='#'])", function () {
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


// :: JQuery ::
// Show/Hide elements on a page
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
      return t == 'more info<span class="fas fa-chevron-circle-down icon-pad-left animated heartBeat infinite"></span>' ? 'less info<span class="fas fa-chevron-circle-down icon-pad-left animated heartBeat infinite"></span>' : 'more info<span class="fas fa-chevron-circle-down icon-pad-left animated heartBeat infinite"></span>';
    })
  });
});
// BUG: This code isn't changing the lable properly.



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
