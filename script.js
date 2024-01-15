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

document.addEventListener('DOMContentLoaded', function() {
    var words = ['DEVELOPER', 'D', 'DE', 'DEV', 'DEVE', 'DEVEL', 'DEVELO', 'DEVELOP', 'DEVELOPE', 'DEVELOPER'];
    var currentIndex = 0;
    var wordAnimation = document.getElementById('word-animation');

    function changeWord() {
        // Oculta el elemento actual
        wordAnimation.style.opacity = 0;

        
            // Cambia la palabra
            wordAnimation.textContent = words[currentIndex];
            // Muestra el elemento
            wordAnimation.style.opacity = 1;
            // Actualiza el índice para la próxima palabra
            currentIndex = (currentIndex + 1) % words.length;

            // Ajusta el tiempo para la próxima palabra
            if (currentIndex === 0) {
                setTimeout(changeWord, 2000); // Si es la primera palabra, espera 2 segundos
            } else {
                setTimeout(changeWord, 100); // Para las otras palabras, espera 100 milisegundos
            }
        
    }

    // Inicia el cambio de palabra
    changeWord();
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las imágenes con la clase 'change-image'
    const images = document.querySelectorAll('.change-image');

    // Recorrer cada imagen y agregar el evento mouseover y mouseout
    images.forEach(function(img) {
        // Guardar el src original para revertirlo cuando el mouse salga
        const originalSrc = img.src;

        // Obtener la URL de la imagen de hover del atributo personalizado
        const hoverSrc = img.getAttribute('data-hover-src');

        // Evento al pasar el mouse sobre la imagen
        img.addEventListener('mouseover', function() {
            
            img.src = hoverSrc; // Cambiar la imagen al hoverSrc
            
           
        });

        // Evento al retirar el mouse de la imagen
        img.addEventListener('mouseout', function() {
            img.src = originalSrc; // Revertir a la imagen original
        });
    });
});