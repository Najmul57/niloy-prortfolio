(function ($) {
  "use strict";




  // top-progress-bar
  const filled = document.querySelector(".filled");

  function scroll() {
    filled.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      }%`;
    requestAnimationFrame(scroll);
  }
  scroll();






  // main-menu start
  $(".navbar-icon").click(function () {
    $(".main-menu").addClass("showmenu");
    $(".offcanva-menu-overlay").addClass("info-open");
  });
  $(".main-menu,.offcanva-menu-overlay").click(function () {
    $(".main-menu").removeClass("showmenu");
    $(".offcanva-menu-overlay").removeClass("info-open");
  });




  //upcoming start
  $(".upcoming-active").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 5000,
    autoplaySpeed: 1000,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  //release start
  $(".release-active").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 800,
    autoplaySpeed: 1000,
    rtl: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // video popup
  $(".popup-video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  // gallery

  // filmography active
  $(".fimography-active").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 800,
    autoplaySpeed: 1000,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // tv films active
  $(".tv-films-active").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplaySpeed: 500,
    rtl: true,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // tv serias active
  $(".tv-series-active").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplaySpeed: 500,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // short films active
  $(".short-films-active").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    rtl: true,
    smartSpeed: 500,
    autoplaySpeed: 500,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // short films active
  $(".music-active").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplaySpeed: 500,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // short films active
  $(".web-series-active").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplaySpeed: 500,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // gallelry
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  // fixed bottom style
  const wrapper = document.getElementById("blob-wrapper");

  const animateBubble = (x) => {
    const blob = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    blob.className.baseVal = "blob";
    blob.setAttributeNS(null, "style", `left: ${x - 250}px;`);
    blob.setAttributeNS(null, "viewBox", "0 -4 14 4");

    path.setAttributeNS(
      null,
      "d",
      "m 0 0 v -1 q 3 0 5 -2 t 4 0 q 2 2 5 2 v 1 z"
    );

    blob.appendChild(path);

    wrapper.appendChild(blob);

    setTimeout(() => wrapper.removeChild(blob), 1000);
  };

  window.addEventListener("mousemove", function (e) {
    animateBubble(e.clientX);
  });

  window.addEventListener("touchmove", function (e) {
    animateBubble(e.changedTouches[0].clientX);
  });

  window.addEventListener("load", function (e) {
    if (!navigator.userAgentData.mobile) {
      document.getElementById("sub").firstChild.textContent =
        "Move your cursor!";
    } else {
      document.getElementById("sub").firstChild.textContent =
        "Touch, hold and move!";
    }
  });


  // aos

  AOS.init({

    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,


    offset: 0,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

  });

  // scrollup
  $(function () {
    $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "300", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-arrow-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
  });
})(jQuery);
