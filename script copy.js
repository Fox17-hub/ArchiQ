//Splide
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type   : 'loop',
    padding: '5rem',
    perPage: 3,
    perMove: 1,
    rewind : true,
  } );
  splide.mount();
} );

/* SOLUTION 1: CLASS HIDDEN
HTML
class="hidden"

CSS
.hidden { 
  display:none;
}
        

var nav = document.querySelector('nav');
var transf = document.getElementById('toggle');
var icon = document.querySelector('.iconBtn').addEventListener('click', i => {

  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden');
    transf.checked = true;
    console.log('opps');
  } 
  else {
    nav.classList.add('hidden');
    transf.checked = false;
    console.log('shit');
  }
  console.log(nav.classList);
  console.log(transf.checked);
});*/


// SOLUTION 2: x.style.opacity

function toggle() {
  var nav = document.querySelector('nav');
  if (nav.style.display === 'flex' && nav.style.opacity === '1') {
    nav.style.opacity = '0';
    document.getElementById('toggle').checked = false;
    window.setTimeout(function() {
    nav.style.display = 'none';
    },350);
    console.log('hide');
  }
  else {
    nav.style.display = 'flex';
    window.setTimeout(function() {
    nav.style.opacity = '1';
    }, 100);
    document.getElementById('toggle').checked = true;
    console.log('show');
  }
}

//grab array of cards (li) > pick the right one > expand(add class ".target" and modify ".contentBx" properties)
let navUl = [].slice.call(document.querySelectorAll('.splide__list > li'));
for (let i = 0; i < navUl.length; i++) {
  navUl[i].addEventListener('click', expand);
}


function expand(event) {
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
}