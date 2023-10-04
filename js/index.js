const bar = document.querySelector('header');
const img = document.querySelector('.contenedor_home');
let prevY = window.scrollY;

window.addEventListener('scroll', ()=>{
    if(window.scrollY > prevY && window.scrollY >= 280){
        bar.classList.add('off');
        img.classList.add('contenedor_home_hidden');
    }
    else if(window.scrollY < prevY && window.scrollY == 0){
        bar.classList.remove('off');
        img.classList.remove('contenedor_home_hidden');
    }
    prevY = window.scrollY;
    console.log(prevY);
});