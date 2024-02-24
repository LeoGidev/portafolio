var canvas = document.getElementById('miCanvas');
var contexto = canvas.getContext('2d');

var tamanoCuadro = 200;
var cuadrosPorLado = 3;
var tamañoTotal = tamanoCuadro * cuadrosPorLado;
//var portada = 0;

var colorFondo = '#ffffff';
var colorLineas = '#00ff00';
var colorNumeros = '#000000';
var ancholinea = 2;


var imagen = new Image();
imagen.src = 'rifa.png';

// Esperar a que la imagen de fondo se cargue antes de dibujar
imagen.onload = function () {
  // Dibuja la imagen de fondo
  contexto.drawImage(imagen, 0, 0, canvas.width, canvas.height);

  // Dibuja la cuadrícula
  dibujarCuadricula();
};

function cambiarColorLineas() {
  colorLineas = document.getElementById('colorLineas').value;
  // Dibuja la cuadrícula al cambiar el color de las líneas
  dibujarCuadricula();
}

function dibujarCuadricula() {
  // Dibujar la cuadrícula y los números
  for (var i = 0; i < 5; i++) {
    
      var x = canvas.width;
      var y = (canvas.height/4)*i;
      

      // Dibujar el cuadro en el canvas con el nuevo color de líneas
      contexto.lineWidth = ancholinea;
      contexto.strokeStyle = colorLineas;
      
      contexto.moveTo(0,y);
      //console.log(x);
      contexto.lineTo(x,y);
      //console.log(y);
      contexto.stroke();
      //contexto.strokeRect(x, y, 100, 100);
    
  }
   // Dibujar la cuadrícula y los números
   for (var i = 0; i < 5; i++) {
    
    var x = (canvas.width/4)*i;
    var y = (canvas.height);
    

    // Dibujar el cuadro en el canvas con el nuevo color de líneas
    contexto.lineWidth = ancholinea;
    contexto.strokeStyle = colorLineas;
    
    contexto.moveTo(x,0);
    //console.log(x);
    contexto.lineTo(x,y);
    //console.log(y);
    contexto.stroke();
    //contexto.strokeRect(x, y, 100, 100);
  
}
}

// Función para descargar la imagen
function descargarImagen() {
  var enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = canvas.toDataURL('image/png');
  enlaceDescarga.download = 'image.png';
  enlaceDescarga.click();
}

function cargarImagenDeFondo() {
  var input = document.getElementById('imagenFondoInput');
  var archivo = input.files[0];

  if (archivo) {
    var imagenFondo = new Image();
    imagenFondo.onload = function () {
        var ancho = imagenFondo.width;
        var alto = imagenFondo.height;
        console.log(ancho, alto);
        if(alto > ancho){
            //anchoproporcional = (ancho * canvas.width)/alto;
            //contexto.drawImage(imagenFondo, 0, 0, anchoproporcional ,canvas.height)
            canvas.width=400;
            canvas.height=400;
            factor=alto/ancho;
            var nuevoAlto=canvas.height*factor;
            canvas.height=nuevoAlto;
            contexto.drawImage(imagenFondo, 0, 0, canvas.width, canvas.height)
        }
        else{
      // Dibuja la imagen de fondo
      //altoproporcional = (alto * canvas.width)/ancho;
      //contexto.drawImage(imagenFondo, 0, 0, canvas.width, altoproporcional);
       canvas.width=400;
       canvas.height=400;
        factor=ancho/alto;
        console.log('ancho/alto:', ancho, '/', alto, '=', ancho/alto);
        var nuevoAncho = canvas.width * factor;
        var nuevoAlto = canvas.height;
        //console.log('valor windows H: ', window.innerHeight, 'valoer windows W: ', window.innerWidth)
        console.log('Nuevo ancho: ', nuevoAncho, 'Nuevo alto: ', nuevoAlto);
        canvas.width = nuevoAncho;
        canvas.height= nuevoAlto;
        contexto.drawImage(imagenFondo, 0, 0, canvas.width, canvas.height);
        }
      
      // Dibuja la cuadrícula después de cargar la nueva imagen
      dibujarCuadricula();
    };
    imagenFondo.src = URL.createObjectURL(archivo);
  }
}