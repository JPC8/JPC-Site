 tippy('#discordHover', {
    content: 'Josh Cyril#0177',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    appendTo: document.body
  });


  tippy('#githubHover', {
    content: 'JPC8',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    appendTo: document.body
  });

  tippy('#linkedinHover', {
    content: 'in/jpc8',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    appendTo: document.body
  });

  tippy('.tip_mode', {
    content: 'Dark / Light',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    appendTo: document.body
  });

  tippy('.tip_theme', {
    content: '<div class="theme-container"> <p>Themes:<p> <div class="theme-cr"><span class = "theme-cr-1"></span> <span class = "theme-cr-2"></span> <span class = "theme-cr-3"></span></div></div>',
    interactive: true,
    interactiveDebounce: 40,
    interactiveBorder: 10,
    zIndex: 99999,
    animation: 'scale',
    offset: [-36, 2],
    theme: 'themeSelector',
    touch: 'hold',
    delay: [400, null],
    allowHTML: true,
    appendTo: document.body,
  });

  tippy('#bs_tip', {
    content: 'Breakpoints, Layouts, box-models',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    placement: 'bottom',
    appendTo: document.body
  });

  tippy('#fas_tip', {
    content: 'sections, link icons',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    placement: 'bottom',
    appendTo: document.body
  });

  tippy('#icofy_tip', {
    content: 'social media, menu bar',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    placement: 'bottom',
    appendTo: document.body
  });

  tippy('#aso_tip', {
    content: 'Animate on scroll !! cool ri8?',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    placement: 'bottom',
    appendTo: document.body
  });

  tippy('#typ_tip', {
    content: 'Typing animation, Home section',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    placement: 'bottom',
    appendTo: document.body
  });
  tippy('#cnt_tip', {
    content: 'Numbers counter see in Facts section',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    placement: 'bottom',
    appendTo: document.body
  });
  tippy('#tipy_tip', {
    content: 'Tool-tips !! even this one :)',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    placement: 'bottom',
    appendTo: document.body
  });
  tippy('#iso_tip', {
    content: 'Card filters, see in projects section',
    zIndex: 99999,
    animation: 'scale',
    theme: 'space',
    placement: 'bottom',
    appendTo: document.body
  });

// dynamic text Input area is created and removing when it is copied into clipboard
function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  // when the copy button is triggred
  document.querySelector("#discordHover").onclick = function () {
    Clipboard_CopyTo("Josh Cyril#0177");
  };

//   function CalcDiff(dt1, dt2) {

//     // calculate the time difference of two dates JavaScript
//     var diffTime = (dt2.getTime() - dt1.getTime());
  
//     // calculate the mins
//     var diffMin = diffTime / 1000;
//     diffMin /= 60;
//     var minsDiff = Math.abs(Math.round(diffMin));
  
//     if (minsDiff > 59) {
  
//       // calculate the hours
//       var hoursDiff = Math.abs(Math.round(diffTime / (1000 * 3600)));
  
//       if (hoursDiff > 23) {
  
//         // calculate the day
//         var daysDiff = Math.abs(Math.round(diffTime / (1000 * 3600 * 24)));
  
//         if (daysDiff > 30) {
  
//           // calculate the month
//           var monthDiff = Math.abs(Math.round(diffTime / (1000 * 3600 * 24 * 30)));
  
//           if (monthDiff > 11) {
  
//             // calculate the year
//             var yearDiff = Math.abs(Math.round(diffTime / (1000 * 3600 * 24 * 30 * 12)));
  
//             return CalcDiff = yearDiff + " years"
//           } else {
//             return CalcDiff = monthDiff + " months"
//           }
//         } else {
//           return CalcDiff = (daysDiff = 1 ? daysDiff + " day" : daysDiff + " days") + " ago"
//         }
//       } else {
//         return CalcDiff = hoursDiff + " hours"
//       }
//     } else {
//       return CalcDiff = minsDiff + " mins"
//     }
  
  
//   }
  
//   dt1 = new Date("2021-09-21 07:52:37");
//   dt2 = new Date().getTime();
  
//   console.log(CalcDiff(dt1, dt2))