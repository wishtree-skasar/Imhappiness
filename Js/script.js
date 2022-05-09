$(function () {
  var coll = document.getElementsByClassName("collapse");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

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
        items: 3,
        nav: false,
      },
      764: {
        items: 3,
        nav: false,
      },
      998: {
        items: 4,
        nav: false,
      },
      1200: {
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
        items: 3,
        nav: false,
      },
      764: {
        items: 3,
        nav: false,
      },
      998: {
        items: 4,
        nav: false,
      },
      1200: {
        items: 5,
        nav: false,
      },
    },
  });
});
