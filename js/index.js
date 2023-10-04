const bar = document.querySelector('.contenedor_home');
let prevY = window.scrollY;
window.addEventListener('scroll', ()=>{
    if(prevY > window.scrollY){
        console.log("subir");
        bar.classList.remove('off');
    }
    else{
        console.log('bajar');
        bar.classList.add('off');
    }
    prevY = window.scrollY;
});