var a = document.querySelector('.menu-btn');

a.addEventListener('click', function(){

  document.querySelector('nav').classList.toggle('show-nav');

});

var more = document.querySelector('.more-btn');

more.addEventListener('click', function(){

  document.querySelector('nav').classList.toggle('show-nav-links');

});
