// Import CSS
import "../css/index.css";

// Import images lazy-loading module
import 'lazysizes';
// import lazysizes plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Import home hero swiper function
import { handleHomeHeroSwiper } from "./swiper";

function handleHeaderDropdown() {
    const target = document.querySelector('#header-nav-dropdown-target');

    // Error handling if target is not found
    if (!target) return;

    const dropdownBody = target.querySelector('ul');

    target.addEventListener('mouseover', () => {
        dropdownBody.classList.add('active');
    });

    target.addEventListener('mouseout', () => {
        dropdownBody.classList.remove('active');
    });
}

handleHeaderDropdown();


/* Remove '-' from the list title */

function handleRemoveDash() {
    const titles = document.querySelectorAll('.articles-loop--sidebar h2');

    if (!titles) { return; }

    titles.forEach(title => {
        title.innerText = title.innerText.replace('-', ' ')
    })
}

handleRemoveDash();

// Check if elements exist before invoking related functions
const homeHeroSwiper = document.getElementById('home-hero-swiper');

if (homeHeroSwiper) handleHomeHeroSwiper();


/* Handle mobile nav */

function handleMobileNav() {
    const target = document.querySelector('.js-mobile-menu-target');
    const mobileNav = document.querySelector('.js-mobile-nav');

    if (!target || !mobileNav) { return; }

    const close = mobileNav.querySelector('.mobile-nav__close');

    target.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll')
    })

    close.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll')
    })
}

handleMobileNav();


/* reframe.js
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 2.2.6
   Website : dollarshaveclub.github.io/reframe.js
   Repo    : github.com/yowainwright/reframe.js
   Author  : Jeff Wainwright
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
   !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).reframe=t()}(this,function(){"use strict";return function(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var o=0;o<i.length;o+=1){var r=i[o];if(!(-1!==r.className.split(" ").indexOf(n))){var f=r.getAttribute("height"),d=r.getAttribute("width");if(!(-1<d.indexOf("%")||-1<r.style.width.indexOf("%"))){var s=(f||r.offsetHeight)/(d||r.offsetWidth)*100,a=document.createElement("div");a.className=n;var l=a.style;l.position="relative",l.width="100%",l.paddingTop=s+"%";var p=r.style;p.position="absolute",p.width="100%",p.height="100%",p.left="0",p.top="0",r.parentNode.insertBefore(a,r),r.parentNode.removeChild(r),a.appendChild(r)}}}}});

   /* Custom settings for reframe.js */
   reframe('.post-content iframe:not(.reframe-off)');