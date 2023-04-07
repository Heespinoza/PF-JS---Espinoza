const formRegistro = document.querySelector('form');

formRegistro.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = formRegistro.querySelector('#nombre').value;
  const apellido = formRegistro.querySelector('#apellido').value;
  const email = formRegistro.querySelector('#email').value;
  const password = formRegistro.querySelector('#password').value;

  const usuario = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    password: password
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));

  window.location.href = 'personal.html';
});