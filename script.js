 // Cambio de color de la barra de navegación al hacer scroll
 $(window).scroll(function() {
    if ($(this).scrollTop() > $('.container-fluid').height()) {
      $('.navbar').removeClass('transparent').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed').addClass('transparent');
    }
  });
  
//mueve el background cuando mueves el scroll y da la sensacion de ir atrasado
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('body').css('background-position', 'center ' + (-scroll/10) + 'px');
});
//portada
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('#portada').css('background-position', 'center ' + (-scroll/5) + 'px');
});
//enviar whatsapp
function enviarWhatsApp() {
  var telefono = '+542615008072'; 
  var mensaje = encodeURIComponent('Hola, quiero contactarte.'); // Mensaje predefinido
  window.open('https://api.whatsapp.com/send?phone=' + telefono + '&text=' + mensaje, '_blank');
}
//Cambia los estilos
document.getElementById('menuBtn').addEventListener('click', function() {
  document.getElementById('sideMenu').classList.toggle('show');
});

const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('click', function() {
    const color = this.getAttribute('data-color');
    
    
    // Obtiene todos los elementos con la clase 'contenido'
    var contenidos = document.querySelectorAll('.contenido');
   
    
    // Itera sobre cada elemento 'contenido' y aplica los cambios
    contenidos.forEach(function(contenido) {
      // Elimina todas las clases existentes relacionadas con los colores
      contenido.classList.remove('dark', 'red', 'blue', 'white');
      
      // Agrega la clase correspondiente al color seleccionado
      contenido.classList.add(color);
    });
  });
});

 