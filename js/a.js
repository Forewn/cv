const button = document.querySelector('button');
const name = document.querySelector('#first_name');


button.addEventListener('click', ()=>{
    const parrafo = document.getElementById('parrafo');
    parrafo.innerText = "hola, " + name.value;
})