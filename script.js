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
/*
function expand(){
  let active = document.querySelector('.splide__slide');
  let target = document.getElementById('target');

  if (active.classList.contains(target)) {
    active.classList.remove(target);
  } 
  else {
    active.classList.add(target);
  }
  console.log(document.getElementById('target'))
}*/

/*
let target = document.querySelector('.target');
let element = document.querySelector('.splide__slide').addEventListener('click', i => {

  if (element.classList.contains('target')) {
    element.classList.remove('target');
  } 
  else {
    element.classList.add('target');
  }
  console.log(element.classList);
});*/

/*
function expand(){
  let element = document.getElementsByClassName('splide__slide')[6];

  if (element.style.width === '80%') {
    element.style.width = '50%';
  } 
  else {
    element.style.width = '80%';
  }
  console.log(element);
}*/

let navUl = [].slice.call(document.querySelectorAll('.splide__list > li'));
for (let i = 0; i < navUl.length; i++) {
  navUl[i].addEventListener('click', expand);
}


function expand(event) {
  let hiddenBx = event.currentTarget.querySelector('div.splide__slide__container > .hiddenBx');
  let slideTxt = event.currentTarget.querySelector('div.splide__slide__container > .contentBx > .slides-text');

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

/*
function callBx(event) {
  let box = [].slice.call(document.querySelectorAll(".splide__slide > div > div.hiddenBx"));
  
  const e = new Event('expanded');
  for (let j = 0; j < box.length; j++) {
    box[j].addEventListener('expanded', showBx);
    box[j].dispatchEvent(e);
  }
  
  function showBx(e){
    if (e.currentTarget.style.display === 'flex' && e.currentTarget.style.opacity === '1'){
      e.currentTarget.style.opacity = '0';
      
      e.currentTarget.style.display = 'none';  
      window.setTimeout(function() {
        e.currentTarget.style.display = 'none';  
      },350);
    }
    else {
      e.currentTarget.style.display = 'flex';
      e.currentTarget.style.opacity = '1';
      window.setTimeout(function() {
        e.currentTarget.style.opacity = '1';
      }, 100);
    }
  }
}*/

/*
function showBx(event) {
  let box = [].slice.call(document.querySelectorAll(".splide__slide > div > div.hiddenBx"));
  
  for (let j = 0; j < box.length; j++) {  
    if (box[j].style.display === 'flex' && box[j].style.opacity === '1'){
      box[j].style.opacity = '0';
      window.setTimeout(function() {
        box[j].style.display = 'none';  
      },350);
    }
    else {
      box[j].style.display = 'flex';
      window.setTimeout(function() {
        box[j].style.opacity = '1';
      }, 100);
    }
  }
}*/

// piste :  let box = document.querySelector(".splide__slide > div > div.hiddenBx").classList.contains('target');