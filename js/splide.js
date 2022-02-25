let splide = {
    mainSplide: null,
    bottomSplide: null,

    init() {
        splide.displayMainSplide();
        splide.displaybBottomSlide();
    },

    displayMainSplide() {
        splide.mainSplide = new Splide('.splide', {
            type: 'loop',
            padding: '5rem',
            perPage: 3,
            perMove: 1,
            wheel: true,
            rewind: true,
        });
        splide.mainSplide.mount();
    },

    displaybBottomSlide() {
        splide.bottomSplide = new Splide('.splide__logos', {
            type: 'loop',
            padding: '5rem',
            rewind: true,
            wheel: true,
            perPage: 4,
            perMove: 1,
            lazyLoad: 'nearby',
            autoScroll: {
                speed: 1,
                pauseOnHover: true,
                pauseOnFocus: true,
                autoStart: true,
                rewind: false,
            },
        });
        splide.bottomSplide.mount(window.splide.Extensions);
    },
}


document.addEventListener('DOMContentLoaded', splide.init);