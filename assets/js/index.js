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

// Check if elements exist before invoking related functions
const homeHeroSwiper = document.getElementById('home-hero-swiper');

if (homeHeroSwiper) handleHomeHeroSwiper();