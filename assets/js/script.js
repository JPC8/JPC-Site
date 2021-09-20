!(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
      if ($('#preloader').length) {
        $('#preloader').delay(10).fadeOut('slow', function() {
          $(this).remove();
        });
      }
    });

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.navv-menu a, .scrollto', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();

          var scrollto = target.offset().top;

          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');

          if ($(this).parents('.navv-menu, .mobile-nav').length) {
            $('.navv-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }

          // if ($('body').hasClass('mobile-nav-active')) {
          //   $('body').removeClass('mobile-nav-active');
          //   $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          // }
          return false;
        }
      }
    });

      // Activate smooth scroll on page load with hash links in the url
      $(document).ready(function() {
        if (window.location.hash) {
          var initial_nav = window.location.hash;
          if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top;
            $('html, body').animate({
              scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
          }
        }
      });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.navv-menu');

    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop() + 300;

      nav_sections.each(function() {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 200) {
          $(".navv-menu ul:first li:first").addClass('active');
        }
      });
    });

    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });

    /*==================== MENU SHOW Y HIDDEN ====================*/
    const navMenu = document.getElementById('navv-menu'),
    navToggle = document.getElementById('navv-toggle'),
    navClose = document.getElementById('navv-close')

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if(navToggle){
    navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
    })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if(navClose){
    navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
    })
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.navv-link')

    function linkAction(){
    const navMenu = document.getElementById('navv-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    // Hero typed
    if ($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
      delay: 15,
      time: 800
    });

    // Skills section
    $('.skills-content').waypoint(function() {
      $('.progress .progress-bar').each(function() {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
    }, {
      offset: '80%'
    });

    // Init AOS
    // function aos_init() {
    //   AOS.init({
    //     duration: 800,
    //     once: true
    //   });
    // }

    /*==================== ACCORDION SKILLS ====================*/
    const skillsContent =document.getElementsByClassName('skills-content'),
    skillsHeader =document.querySelectorAll('.skills-header')

    function toggleSkills() {
      let itemClass = this.parentNode.className

      for(let i =1; i<skillsContent.length; i++) {
      skillsContent[i].className = 'skills-content skills-close';
      }
      if(itemClass === 'skills-content skills-close'){
      this.parentNode.className = 'skills-content skills-open'
      }
    }

    skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
    })

    // Dark theme
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'fa-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    })

    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out-back",
        once: true
      });
    }
        /*==================== QUALIFICATION TABS ====================*/
        const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')
    
        tabs.forEach(tab =>{
        tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);
    
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
    
        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active', 'quali_TabA')
        })
        tab.classList.add('qualification__active', 'quali_TabA')
        })
        })

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $('.venobox').venobox({
      // 'framewidth' : '95%',                         
      // 'frameheight': '90%',                      
      // 'border'     : '4px',                                                                
      // 'numeratio'  : true,                             
      'share': false
    });

    // Initiate aos_init() function
    aos_init();

  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);

