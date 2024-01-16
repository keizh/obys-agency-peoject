var body = document.querySelector("body");
body.classList.add("hiding-scrollbar");

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}
function enableScroll() {
  window.onscroll = function () {};
}

function loader() {
  var tl = gsap.timeline({
    onComplete: function () {
      enableScroll();
      body.classList.remove("hiding-scrollbar");
    },
  });

  tl.from(".loader .line h1 ", {
    y: 150,
    stagger: 0.25,
    delay: 0.4,
    duration: 0.75,
  });

  tl.from(".loader .timer-container ", {
    opacity: 0,
    onStart: function () {
      var timer = document.querySelector("#timer");

      var count = 0;
      var int = setInterval(function () {
        count++;
        if (count === 100) {
          clearInterval(int);
        }

        timer.textContent = `${count}`;
      }, 25);
    },
  });

  tl.to(".loader .line #now ", {
    animationName: "nowanime",
  });

  tl.from(".loader .please-wait h6", {
    opacity: 0,
  });

  tl.to(".loader", {
    delay: 1.5,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".page1", {
    delay: 0.1,
    y: 1600,
    duration: 0.5,
    opacity: 1,
    ease: Power4,
  });

  tl.to(".loader", {
    display: "none",
  });
  tl.from("nav", { opacity: 0, duration: 0.1 });

  tl.from(".hero  h1 , .hero  h2 ", {
    y: 100,
    stagger: 0.2,
  });

  // tl.to(".page1 #hero1::before , .page1 #hero4::before", {
  //   opacity: 1,
  // });
}

function cursorAnimation() {
  // gsap.to(".page1 #hero4::before", {});
  document.addEventListener("mousemove", function (e) {
    gsap.to("#cursor", {
      left: e.x,
      top: e.y,
    });
  });

  Shery.makeMagnet(".nav-part2 h4" /* Element to target.*/, {});
}

disableScroll();
loader();

cursorAnimation();
