let app = {
  navUl: [],
  mainSplide: null,
  bottomSplide: null,

  init(){
    app.navHandler();
    app.displayMainSplide();
    app.expandHandler();
    app.displaybBottomSlide();
    app.modalHandler();
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
        wheel: true,
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
  
  modalHandler(){
    let circles = [].slice.call(document.querySelectorAll('.circle'));
    circles.forEach(circle => {
      circle.addEventListener('click', app.displayModal);  
    });
    
  },

  displayModal(e){
    let circle = e.currentTarget;
    let circleParent = circle.parentNode;
    let siblings = circleParent.childNodes;

    console.log(siblings);
    let modal = siblings[5];
    
    modal.classList.toggle('showModal');
    let contentBx = modal.childNodes[1];

    if(contentBx.classList.contains('modal__contentBx--right')){
      setTimeout(() => {
        contentBx.style.left = "25%";
      }, 50); 
      switch (contentBx.style.left){
        case '25%':  
        setTimeout(() => {
          contentBx.style.left = "100%";
        }, 100);  
          break;
        case '100%':
          setTimeout(() => {
            contentBx.style.left = "25%";
          }, 50);  
          break;
      }
      let closeIcn = contentBx.childNodes[5];
      closeIcn.addEventListener('click', ()=>{
          contentBx.style.left = "100%";
          setTimeout(() => {
            modal.classList.remove('showModal');
            body.classList.remove('body__modal-open');  
          }, 200);
      })
    }
    else if(contentBx.classList.contains('modal__contentBx--left')){
      
      setTimeout(() => {
        contentBx.style.right = "25%";
      }, 50); 
      switch (contentBx.style.right){
        case '25%':  
        setTimeout(() => {
          contentBx.style.right = "100%";
        }, 100);  
          break;
        case '100%':
          setTimeout(() => {
            contentBx.style.right = "25%";
          }, 50);  
          break;
      }
      let closeIcn = contentBx.childNodes[5];
      closeIcn.addEventListener('click', ()=>{
          contentBx.style.right = "100%";
          setTimeout(() => {
            modal.classList.remove('showModal');
            body.classList.remove('body__modal-open');  
          }, 200);
      })
    }
    

    
    
    let body = document.querySelector('.body');
    body.classList.toggle('body__modal-open');
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
