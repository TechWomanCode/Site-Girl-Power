
var miImage =  document.querySelector('img');

miImage.onclick = function() {
  var miSrc = miImage.getAttribute('src');
  if(miSrc === 'images/GirlPower2.jpg') {
    miImage.setAttribute('src','images/girlcan.jpg');
  } else {
    miImage.setAttribute ('src', 'images/GirlPower2.jpg');
  }
}


var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Girl Power is,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Girl Power is,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
