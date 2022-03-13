let app = {
  navUl: [],
  audioCount: 0,
  audioplayed: 0,
  mainSplide: null,
  bottomSplide: null,

  init() {
    app.navHandler();
    app.expandHandler();
    
    app.displayMainSplide();
    app.displaybBottomSlide();
    app.modalHandler();
    app.audioHandler();
    app.orderHandler();

    app.responsiveCirclesHandler();
    app.responsiveAlertHandler();
  },

  navHandler() {
    const toggle = document.getElementById('nav-btn');
    toggle.addEventListener('click', app.toggleNav);
    const navLinks = [].slice.call(document.querySelectorAll('.nav__links'));
    navLinks.forEach(link => {
      link.addEventListener('click', app.toggleNav);      
    });
  },

  toggleNav() {
    const nav = document.querySelector('nav');
    // console.log(window.screen.width);
    const logoTitle = document.querySelector('.nav__logo');
    const header = document.querySelector('.header');
    const navBtn = document.querySelector('.nav-btn');
    const navBar = document.querySelector('.nav__bar');

    const navBx = document.querySelector('.navBx');
    if (nav.style.display === 'flex' && nav.style.opacity === '1') {
      nav.style.opacity = '0';
      document.getElementById('toggle').checked = false;
      
      window.setTimeout(function () {
        nav.style.display = 'none';
        if(window.screen.width < 970){
          navBx.style.margin = '0';
          
          header.style.alignItems = "center";
          header.style.flexDirection = "row";
          header.append(navBtn);

          navBtn.style.transform = 'translate(0rem)';
          
          logoTitle.style.transform = 'translate(0rem)';
          
          navBar.append(navBx);
          navBar.style.width = '100%';
          navBar.style.marginLeft = '0';
          navBar.style.flexDirection = 'column';
          // console.log('close');
        }
      }, 350);
    } else {
      nav.style.display = 'flex';
      if(window.screen.width < 970){
        header.style.flexDirection = "column";
        
        navBtn.style.transform = 'translate(4rem)';
        navBx.style.margin = '2rem 0 0';

        logoTitle.after(navBtn);
        // logoTitle.style.transform = 'translate(5.1rem)';
        
        navBar.after(navBx);
        navBar.style.flexDirection = 'initial';
        // console.log('open');
      }
      window.setTimeout(function () {
        nav.style.opacity = '1';
      }, 100);
      document.getElementById('toggle').checked = true;
    }
  },

  //grab array of splide cards (li) > pick the right one > expand(add class ".target" and modify ".contentBx" properties)
  expandHandler() {
    app.navUl = [].slice.call(document.querySelectorAll('.splide__list > li'));
    app.navUl.forEach(el => {
      el.addEventListener('click', app.expand);
    });
  },

  expand(event) {
    let hiddenBx = event.currentTarget.querySelector('div.splide__slide__container > .slide__hiddenBx');
    let slideTxt = event.currentTarget.querySelector('div.splide__slide__container > .slide__contentBx > .slide__textBx');

    if (event.currentTarget.classList.contains('target')) {
      slideTxt.style.visibility = 'visible';
      hiddenBx.style.transition = 'all 0.5s ease-in-out';
      hiddenBx.style.opacity = '0';
      event.currentTarget.classList.remove('target');
    } else {
      slideTxt.style.visibility = 'hidden';
      hiddenBx.style.transition = 'all 2s ease-in-out';
      hiddenBx.style.opacity = '1';
      event.currentTarget.classList.add('target');
    }
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

  modalHandler() {
    let circles = [].slice.call(document.querySelectorAll('.circle'));
    circles.forEach(circle => {
      circle.addEventListener('click', app.displayModal);
    });
    let contactBtn = document.querySelector('.contactForm__btn');
    contactBtn.addEventListener('click', app.displayAttribModal);
  },

  displayModal(e) {
    let circle = e.currentTarget;
    let circleParent = circle.parentNode;
    let siblings = circleParent.childNodes;

    console.log(siblings);
    let modal = siblings[5];

    modal.classList.toggle('showModal');
    let contentBx = modal.childNodes[1];
    
    if(window.screen.width > 970){
      if (contentBx.classList.contains('modal__contentBx--right')) {
        setTimeout(() => {
          contentBx.style.left = "25%";
        }, 50);
        switch (contentBx.style.left) {
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
        closeIcn.addEventListener('click', () => {
          contentBx.style.left = "100%";
          setTimeout(() => {
            modal.classList.remove('showModal');
            body.classList.remove('body__modal-open');
          }, 200);
        })
      } else if (contentBx.classList.contains('modal__contentBx--left')) {

        setTimeout(() => {
          contentBx.style.right = "25%";
        }, 50);
        switch (contentBx.style.right) {
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
        closeIcn.addEventListener('click', () => {
          contentBx.style.right = "100%";
          setTimeout(() => {
            modal.classList.remove('showModal');
            body.classList.remove('body__modal-open');
          }, 200);
        })
      }
    }
    else if(window.screen.width < 970){
      if (contentBx.classList.contains('modal__contentBx--right')) {
        setTimeout(() => {
          contentBx.style.left = "0%";
        }, 50);
        switch (contentBx.style.left) {
          case '0%':
            setTimeout(() => {
              contentBx.style.left = "100%";
            }, 100);
            break;
          case '100%':
            setTimeout(() => {
              contentBx.style.left = "0%";
            }, 50);
            break;
        }
        let closeIcn = contentBx.childNodes[5];
        closeIcn.addEventListener('click', () => {
          contentBx.style.left = "100%";
          setTimeout(() => {
            modal.classList.remove('showModal');
            body.classList.remove('body__modal-open');
          }, 200);
        })
      } else if (contentBx.classList.contains('modal__contentBx--left')) {

        setTimeout(() => {
          contentBx.style.right = "0%";
        }, 50);
        switch (contentBx.style.right) {
          case '0%':
            setTimeout(() => {
              contentBx.style.right = "100%";
            }, 100);
            break;
          case '100%':
            setTimeout(() => {
              contentBx.style.right = "0%";
            }, 50);
            break;
        }
        let closeIcn = contentBx.childNodes[5];
        closeIcn.addEventListener('click', () => {
          contentBx.style.right = "100%";
          setTimeout(() => {
            modal.classList.remove('showModal');
            body.classList.remove('body__modal-open');
          }, 200);
        })
      }
    }

    let body = document.querySelector('.body');
    body.classList.toggle('body__modal-open');
  },

  audioHandler() {
    let piaCircle = document.querySelector('.circle--left');
    piaCircle.addEventListener('mouseover', app.piaAudio);
    let evaCircle = document.querySelector('.circle--right');
    evaCircle.addEventListener('mouseover', app.evaAudio);
  },

  piaAudio() {
    if (app.audioCount === 1) {
      app.audio.pause();
    }
    if (app.audioCount === 0) {
      let piaAudio = null;

      if (app.audioplayed === 0) {
        const piaAudio = new Audio('./audio/GLaDOS-389678.wav');
        console.log(piaAudio);
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed += 1;
      }
      else if (app.audioplayed === 1) {
        piaAudio = new Audio('./audio/GLaDOS-389704.wav');
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed += 1;
        console.log(app.audioplayed);
        console.log(piaAudio);
      } else if (app.audioplayed >= 2 && app.audioplayed <= 4) {
        console.log('coucou');
        piaAudio = new Audio('./audio/GLaDOS-389685.wav');
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed += 1;
        console.log(app.audioplayed);
        console.log(piaAudio);
      } else if (app.audioplayed === 5) {
        piaAudio = new Audio('./audio/GLaDOS-389700.wav');
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed += 1;
        console.log(app.audioplayed);
        console.log(piaAudio);
      } else if (app.audioplayed === 6) {
        piaAudio = new Audio('./audio/GLaDOS-389734.wav');
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed = 0;
        console.log(app.audioplayed);
      }
    }

    setTimeout(() => {
      app.audioCount = 0;
    }, 4000);
  },

  evaAudio() {
    if (app.audioCount === 1) {
      console.log('pause');
      audio.pause();
    }

    if (app.audioCount === 0) {
      let piaAudio = null;

      if (app.audioplayed === 0) {
        piaAudio = new Audio('./audio/GLaDOS-389680.wav');
        console.log(piaAudio);
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed += 1;
      } else if (app.audioplayed === 1) {
        piaAudio = new Audio('./audio/GLaDOS-389704.wav');
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed += 1;
        console.log(app.audioplayed);
        console.log(piaAudio);
      } else if (app.audioplayed >= 2 && app.audioplayed <= 4) {
        console.log('coucou');
        piaAudio = new Audio('./audio/GLaDOS-389685.wav');
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed += 1;
        console.log(app.audioplayed);
        console.log(piaAudio);
      } else if (app.audioplayed === 5) {
        piaAudio = new Audio('./audio/GLaDOS-389700.wav');
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed += 1;
        console.log(app.audioplayed);
        console.log(piaAudio);
      } else if (app.audioplayed === 6) {
        piaAudio = new Audio('./audio/GLaDOS-389734.wav');
        piaAudio.play();
        app.audioCount = 1;
        app.audioplayed = 0;
        console.log(app.audioplayed);
      }
    }
    console.log(app.audioplayed);
    setTimeout(() => {
      app.audioCount = 0;
    }, 4000);
  },

  orderHandler() {
    let orderBtns = [].slice.call(document.querySelectorAll('.AI__order-button'));
    orderBtns.forEach((btn) => {
      btn.addEventListener('click', app.orderAudio);
    });
  },

  orderAudio() {
    if (app.audioCount === 1) {
      app.audio.pause();
    }

    if (app.audioCount === 0) {
      let thanksAudio = new Audio('./audio/GLaDOS-389706.wav');
      thanksAudio.play();
      app.audioCount = 1;
    }
    setTimeout(() => {
      app.audioCount = 0;
    }, 4000);
  },

  displayAttribModal(e){
    e.preventDefault();
    
    let body = document.querySelector('.body');
    body.classList.toggle('body__modal-open');
    let attribModal = document.querySelector('.attribMod');
    attribModal.classList.toggle('showModal');
    let closeIcn = document.querySelector('.attribMod__close-icon');
    console.log(closeIcn);
    closeIcn.addEventListener('click', () => {
      console.log('lol');
        setTimeout(() => {
          attribModal.classList.remove('showModal');
          body.classList.remove('body__modal-open');
        }, 200);
      })
  },

  responsiveCirclesHandler(){
    let circle = document.querySelector('.circle--left');
    let text = document.querySelector('.AI-info--left');
    let bx = document.querySelector('.pia');
    if(window.screen.width < 970){
      bx.removeChild(circle);
      text.after(circle);
    }
    if(window.screen.width > 970){
      bx.removeChild(circle);
      text.before(circle);
    }
  },

  responsiveAlertHandler(){
    window.addEventListener('resize', app.responsiveAlert);
    window.addEventListener("DOMContentLoaded", app.responsiveAlert);
    console.log('trig');
  },
  
  responsiveAlert(){
    const body = document.querySelector('.body');
    // console.log(screen.orientation.type === "landscape-primary");
    if(window.screen.width < 970 && window.screen.height < 480 && screen.orientation.type === 'landscape-primary'){

        const alertBx = document.createElement('div');
        alertBx.classList.add('alertBx');
        body.classList.add('body__modal-open');
        alertBx.textContent = `Navré, ce site n'est pas optimisé pour les mobiles en position paysage ! Passez en mode portrait ou utilisez un écran plus grand !`;
        if(!body.contains(alertBx)){
          body.append(alertBx);
        }
    }
    else{
        const alertBxs = document.querySelectorAll('.alertBx');
        alertBxs.forEach(alertBx => {          
          if(body.contains(alertBx)){
            alertBx.remove();
            body.classList.remove('body__modal-open');
            console.log(body.contains(alertBx));
          }
        });
    }
  }
}

document.addEventListener('DOMContentLoaded', app.init);