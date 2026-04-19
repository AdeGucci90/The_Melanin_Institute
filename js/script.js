(function ($) {

  "use strict";


  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  $(document).ready(function () {

    /* Video */
    var $videoSrc;
    $('.play-btn').click(function () {
      $videoSrc = $(this).data("src");
    });

    $('#myModal').on('shown.bs.modal', function (e) {

      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#myModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc);
    })


    // testimonial swiper
    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });


    // project swiper
    var swiper = new Swiper(".project-swiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,

        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,

        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 10,

        },
      }
    });

    // product single page
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      autoplay: true,
      loop: true,
      spaceBetween: 8,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    var large_slider = new Swiper(".product-large-slider", {
      autoplay: true,
      loop: true,
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
    });

    window.addEventListener("load", (event) => {
      //isotope
      $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });



      // Initialize Isotope
      var $container = $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });

      $(document).ready(function () {
        //active button
        $('.filter-button').click(function () {
          $('.filter-button').removeClass('active');
          $(this).addClass('active');
        });
      });

      // Filter items on button click
      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          // Show all items
          $container.isotope({ filter: '*' });
        } else {
          // Show filtered items
          $container.isotope({ filter: filterValue });
        }
      });

    });
    // Mobile Menu Fixes: Auto-close offcanvas + smooth scroll handler
    $(document).on('click', '#bdNavbar .nav-link[href^="#"]', function(e) {
      e.preventDefault();
      
      const targetId = $(this).attr('href');
      const $target = $(targetId);
      
      if ($target.length) {
        $('html, body').animate({
          scrollTop: $target.offset().top - 100 // Offset for fixed header
        }, 800, 'swing');
      }
      
      // Close offcanvas
      const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('bdNavbar'));
      if (offcanvas) {
        offcanvas.hide();
      }
    });

    // Smart Sticky Header
    var lastScrollTop = 0;
    var $header = $('#header');
    
    $(window).on('scroll', function() {
      var st = $(this).scrollTop();
      var headerHeight = $header.outerHeight() || 130;
      
      // Toggle fixed position past header height
      if (st > headerHeight) {
        if (!$header.hasClass('fixed-header')) {
          $header.addClass('fixed-header');
          $('body').addClass('header-is-fixed');
        }
      } else {
        $header.removeClass('fixed-header');
        $header.removeClass('header-hidden');
        $('body').removeClass('header-is-fixed');
      }

      // Hide or show based on scroll direction
      if (st > headerHeight) {
        if (st > lastScrollTop && st > headerHeight + 10) {
          // Downscroll
          $header.addClass('header-hidden');
        } else {
          // Upscroll
          $header.removeClass('header-hidden');
        }
      }
      
      lastScrollTop = st;
    });

    initChocolat();
    initJarallax();

  }); // End of a document

})(jQuery);
