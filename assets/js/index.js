// Import CSS
import "../css/index.css";

import { handleHomeHeroSwiper } from "./swiper";

function handleHeaderDropdown() {
    const target = document.querySelector('#header-nav-dropdown-target');

    // Error handling if target is not found
    if (!target) return;

    const dropdownBody = target.querySelector('ul');
    const showDropdown = dropdownBody?.querySelector('li');

    if (showDropdown) target.classList.remove('hidden');

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

// Import images lazy-loading module

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';