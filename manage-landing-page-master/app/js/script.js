const hamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const menu = document.querySelector('.header__menu');
const img = document.querySelector('.hero__image');
hamburger.addEventListener('click', function(){
     console.log('Hello');
     if(header.classList.contains('open')){
         header.classList.remove('open');
         overlay.classList.remove('fade-in');
         overlay.classList.add('fade-out');
        body.classList.remove('noscroll');
         menu.classList.add('has-fade');
         img.classList.remove('has-fade');
         

     }
     else{
           header.classList.add('open');
            overlay.classList.remove('fade-out');
           overlay.classList.add('fade-in');
           body.classList.add('noscroll');
           menu.classList.remove('has-fade');
           img.classList.add('has-fade');

     }
  
});
   