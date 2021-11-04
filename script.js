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


function show() {
  var x = document.querySelector('.navMenu');
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
}

// --------------------------

/*
(function() {

	let hamburger = {
		nav = document.querySelector('nav'),
		navToggle = document.querySelector('.toggle'),

		initialize() {
			this.navToggle.addEventListener('click',
        () => { this.toggle(); });
		},

		toggle() {

			this.navToggle.classList.toggle('expanded');
      
			nav.style.display = "flex";
      this.nav.classList.toggle('expanded');
      
    },
	};

	hamburger.initialize();

}());
*/

//------------------

/*
document.querySelector(".toggle").addEventListener("click", show);

function show(){
   document.querySelectorAll("nav").forEach(function(item){
      item.classList.remove("hidden");
   });
}

document.querySelector("nav").addEventListener("click", hide);

function hide(){
  document.querySelectorAll("nav").forEach(function(item){
    item.classList.toggle("hidden");
});
}*/

/*
//expand clickable area
document.querySelector(".toggle").addEventListener('click', e => {
  document.querySelector("input").click();
});*/

var nav = document.querySelector('nav');
var transf = document.getElementById('toggle');
var icon = document.querySelector('.barIcon').addEventListener('click', i => {
  if (nav.classList = 'hidden') {
    nav.classList.remove('hidden');
    transf.checked = true;
    console.log('opps');
  } 
  else {
    nav.classList.toggle('hidden');
    transf.checked = false;
    console.log('shit');
  }
  console.log(nav.classList);
  console.log(transf.checked);
})