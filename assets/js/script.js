!(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
      if ($('#preloader').length) {
        $('#preloader').delay(4000).fadeOut('slow', function() {
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

    // /*==================== REMOVE MENU MOBILE ====================*/
    // const navLink = document.querySelectorAll('.navv-link')

    // function linkAction(){
    // const navMenu = document.getElementById('navv-menu')
    // // When we click on each nav-link, we remove the show-menu class
    // navMenu.classList.remove('show-menu')
    // }
    // navLink.forEach(n => n.addEventListener('click', linkAction))

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
    // $('[data-toggle="counter-up"]').counterUp({
    //   delay: 15,
    //   time: 800
    // });

    const counterUp = window.counterUp.default

    const callback = entries => {
      entries.forEach( entry => {
        const el = entry.target
        if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
          counterUp( el, {
            duration: 1000,
            delay: 12,
          } )
          el.classList.add( 'is-visible' )
        }
      } )
    }

    const IO = new IntersectionObserver( callback, { threshold: 1 } )

    const el = document.querySelectorAll( '.counter' )
    el.forEach((eln)=> {
      IO.observe( eln );
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


    const themeColorBtn = document.getElementById('theme-color')
    var r = document.querySelector(':root');
    var imgs = document.querySelector(".ProfileImg")
    const clrs = [200, 300, 50, 1, 130];
    const ptn = [`linear-gradient(45deg, rgba(106, 106, 106,0.06) 0%, rgba(106, 106, 106,0.06) 50%,rgba(174, 174, 174,0.06) 50%, rgba(174, 174, 174,0.06) 100%),linear-gradient(135deg, rgba(252, 252, 252,0.06) 0%, rgba(252, 252, 252,0.06) 50%,rgba(117, 117, 117,0.06) 50%, rgba(117, 117, 117,0.06) 100%),linear-gradient(90deg, var(--first-color),var(--first-color))`,`radial-gradient(circle at 19% 27%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 14% 15%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 52% 35%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 52% 35%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 57% 90%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 21% 88%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 15% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 0% 66%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 41% 50%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 61% 49%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 62% 81%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 20% 47%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 26% 82%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 46% 9%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 47% 6%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 43% 28%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 67% 100%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%,transparent 5%, transparent 100%),linear-gradient(90deg, var(--first-color),rgb(145, 54, 196))`,`repeating-linear-gradient(0deg, hsla(var(--hue-color),74%,43%,0.15) 0px, hsla(var(--hue-color),74%,43%,0.15) 35px,transparent 35px, transparent 70px),repeating-linear-gradient(90deg, hsla(var(--hue-color),74%,43%,0.15) 0px, hsla(var(--hue-color),74%,43%,0.15) 35px,transparent 35px, transparent 70px),linear-gradient(90deg, var(--first-color-second),var(--first-color-second))`,`repeating-linear-gradient(135deg, var(--first-color) 0px, var(--first-color) 35px,hsl(var(--hue-color),71%,47%) 35px, hsl(var(--hue-color),71%,47%) 70px,hsl(var(--hue-color),65%,29%) 70px, hsl(var(--hue-color),65%,29%) 105px)`,`linear-gradient(45deg, rgba(204, 169, 114, 0.45) 0%, rgba(204, 169, 114, 0.45) 12%,rgba(147, 120, 114, 0.45) 12%, rgba(147, 120, 114, 0.45) 13%,rgba(176, 145, 114, 0.45) 13%, rgba(176, 145, 114, 0.45) 25%,rgba(233, 194, 114, 0.45) 25%, rgba(233, 194, 114, 0.45) 26%,rgba(89, 70, 115, 0.45) 26%, rgba(89, 70, 115, 0.45) 33%,rgba(32, 21, 115, 0.45) 33%, rgba(32, 21, 115, 0.45) 38%,rgba(118, 95, 115, 0.45) 38%, rgba(118, 95, 115, 0.45) 76%,rgba(61, 46, 115, 0.45) 76%, rgba(61, 46, 115, 0.45) 100%),linear-gradient(135deg, rgb(22, 238, 29),rgb(30, 166, 207))`];
    const ptnSiz = [`70px 70px`, '','', '', '']
    const imgClr = ["/assets/img/clrs-profile/cyan-min.jpeg","/assets/img/clrs-profile/purple-min.png","/assets/img/clrs-profile/yellow-min.jpeg","/assets/img/clrs-profile/red-min.jpeg","/assets/img/clrs-profile/green-min.png"]
    let randomClrCtr = 0;

    
    // Create a function for setting a variable value
    themeColorBtn.addEventListener('click', () => {
      let randomClr = Math.floor(Math.random() * clrs.length);
      let clrRan = randomClr
      while(clrRan == randomClrCtr) {
        randomClr = Math.floor(Math.random() * clrs.length);
        break;
      }
      randomClrCtr = randomClr
      // Set the value of variable
      r.style.setProperty('--hue-color', clrs[randomClr]);
      r.style.setProperty('--hero-pattern', ptn[randomClr]);
      r.style.setProperty('--hero-size', ptnSiz[randomClr]);
      imgs.src = imgClr[randomClr]; 
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

    // Initiate aos_init() function
    aos_init();

  });

  $(window).on('load', function() {
    aos_init();
  });

  // Portfolio details carousel
  // $(".portfolio-details-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   items: 1
  // });

})(jQuery);

