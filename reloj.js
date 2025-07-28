function actualizarReloj() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');
  const milisegundos = String(ahora.getMilliseconds()).padStart(3,'0');  
  document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}.${milisegundos}`;
}

setInterval(actualizarReloj, 100);
actualizarReloj();
