const button = document.getElementById('abrir')
const div = document.getElementById('menu')
const body = document.getElementById('body')
const cerrar = document.getElementById('cerrar')
const m720 = document.getElementById('m720')
const d1024 = document.getElementById('d1024')





button.addEventListener('click', ()=>{
    console.log('portuges')
    button.classList.toggle('cambiar')
  div.classList.toggle('activo')
  body.classList.toggle('bar')
})
cerrar.addEventListener('click', ()=>{
    console.log('portuges')
    div.classList.remove('activo');
    body.classList.remove('bar');
    button.classList.remove('cambiar')
  
})

