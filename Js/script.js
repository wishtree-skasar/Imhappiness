$(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    // e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("current");
    });
    $(this).addClass("current");

    var target = this.hash,
      menu = target;
    $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - $("header").innerHeight(),
        },
        1000,
        "swing"
      );
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop() + $("header").innerHeight();
    $(".nav-list a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav-list ul li a").removeClass("current");
        currLink.addClass("current");
      } else {
        currLink.removeClass("current");
      }
    });
  }
  // sidebar open close
  $(".nav-btn").on("click", function () {
    $(".sidebar").addClass("show-links");
    $(".nav-logo").css("z-index", "-1");
    $(".bottom-nav").css("display", "none");
  });

  $(".close-btn").on("click", function () {
    $(".sidebar").removeClass("show-links");
    $(".bottom-nav").css("display", "block");
  });

  $(".bottom-links a").on("click", function () {
    $(".sidebar").removeClass("show-links");
    $(".bottom-nav").css("display", "block");
  });

  $("#ambassadors").owlCarousel({
    items: 5,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: [],
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      382: {
        items: 2,
        nav: false,
      },
      553: {
        items: 3,
        nav: false,
      },
      767: {
        items: 4,
        nav: false,
      },
      980: {
        items: 5,
        nav: false,
      },
    },
  });

  $("#members").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: [],
    responsiveClass: true,
    nav: false,
    responsive: {
      1200: {
        items: 1,
        nav: false,
      },
    },
  });

  $("#associations").owlCarousel({
    items: 3,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: [],
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      765: {
        items: 2,
        nav: false,
        loop: false,
      },
      1200: {
        items: 3,
        nav: false,
      },
    },
  });

  $("#img-gallery").owlCarousel({
    items: 5,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: true,
    navText: [],
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      382: {
        items: 2,
        nav: false,
      },
      553: {
        items: 3,
        nav: false,
      },
      767: {
        items: 4,
        nav: false,
      },
      980: {
        items: 5,
        nav: false,
      },
    },
  });
});
