//Splide
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type   : 'loop',
    padding: '5rem',
    perPage: 3,
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