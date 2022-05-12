window.addEventListener('scroll', function() {
  let animacion =  document.getElementById("animado");
  let posicion = animacion.getBoundingClientRect().top;
  console.log(posicion)
  let tamanoDepantalla= window.innerHeight/3;

  if (posicion < tamanoDepantalla){
    animacion.style.animation = 'mover 1s esae-out'
  }
})