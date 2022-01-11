let app = {
  navUl: [],
  mainSplide: null,
  bottomSplide: null,

  init(){
    app.navHandler();
    app.displayMainSplide();
    app.expandHandler();
    app.displaybBottomSlide();
  },

  navHandler(){
    const toggle = document.getElementById('nav-btn');
    toggle.addEventListener('click', app.toggleNav);
  },

  toggleNav() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'flex' && nav.style.opacity === '1') {
      nav.style.opacity = '0';
      document.getElementById('toggle').checked = false;
      window.setTimeout(function() {
      nav.style.display = 'none';
      },350);
    }
    else {
      nav.style.display = 'flex';
      window.setTimeout(function() {
      nav.style.opacity = '1';
      }, 100);
      document.getElementById('toggle').checked = true;
    }
  },

  displayMainSplide(){
    app.mainSplide = new Splide( '.splide', {
        type   : 'loop',
        padding: '5rem',
        perPage: 3,
        perMove: 1,
        rewind : true,
      } );
      app.mainSplide.mount();
  },

  //grab array of splide cards (li) > pick the right one > expand(add class ".target" and modify ".contentBx" properties)
  expandHandler(){
    app.navUl = [].slice.call(document.querySelectorAll('.splide__list > li'));
    app.navUl.forEach(el => {
      el.addEventListener('click', app.expand);
    });
  },
  
  expand(event) {
    let hiddenBx = event.currentTarget.querySelector('div.splide__slide__container > .slide__hiddenBx');
    let slideTxt = event.currentTarget.querySelector('div.splide__slide__container > .slide__contentBx > .slide__textBx');
    
    if (event.currentTarget.classList.contains('target')){
      slideTxt.style.visibility = 'visible';
      hiddenBx.style.transition = 'all 0.5s ease-in-out';
      hiddenBx.style.opacity = '0';
      event.currentTarget.classList.remove('target');
    }
  
    else {
      slideTxt.style.visibility = 'hidden';
      hiddenBx.style.transition = 'all 2s ease-in-out';
      hiddenBx.style.opacity = '1';
      event.currentTarget.classList.add('target');
    }
  },
  
  displaybBottomSlide(){
    app.bottomSplide = new Splide( '.splide__logos', {
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
      } );
      app.bottomSplide.mount(window.splide.Extensions);
  }, 
}

document.addEventListener('DOMContentLoaded', app.init);