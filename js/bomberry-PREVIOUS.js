// JavaScript and JQuery functions for Bomberry.com



// :: MODULES ::
// NOTE: Import Modules/Classes
// import { Mortgage } from "lazylazy.js";




// :: LANGUAGE ::
// NOTE: Name and comments



// -**--**--**--**-        -**--**--**--**-        -**--**--**--**-
// ----------------------------------------------------------------
// NOTE: CLICK EVENTS
// ----------------------------------------------------------------


// :: JQuery ::
// NOTE: Show the Modal component
// ----------------------------------------------------------------
// Variant of https://bootsnipp.com/snippets/WPD9O
$(function() {
  $('img').on('click', function() {
    $('.imgSource').attr('src', $(this).attr('src'));
    $('#imgModal').modal('show');
  });
});



// :: JQuery ::
// NOTE: Smooth Scolling
// ----------------------------------------------------------------
// Variant of https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Smooths the scrolling between anchors on a page.
// Used for showing and hiding/returning to 'work' sections
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
      }, 300, function() { // value was 1000 (ms) // was 300
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


// :: JavaScript ::
// NOTE: Smooth Scroll to an image anchors
// function scrollToAnchor(anchorName){
//     var aTag = $("a[name='"+ anchorName +"']");
//     $('html,body').animate({scrollTop: aTag.offset().top},'slow');
// }
// $("#SELECTOR").click(function() {
//    scrollToAnchor('anchorName');
// });




// :: JQuery ::
// NOTE: Flip Tile when PORTFOLIO URL has HASH (.click() on load with hash)
$(document).ready(function() {
  var thisLocation = $(location).attr('pathname')
  var thisHash = $(location).attr('hash')
  if (thisLocation === "/portfolio/") {
    if (thisHash) {
      $(thisHash).delay(1800).queue(function(){
        $(thisHash).siblings(".front-face").children('button.icon-wrapper.flip-tile-button.open-tile').click();
      });
    };
  };
  return false;
});












// // NOTE: jQuery version and additional data…
// $(document).ready(function() {
//
//   console.log("——————————");
//   console.log('jQuery version: ' + $.fn.jquery)
//   console.log("——————————");
//
//   var aPage = $(location).attr('href');
//   var aDocument = $(document);
//   var aWindow = $(window);
//   var aScreen = aWindow.screen;
//   var aTile = $("a");
//   var hash = $(location).attr('hash');
//
//   console.log("HASH:");
//
//   if ($(location).attr('hash')) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
//
//   if (aPage.length > 0) {
//     console.log(true);
//     console.log("host = " + $(location).attr('host') +
//           "\nhostname = " + $(location).attr('hostname') +
//           "\npathname = " + $(location).attr('pathname') +
//           "\nhref = " + $(location).attr('href') +
//           "\nhash = " + $(location).attr('hash') +
//           "\nport = " + $(location).attr('port') +
//           "\nprotocol = " + $(location).attr('protocol'));
//
//   } else {
//     console.log(false);
//     console.log("host = " + $(location).attr('host') +
//           "\nhostname = " + $(location).attr('hostname') +
//           "\npathname = " + $(location).attr('pathname') +
//           "\nhref = " + $(location).attr('href') +
//           "\nhash = " + $(location).attr('hash') +
//           "\nport = " + $(location).attr('port') +
//           "\nprotocol = " + $(location).attr('protocol'));
//
//   };
//
//   console.log("—————");
//   console.log("DOCUMENT:");
//   if (aDocument) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
//   console.log(aDocument.attr('title'));
//   console.log(aDocument);
//
//   console.log("—————");
//   console.log("WINDOW:");
//   if (aWindow) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
//   console.log(aWindow.innerHeight());
//   console.log(aWindow.innerWidth());
//   console.log(aWindow.outerHeight());
//   console.log(aWindow.outerWidth());
//   console.log(aWindow.attr('pageXOffset'));
//   console.log(aWindow.attr('pageYOffset'));
//   console.log(aWindow.attr('name'));
//   console.log(aWindow.attr('navigator'));
//   console.log(aWindow);
//
//
//   console.log("—————");
//   console.log("SCREEN:");
//   if (aScreen) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
//   // console.log(aScreen.attr('title'));
//   console.log(aScreen);
//
//
// });

// alert("host = " + $(location).attr('host') +
//       "\nhostname = " + $(location).attr('hostname') +
//       "\npathname = " + $(location).attr('pathname') +
//       "\nhref = " + $(location).attr('href') +
//       "\nport = " + $(location).attr('port') +
//       "\nprotocol = " + $(location).attr('protocol'));






// function someMethodIThinkMightBeSlow() {
//     const startTime = performance.now();
//
//     // Do the normal stuff for this function
//
//     const duration = performance.now() - startTime;
//     console.log(`someMethodIThinkMightBeSlow took ${duration}ms`);
// };


// // NOTE: OPTIMIZE EXAMPLE
// // NOTE: BEFORE
// search.addEventListener('keyup', function() {
//     for (const node of nodes)
//         if (node.innerText.toLowerCase().includes(this.value.toLowerCase()))
//             node.classList.remove('hidden');
//         else
//             node.classList.add('hidden');
// });
// // NOTE: AFTER
// search.addEventListener('keyup', function() {
//     const nodesToHide = [];
//     const nodesToShow = [];
//     for (const node of nodes)
//         if (node.innerText.toLowerCase().includes(this.value.toLowerCase()))
//             nodesToShow.push(node);
//         else
//             nodesToHide.push(node);
//
//     nodesToHide.forEach(node => node.classList.add('hidden'));
//     nodesToShow.forEach(node => node.classList.remove('hidden'));
// });





// // NOTE: Add lazy attribute to images
// BUG: NOT WORKING… Using Lazy Load Remastered (see js.html for for import)
// $(document).ready(function() {
//   $("img").attr("loading", "lazy");
//   console.log("I did it!");
// });
// $(document).ready(function() {
//   $( "img" ).attr({
//     loading: "lazy"
//   });
//   console.log("No, I did it!");
// });
// $(document).ready(function() {
//   $("img").each(function() {
//     console.log("I wanna do it!");
//     $(this).attr("loading", "lazy");
//     console.log($(this).prop("src"));
//   });
// });
// NOTE: https://github.com/tuupola/lazyload/tree/2.x#basic-usage
// $(document).ready(function() {
//   $("figure.lala").lazyload();
//   // let images = document.querySelectorAll(".lala");
//   // new LazyLoad(images);
//   // // new LazyLoad(images, {
//   // //      root: null,
//   // //      rootMargin: "0px",
//   // //      threshold: 0
//   // // });
// });









// :: JQuery ::
// NOTE: Page Fade Out Effect
// ----------------------------------------------------------------
// NOTE: https://stackoverflow.com/questions/19397515/fading-out-a-whole-page-with-jquery
// NOTE: check https://christopheraue.net/design/fading-pages-on-load-and-unload for another process
//
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
// NOTE: Show/Hide Toggle
// ----------------------------------------------------------------
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




// :: JavaScript ::
// NOTE: Show/Hide Element Toggle button
// ----------------------------------------------------------------
//
$(document).ready(function() {

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

});




// -**--**--**--**-        -**--**--**--**-        -**--**--**--**-
// ----------------------------------------------------------------
// NOTE: POPUPS (MODAL)
// ----------------------------------------------------------------


// :: JQuery ::
// NOTE: Modal Popup
// ----------------------------------------------------------------
// popModal function for showing imaage(s)
// $(function() {
$(document).ready(function() {
  $('.popModal').on('click', function() {
    // $('#modalDialog').attr('class', $(this).find('img').attr('data-modal-style'));
    // $('#modalDialog').toggleClass($(this).find('img').attr('data-modal-style'));
    $('.modal-content').attr('class', 'modal-content ' + $(this).attr(
      'data-style'));
    $('.imagePreview').attr('src', $(this).find('img').attr('src'));
    // $('.imageCaption').text($(this).find('figcaption').text());
    $('.imageCaption').text($(this).find('img').attr('data-figcaption'));
    $('.imageDetail').html($(this).find('img').attr('data-figdetail')).text();

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








// NOTE: Make Full Screen Element
// $(document).ready(function() {
//   $('#theButton').click(function() {
//     $('#theDiv').css({
//         position: 'fixed',
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//         zIndex: 999
//     });
//   });
// });
$(document).ready(function() {
  // NOTE: remove unused "el" obejct from function
  $('[id^="theButton-"]').click(function(el) {
    var clickedBtnID = $(this).attr('id'); // or var clickedBtnID = this.id
    // console.log('you clicked on button #' + clickedBtnID);
    var clickedBtnData = $(this).attr('data-modal-div'); // or var clickedBtnID = this.id
    // console.log('you clicked on button #' + clickedBtnData);
    // console.log('[id^="' + clickedBtnData + '"]');
    $('[id^="' + clickedBtnData + '"]').css({
        position: 'fixed',
        top: '30vh',
        right: '30vh',
        bottom: '30vh',
        left: '30vh',
        zIndex: 999,
        'transition-delay': '0ms'
    });

    $('[id^="' + clickedBtnData + '"]').css({
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 999,
        'transition-delay': '0ms'
    });

  });
});









// -**--**--**--**-        -**--**--**--**-        -**--**--**--**-
// ----------------------------------------------------------------
// NOTE: NAVIGATION
// ----------------------------------------------------------------


// :: JavaScript ::
// NOTE: Navigation Effects
// ----------------------------------------------------------------
// Change the hight or effect of the global navbar
// called in
// Navbar Effect
function navbarFX() {

  var HAS_LOCAL_NAV = false;
  console.log(HAS_LOCAL_NAV);
  if ($('nav#global-nav').hasClass('HAS_LOCAL_NAV')) {
    HAS_LOCAL_NAV = true;
  };
  console.log(HAS_LOCAL_NAV);

  $(window).on('load resize scroll', function() {

    // NOTE: Scrolled beyond 132px
    if ($(window).scrollTop() >= 132) {
      // $('.navbar-fixed-top').removeClass('box-shadow').removeClass('short-nav');
      // $('nav#global-nav').addClass('box-shadow').removeClass('short-nav');
      if (! HAS_LOCAL_NAV) {
        $('nav#global-nav').addClass('box-shadow').addClass('short-nav');
      }
      console.log('A LOT');

      $('#local-nav-placeholder').removeClass('my_action_class');
      $('nav#local-nav').addClass('box-shadow').addClass('no-sticking').addClass('local-nav-sticking');
      // $('nav#local-nav').addClass('no-sticking').addClass('local-nav-sticking');
      // $('.local-nav-background').addClass('box-shadow');



    // NOTE: IN the 66px – 131px range
    } else if ($(window).scrollTop() >= 66) {
      // $('.navbar-fixed-top').addClass('box-shadow').addClass('short-nav');
      // $('nav#global-nav').addClass('box-shadow').addClass('short-nav');
      if (! HAS_LOCAL_NAV) {
        $('nav#global-nav').addClass('box-shadow').addClass('short-nav');
      }
      console.log('A LITTLE');

      $('#local-nav-placeholder').addClass('my_action_class');
      $('nav#local-nav').removeClass('no-sticking');

    // NOTE: Less than 65px scroll
    } else {
      // $('.navbar-fixed-top').removeClass('box-shadow').removeClass('short-nav');
      $('nav#global-nav').removeClass('box-shadow').removeClass('short-nav');
      console.log('NOTHING');

      $('#local-nav-placeholder').removeClass('my_action_class');
      $('nav#local-nav').removeClass('box-shadow').removeClass('local-nav-sticking').addClass('no-sticking');
      // $('nav#local-nav').removeClass('local-nav-sticking').addClass('no-sticking');
      // $('.local-nav-background').removeClass('box-shadow');

    };

  });
}

// NOTE: Look into throttleing the on scroll calls to help with performance
// NOTE: throttling function
// function throttle(func, timeFrame) {
//   var lastTime = 0;
//   return function () {
//       var now = new Date();
//       if (now - lastTime >= timeFrame) {
//           func();
//           lastTime = now;
//       }
//   };
// }
// NOTE: debounce pattern for throttling
// function debounce(method, delay) {
//     clearTimeout(method._tId);
//     method._tId= setTimeout(function(){
//         method();
//     }, delay);
// }
//
// $(window).scroll(function() {
//     debounce(handleScroll, 100);
// });




// :: JQuery ::
// NOTE: Scroll to Anchor Tag Offset
// ----------------------------------------------------------------
// $(document).ready(function() {
//   var offset = $(':target').offset();
//   var scrollto = offset.top - 88; // minus fixed header height
//   $('html, body').animate({scrollTop:scrollto}, 0);
// });






// JQuery to call JavaScript functions
// ----------------------------------------------------------------
$(document).ready(function() {
  //  window.alert("OK");
  navbarFX();
});






// :: JQuery ::
// Navbar "ACTIVE" Button Effect
// ----------------------------------------------------------------
// TODO: Check to see that his is being used.
// $(document).ready(function() {
//   $(".nav a").on("click", function(){
//      $(".nav").find(".active").removeClass("active");
//      $(this).parent().addClass("active");
//   });
// });
$(document).ready(function() {

  function setActiveLinks() {
    var current = location.pathname;
    $('.local-nav li a').each(function() {
      var $this = $(this);
      // Get hash value
      var $hash = location.href.substr(location.href.indexOf('#') + 1);
      if ($this.attr('href') == '#' + $hash) {
        $this.parent().addClass('active');
      }
    })
  }

  setActiveLinks();

  $('.local-nav li a').click(function() {
    $('.local-nav li').removeClass('active');
    $(this).parent().addClass('active');
  });

});




// :: JQuery ::
// Global Nav Menu Button
// ----------------------------------------------------------------
//
// TODO: Add wondowScrollPosition function
//      See _navigation-global.sass:846
$(document).ready(function() {

  $("#global-nav-menustate").change(function() {

    var menustate = $(this)[0].checked;

    if (menustate) {
      // console.log("menustate: " + menustate);

      // windowScrollPosition();

      $("html").addClass("global-nav-noscroll global-nav-noscroll-long");

      $("#global-nav").addClass("menu-opening");
      $("#global-nav").delay(800).queue(function(){
        $(this).removeClass("menu-opening").dequeue();
      });

      // $("#global-nav").addClass("menu-opening");

    } else {
      // console.log("menustate: " + menustate);
      $("html").removeClass("global-nav-noscroll global-nav-noscroll-long");

      // windowScrollPosition();

      $("#global-nav").removeClass("menu-opening");
      $("#global-nav").addClass("menu-closing");
      $("#global-nav").delay(800).queue(function(){
        $(this).removeClass("menu-closing").dequeue();
      });
    };

  });

});


// :: JQuery ::
// Local Nav Menu Button
// ----------------------------------------------------------------
//
// TODO: add callback when nav-menu-item/link is clicked to dismiss dropdown
$(document).ready(function() {

  $("#local-nav-menustate").change(function() {

    var menustate = $(this)[0].checked;

    if (menustate) {
      // console.log("menustate: " + menustate);

      // windowScrollPosition();

      $("html").addClass("global-nav-noscroll global-nav-noscroll-long LOCAL_NAV_ACTION");

      $("#local-nav").addClass("menu-opening");
      $("#local-nav").delay(800).queue(function(){
        $(this).removeClass("menu-opening").dequeue();
      });

      // $("#global-nav").addClass("menu-opening");

    } else {
      // console.log("menustate: " + menustate);
      $("html").removeClass("global-nav-noscroll global-nav-noscroll-long LOCAL_NAV_ACTION");

      // windowScrollPosition();

      $("#local-nav").removeClass("menu-opening");
      $("#local-nav").addClass("menu-closing");
      $("#local-nav").delay(800).queue(function(){
        $(this).removeClass("menu-closing").dequeue();
      });
    };

  });

});






// -**--**--**--**-        -**--**--**--**-        -**--**--**--**-
// ----------------------------------------------------------------
// NOTE: MODAL
// ----------------------------------------------------------------



// :: JQuery ::
// NOTE: Init and toggle modal state on load and resize
// ----------------------------------------------------------------

var showModalTileBack = false;

// function toggleModalState() {
//   if ($(window).width() <= 734){
//     showModalTileBack = true;
//   }	else {
//     showModalTileBack = false;
//   };
// };
function toggleModalState(){showModalTileBack=$(window).width()<=734};

$(document).ready(function(){
  toggleModalState();
  // console.log("Init toggleModalState showModalTileBack: " + showModalTileBack);

  $(window).resize(function(){
    toggleModalState();
    // console.log("resize toggleModalState showModalTileBack: " + showModalTileBack);
  });

});






// -**--**--**--**-        -**--**--**--**-        -**--**--**--**-
// ----------------------------------------------------------------
// NOTE: FILE FLIP
// ----------------------------------------------------------------


// :: JQuery ::
// Module: tile-flip
// ----------------------------------------------------------------
// NOTE: Flip selected tile element on a page
// NOTE: This is being used for (tile-flip) tiles


var hasViewportLocation = false;
var currentScrollTop = $("html").scrollTop();

var elementExists = false;
var watchElement = "";
// var viewportLocation = 0;

var isWatching = 0;
// console.log("initial isWatching: FALSE [" + isWatching + "]");


$(document).ready(function() {

  // NOTE: windowScrollPosition
  // Function for Modal FullScreen Content
  // Moves the HTML view back to the positon before showing the modal

  // NOTE: window scroll position helper function
  function windowScrollPosition() {
    if (hasViewportLocation) {
      // Set viewport location
      $("html").scrollTop(currentScrollTop);
      hasViewportLocation = 0;
    } else {
      // Get viewport location
      currentScrollTop = $("html").scrollTop();
      hasViewportLocation = 1;
    };

  };

  // NOTE: Is in viewport helper function
  var isInViewport = function (elem) {
    // console .log(elem);
    var elementBCR = $(elem)[0].getBoundingClientRect();
    var boxPadding = 210
    return (
      // elementBCR.top >= 0 &&
      elementBCR.top >= 0 - elementBCR.height + boxPadding &&
      // elementBCR.left >= 0 &&
      // elementBCR.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      elementBCR.bottom <= (window.innerHeight + elementBCR.height - boxPadding)
      // elementBCR.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  function watcher() {
    if (isWatching) {
      // console .log("** watcher isWatching: TRUE [" + isWatching +"]");
      testIsElementInViewport(watchElement);
    } else {
      // console .log("** watcher isWatching: FALSE [" + isWatching +"]");
    };
  };

  function here() {
    $(window).on('scroll', function () {
      if (isWatching) {
        watcher();
      };
    });
  };

  function startWatching() {
    // console .log("Start Watching \\\\\\\\");
    isWatching = 1
    // console .log("watching:");
    // console .log(watchElement);
    here();
  };

  function stopWatching() {
    // console .log("Stop Watching ////");
    isWatching = 0;
    watchElement = null;
    // console .log("watching:");
    // console .log(watchElement);
  };



  var testIsElementInViewport = function(elem) {
    // console .log("watching: " + elem);
    // console .log(elem);
    if (isInViewport(elem)) {
      // console .log("testIsElementInViewport isInViewport TRUE: " + elem);
      return;
    }
    // console .log("testIsElementInViewport isInViewport FALSE: " + elem);
    $(".tile-overlay").click();
    stopWatching();
  };



  // NOTE: BUTTONS


  // NOTE: Tile Button
  // NOTE: flip card to back
  // if the @media screen is sm show modal
  // TODO: add a call back or section for expand tile (expand tile to full-screen modal)
  $(".open-tile").click(function() {
    if (showModalTileBack) {
      // console .log(".open-tile.click showModalTileBack = TRUE [" + showModalTileBack + "]");
      // console .log("elementExists = [" + elementExists + "]");
      // console .log("*** Showing the Modal Dialog ***");
      // Modal dialog
      var theModal = $("#modal-full");
      // Modal Content
      var theModalContent = theModal.find($(".content-column"));
      var theModalContentCTA = theModal.find($(".content-CTA"));
      // Source Tile
      var thisTile = $(this).closest(".tile");
      // Tile Content
      var thisTileContent = thisTile.find('[class*="back-face"]').first().find('[class*="content-column"]').clone(true);
      theModalContent.replaceWith(thisTileContent)
      var thisTileContentCTA = thisTile.find('[class*="back-face"]').first().find('[class*="tile-backface-link-item"]').clone(true);
      theModalContentCTA.html(thisTileContentCTA)


      // NOTE: Get the current HTML Scroll position
      windowScrollPosition();

      // // disable Bloom module (animation)
      // $(".bloom-wrapper").css("display": "none");
      // $(".bloom-wrapper").addClass("pause-animation");

      // set up the modal space and display modal dialog
      $("html").addClass("has-modal-full-viewport");
      $("main").addClass("has-modal");
      theModal.addClass("modal-open");

    // Otherwise, flip the tile
    } else {
      // console .log(".open-tile.click showModalTileBack = FALSE [" + showModalTileBack + "]");
      // console .log("*** Showing the Tile Back ***");

      $(this).closest(".tile").addClass("flip-card transitioning");
      $(".tile-overlay").addClass("fade-in");

      // NOTE: Element Exists is to handle scrolling
      elementExists = true;
      watchElement = $(this).closest(".tile.flip-card.transitioning")
      // console .log("SET elementExists = TRUE [" + elementExists + "]");
      // console .log("watchElement: " + watchElement);
      // console .log(watchElement);
      // TODO: move tile/scroll observer here
      // console.log("Call watchViewport");

      // vpStart();
      // watchViewport();
      isWatching = 1;
      // console .log("- isWatching = TRUE [" + isWatching + "]");
      startWatching();

    }

  });


  // NOTE: Back Tile Close Button
  // NOTE: flip tile to front
  $(".close-tile").click(function() {
    // console .log(".open-tile.click showModalTileBack = FALSE [" + showModalTileBack + "]");
    // console .log("*** Closing the Tile Back (from button click) ***");

    $(this).closest(".tile").removeClass("flip-card");
    $(".tile-overlay").removeClass("fade-in");
    $(".tile-overlay").addClass("fade-out");

    elementExists = false
    // console .log("SET elementExists = FALSE [" + elementExists + "]");

    // vpStop();
    isWatching = 0;
    // console .log("- isWatching = FALSE [" + isWatching + "]");
    stopWatching();

    $(this).closest(".tile").delay(800).queue(function(){
      $(this).removeClass("transitioning").dequeue();
    });
    $(".tile-overlay").delay(800).queue(function(){
      $(this).removeClass("fade-out").dequeue();
    });

  });


  // NOTE: Full-Modal Close Button
  // NOTE: Close the modal-full-viewport dialog
  $("#modal-full .modal-close").click(function() {
    // console .log("#modal-full .modal-close.click showModalTileBack = [" + showModalTileBack + "]");
    // console .log("*** Closing the Modal Dialog ***");

    var theModal = $(".modal.modal-full-viewport.modal-tile-backface");
    theModal.removeClass("modal-open");

    // // enable Bloom module (animation)
    // $(".bloom-wrapper").css("display": "block");
    // $(".bloom-wrapper").removeClass("pause-animation");

    $("main").removeClass("has-modal");
    $("html").removeClass("has-modal-full-viewport");

    // return to the saved HTML Scroll posiiton
    windowScrollPosition();
  });


  // NOTE: Overlay Button
  // NOTE: make overlay a button - to flip tile back over
  $(".tile-overlay").click(function() {

    // console .log("*** Closing the Tile Back (from overlay) ***");
    var $tile = $(".tile.flip-card");
    $tile.removeClass("flip-card");

    $(this).removeClass("fade-in");
    $(this).addClass("fade-out");

    // NOTE: Element Exists is to handle scrolling
    elementExists = false
    // console .log("SET elementExists = FALSE [" + elementExists + "]");

    // vpStop();
    isWatching = 0;
    // console .log("- isWatching = FALSE [" + isWatching + "]");
    stopWatching();


    $tile.delay(800).queue(function(){
      $(this).removeClass("transitioning").dequeue();
    });
    $(this).delay(800).queue(function(){
      $(this).removeClass("fade-out").dequeue();
    });

  });


});












// -**--**--**--**-        -**--**--**--**-        -**--**--**--**-
// ----------------------------------------------------------------
// NOTE: TOC/ASIDE
// ----------------------------------------------------------------


// :: JQuery ::
// NOTE: Table of Contents module
// ----------------------------------------------------------------
// Removes empty nested ul and li tags from Hugo generated TableOfContents
// Sets fade effect, addes onclck functionality
$(document).ready(function(){
    // $("#toc_aside").find("ul, li").contents().unwrap();
    $("#TableOfContents").find("a").attr('data-js-page-fade', 'false'); // set the tag attribute to unbind page fade effect
    $("#TableOfContents").find("a").attr('onclick', 'closeAside()'); // add onclick function to close aside
    // BUG: There's an issue when it comes to nested ul/li elements. Need to remove the first UL/LI pair, only.
    // NOTE: Removed the first line that was unwrapping the content, removing the UL/LI tags, as it had repercussions in the toc DOM


    // :: JavaScript ::
    // NOTE: Show/Hide Aside (Table of Contents module)
    // ----------------------------------------------------------------
    /* Set the width of the aside to 250px (show it) */
    function openAside() {
      document.getElementById("toc_aside").style.right = "0";
    }
    /* Set the width of the sidebar to 0 (hide it) */
    function closeAside() {
      document.getElementById("toc_aside").style.right = "-100vw";
    }
});







// -**--**--**--**-        -**--**--**--**-        -**--**--**--**-
// ----------------------------------------------------------------
// NOTE: WOW Setup and Init
// ----------------------------------------------------------------


// :: JavaScript ::
// WOW.js setup
// ----------------------------------------------------------------
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
// (Re?)init WOW on page refresh (On page load, duh.)
// ----------------------------------------------------------------
$(window).on('load', function() {
  new WOW().init(); // Is this the second instance of WOW?
});
// NOTE: Check to see which is being used, and remove the other





// ----------------------------------------------------------------
// -**--**--**--**-        -**--**--**--**-        -**--**--**--**-
// -**--**--**--**-        -**--**--**--**-        -**--**--**--**-
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// NOTE: bomberryDev.js TEMP
// ----------------------------------------------------------------
// ----------------------------------------------------------------
