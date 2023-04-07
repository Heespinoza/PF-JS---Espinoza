const formInicioSesion = document.querySelector('form');
const mensaje = document.querySelector('#mensaje3');

formInicioSesion.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = formInicioSesion.querySelector('#email').value;
  const password = formInicioSesion.querySelector('#password').value;

  const usuarioGuardado = localStorage.getItem('usuario');

  if (!usuarioGuardado) {
    mensaje.innerHTML = 'No se ha registrado ningún usuario con ese email';
    return;
  }

  const usuario = JSON.parse(usuarioGuardado);

  if (usuario.email === email && usuario.password === password) {
    window.location.href = 'paginauser.html';
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Fijese que los datos que ingreso sean correcto!!',
      icon: 'error',
      confirmButtonText: 'Cerrar'
    })
   
  }
});