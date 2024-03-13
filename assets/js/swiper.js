// import Swiper JS
import Swiper from "swiper";
import { Scrollbar, Autoplay } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

export function handleHomeHeroSwiper() {
    const homeHeroSwiper = new Swiper("#home-hero-swiper", {
        modules: [Scrollbar, Autoplay],

        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: 1,

        autoplay: {
            delay: 5000,
        },

        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
}
