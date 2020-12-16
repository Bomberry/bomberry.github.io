// JavaScript and JQuery functions for Bomberry.com
// NOTE: DEVELOPMENT
// NOTE: Move to bomberry.js when finished





// :: JavaScript ::
// Blocks of JavaScript

//
var elementOptions = {
    // root: document.querySelector('.flip-card.transitioning'),
    // rootMargin: '0px 0px -100%',
    rootMargin: '0px 0px 0px',
    threshold: [0, 0.8]
}

var observer = new IntersectionObserver(callbackMessage, elementOptions);

// if ('.flip-card.transitioning') {
//   console.log("the element is " + elementExists);
// }
// let target = document.querySelector('.flip-card.transitioning');
// observer.observe(target);



function messageHere() {
  console.log("Here's a message... ");
}

function callbackMessage() {
  console.log("Callback:");
}


function here() {
  $(window).on('scroll', function () {
    if ($('.flip-card.transitioning').length) {
      // console.log("I'm visible!");
      console.log("the element is " + elementExists);

      let target = document.querySelector('.flip-card.transitioning');
      observer.observe(target);

      // messageHere();
    } else {
      // console.log(". . .");
      console.log("the element is " + elementExists);
    }
  });
}

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



// NOTE:
// NOTE: Setting up
const numSteps = 20.0;

let boxElement;

let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";
let increasingShadow = "-100px ratiopx 6px blue"
let decreasingShadow = "100px ratiopx 6px green"
let startOffset = "ratiopx"
let endOffset = "ratiopx"
let thisOffset = "ratiopx"


// Add object to watch
window.addEventListener("load", (event) => {
  boxElement = document.querySelector("#thisThing");
  createObserver();
}, false);


// NOTE: Creating the intersection observer
function createObserver() {
  let observer;
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}

// NOTE: Building the array of threshold ratios
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    // let ratio = i/numSteps;
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

// NOTE: Handling intersection changes
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      // entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
      // entry.target.style.opacity = entry.intersectionRatio;
      entry.target.style.transform = "translateY(startOffset.replace('ratio', entry.intersectionRatio * 100))";
      // entry.target.style.boxshadow = "increasingShadow.replace('ratio', entry.intersectionRatio)";
      console.log(thisOffset.replace("ratio", entry.intersectionRatio * 100));
    } else {
      // entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
      // entry.target.style.opacity = entry.intersectionRatio;
      entry.target.style.transform = "translateY(endOffset.replace('ratio', entry.intersectionRatio * 100))";
      // entry.target.style.boxshadow = "decreasingShadow.replace('ratio', entry.intersectionRatio * 100)";
      console.log(thisOffset.replace("ratio", entry.intersectionRatio * -100));
    }
    console.log(entry.intersectionRatio);

    prevRatio = entry.intersectionRatio;
    console.log(prevRatio);
  });
}



// :: JQuery ::
// Blocks of JQuery







// :: JQuery ::
// WARNING: (Duplicate) Original function in bomberry.js:119
// JQuery to call JavaScript functions
$(function() {
  //  window.alert("OK");
  // modalScrollExit();
  here();
});
