const $dia = document.getElementById("dia"),
      $hora = document.getElementById("hora"),
      $minutos = document.getElementById("minutos"),
      $segundos = document.getElementById("segundos"),
      $finalMensaje= document.getElementsByClassName("listo");
      $conteo = document.getElementsByClassName("contenedor")

//Fecha a llegar
 const Fecha = new Date(2023,05,03).getTime(); 


let intervalo = setInterval(function (){
  //Obtener las distancias entre ambas fechas
  const Hoy = new Date().getTime();

  //Obtener las distancias entre ambas fechas
  let distancia = Fecha - Hoy;

  //Calculos a dias-horas-minutos-segundos
  let dias = Math.floor( distancia / (1000*60*60*24));
  let horas = Math.floor(distancia % (1000*60*60*24) / (1000 * 60 * 60));
  let minutos = Math.floor(distancia % (1000*60*60) / (1000*60));
  let segundos= Math.floor(distancia % (1000*60) / (1000))

  //Mostrar los datos
  $dia.innerHTML = dias;
  $hora.innerHTML = horas;
  $minutos.innerHTML = minutos;
  $segundos.innerHTML = ("0"+segundos).slice(-2);

  //Cuando llegue la fecha
  if(distancia<0){
    clearInterval(intervalo);
    $finalMensaje[0].style.display = "flex";
    $conteo[0].style.display="none"
  }
  
}, 1000)
