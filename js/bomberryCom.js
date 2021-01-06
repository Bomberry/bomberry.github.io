// JavaScript and JQuery functions for Bomberry.com - COMPRESSED -
function navbarFX(){$(window).on("load resize scroll",function(){50<=$(window).scrollTop()?$(".navbar-fixed-top").addClass("box-shadow").addClass("short-nav"):$(".navbar-fixed-top").removeClass("box-shadow").removeClass("short-nav")})}$(function(){$("img").on("click",function(){$(".imgSource").attr("src",$(this).attr("src")),$("#imgModal").modal("show")})}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(o){var e;location.pathname.replace(/^\//,"")!=this.pathname.replace(/^\//,"")||location.hostname!=this.hostname||(e=(e=$(this.hash)).length?e:$("[name="+this.hash.slice(1)+"]")).length&&(o.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},300,function(){var o=$(e);if(o.focus(),o.is(":focus"))return!1;o.attr("tabindex","-1"),o.focus()}))}),$(document).on("click","a[href]:not([href^='mailto:'], [href$='javascript:void(0)'], [href$='#'], [data-js-page-fade$='false'])",function(){var o=$(this).attr("href");if(o&&"#"!==o[0])return $("html").fadeOut(function(){location=o}),!1;location.hash=o}),$(window).bind("pageshow",function(o){o.originalEvent.persisted&&window.location.reload()}),$(document).ready(function(){$(".btn-show-all").click(function(){$(this).text(function(o,e){return"show all"==e?"show less":"show all"})})}),$(document).ready(function(){function t(o,e){if(o.classList.contains("is-visible"))return(t=o).style.height=t.scrollHeight+"px",window.setTimeout(function(){t.style.height="0"},1),window.setTimeout(function(){t.classList.remove("is-visible")},350),0;var t,l,i;l=o,i=function(){l.style.display="block";var o=l.scrollHeight+"px";return l.style.display="",o}(),l.classList.add("is-visible"),l.style.height=i,window.setTimeout(function(){l.style.height=""},350)}document.addEventListener("click",function(o){var e;o.target.classList.contains("toggle")&&(o.preventDefault(),(e=document.querySelector(o.target.hash))&&t(e))},!1)}),$(document).ready(function(){$(".popModal").on("click",function(){$(".modal-content").attr("class","modal-content "+$(this).attr("data-style")),$(".imagePreview").attr("src",$(this).find("img").attr("src")),$(".imageCaption").text($(this).find("img").attr("data-figcaption")),$(".imageDetail").text($(this).find("img").attr("data-figdetail")),$("#modal").on("show",function(){$(this).find(".modal-body").css({width:"auto",height:"auto","max-height":"100%"})}),$("#modalDialog").modal("show")})}),$(document).ready(function(){navbarFX()}),$(document).ready(function(){$(".nav a").on("click",function(){$(".nav").find(".active").removeClass("active"),$(this).parent().addClass("active")})});var showModalTileBack=!1;function toggleModalState(){showModalTileBack=$(window).width()<=734}$(document).ready(function(){toggleModalState(),$(window).resize(function(){toggleModalState()})});var hasViewportLocation=!1,currentScrollTop=$("html").scrollTop(),elementExists=!1,watchElement="",isWatching=0;$(document).ready(function(){function l(){hasViewportLocation=hasViewportLocation?($("html").scrollTop(currentScrollTop),0):(currentScrollTop=$("html").scrollTop(),1)}function i(){$(window).on("scroll",function(){isWatching&&(isWatching?(console.log("** watcher isWatching: TRUE ["+isWatching+"]"),o(watchElement)):console.log("** watcher isWatching: FALSE ["+isWatching+"]"))})}function e(){console.log("Stop Watching ////"),isWatching=0,watchElement=null,console.log("watching:"),console.log(watchElement)}var o=function(o){console.log("watching: "+o),console.log(o),function(o){console.log(o);var e=$(o)[0].getBoundingClientRect();return e.top>=0-e.height+210&&e.bottom<=window.innerHeight+e.height-210}(o)?console.log("testIsElementInViewport isInViewport TRUE: "+o):(console.log("testIsElementInViewport isInViewport FALSE: "+o),$(".tile-overlay").click(),e())};$(".open-tile").click(function(){var o,e,t;showModalTileBack?(console.log(".open-tile.click showModalTileBack = TRUE ["+showModalTileBack+"]"),console.log("elementExists = ["+elementExists+"]"),console.log("*** Showing the Modal Dialog ***"),e=(o=$("#modal-full")).find($(".content-column")),t=$(this).closest(".tile").find('[class*="back-face"]').first().find('[class*="content-column"]').clone(),e.replaceWith(t),l(),$("html").addClass("has-modal-full-viewport"),$("main").addClass("has-modal"),o.addClass("modal-open")):(console.log(".open-tile.click showModalTileBack = FALSE ["+showModalTileBack+"]"),console.log("*** Showing the Tile Back ***"),$(this).closest(".tile").addClass("flip-card transitioning"),$(".tile-overlay").addClass("fade-in"),elementExists=!0,watchElement=$(this).closest(".tile.flip-card.transitioning"),console.log("SET elementExists = TRUE ["+elementExists+"]"),console.log("watchElement: "+watchElement),console.log(watchElement),isWatching=1,console.log("- isWatching = TRUE ["+isWatching+"]"),console.log("Start Watching \\\\\\\\"),isWatching=1,console.log("watching:"),console.log(watchElement),i())}),$(".close-tile").click(function(){console.log(".open-tile.click showModalTileBack = FALSE ["+showModalTileBack+"]"),console.log("*** Closing the Tile Back (from button click) ***"),$(this).closest(".tile").removeClass("flip-card"),$(".tile-overlay").removeClass("fade-in"),$(".tile-overlay").addClass("fade-out"),elementExists=!1,console.log("SET elementExists = FALSE ["+elementExists+"]"),isWatching=0,console.log("- isWatching = FALSE ["+isWatching+"]"),e(),$(this).closest(".tile").delay(800).queue(function(){$(this).removeClass("transitioning").dequeue()}),$(".tile-overlay").delay(800).queue(function(){$(this).removeClass("fade-out").dequeue()})}),$("#modal-full .modal-close").click(function(){console.log("#modal-full .modal-close.click showModalTileBack = ["+showModalTileBack+"]"),console.log("*** Closing the Modal Dialog ***"),$(".modal.modal-full-viewport.modal-tile-backface").removeClass("modal-open"),$("main").removeClass("has-modal"),$("html").removeClass("has-modal-full-viewport"),l()}),$(".tile-overlay").click(function(){console.log("*** Closing the Tile Back (from overlay) ***");var o=$(".tile.flip-card");o.removeClass("flip-card"),$(this).removeClass("fade-in"),$(this).addClass("fade-out"),elementExists=!1,console.log("SET elementExists = FALSE ["+elementExists+"]"),isWatching=0,console.log("- isWatching = FALSE ["+isWatching+"]"),e(),o.delay(800).queue(function(){$(this).removeClass("transitioning").dequeue()}),$(this).delay(800).queue(function(){$(this).removeClass("fade-out").dequeue()})})}),$(document).ready(function(){$("#TableOfContents").find("a").attr("data-js-page-fade","false"),$("#TableOfContents").find("a").attr("onclick","closeAside()")});var wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(o){},scrollContainer:null});$(window).on("load",function(){(new WOW).init()});
