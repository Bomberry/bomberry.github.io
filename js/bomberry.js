// Variant of https://bootsnipp.com/snippets/WPD9O
$(function() {
  $('img').on('click', function() {
    $('.imgSource').attr('src', $(this).attr('src'));
    $('#imgModal').modal('show');
  });
});


// Variant of https://css-tricks.com/snippets/jquery/smooth-scrolling/
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


// Navbar "ACTIVE" Button Effect
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});





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
wow.init();

// Reinit WOW on page refresh
$(window).on('load', function() {
  new WOW().init();
});


$(function() {
  //  window.alert("OK");
  navbarFX();
});


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
