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
/*
document.addEventListener( 'DOMContentLoaded', function() {
  var navBtn = document.querySelector('.toggle');
  var openNav = function(){
    var 
  }
  for (var i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('click', openNav)
  }
}
);
*/
/*
// -------------------------

/*
HTML
class="hidden"

CSS
.hidden { 
  display:none;
}

.notHidden{
  display: flex;
}


var nav = document.querySelector('nav');
var transf = document.getElementById('toggle');
var icon = document.querySelector('.barIcon').addEventListener('click', i => {

  if (nav.classList = 'hidden') {
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

/*
function toggle() {
  var nav = document.querySelector('nav');
  if (nav.style.display === 'none') {
  nav.style.display = 'flex';
  document.getElementById('toggle').checked = true;
  console.log('opps');
  }
  else { 
    nav.style.display = 'none';
    document.getElementById('toggle').checked = false;
    console.log('shit');
  }
}*/

function toggle() {
  var nav = document.querySelector('nav');
  if (nav.style.opacity === '1') {
    nav.style.opacity = '0';
    document.getElementById('toggle').checked = false;
    console.log('hide');
  }
  else { 
    nav.style.opacity = '1';
    document.getElementById('toggle').checked = true;
    console.log('show');
  }
}