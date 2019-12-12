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
