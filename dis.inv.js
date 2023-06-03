// Función para calcular la cuenta regresiva
function countdown() {
  var endDate = new Date("2023-07-01T00:00:00"); // Fecha de finalización de la construcción (YYYY-MM-DDTHH:MM:SS)
  var now = new Date();
  var timeLeft = endDate - now;
  
  // Calcula los días, horas, minutos y segundos restantes
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
  // Actualiza el elemento HTML con la cuenta regresiva
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  // Actualiza la cuenta regresiva cada segundo
  setTimeout(countdown, 1000);
}

// Inicia la cuenta regresiva cuando se carga la página
window.onload = function() {
  countdown();
};
