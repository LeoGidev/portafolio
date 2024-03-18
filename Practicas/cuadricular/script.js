var canvas = document.getElementById('miCanvas');
var contexto = canvas.getContext('2d');
var colorLineas = '#00ff00';
var ancholinea = 2;
var cantidadlineasH = 3;
var imagen = new Image();


// Esperar a que la imagen de fondo se cargue antes de dibujar
imagen.onload = function () {
  // Dibuja la imagen de fondo
  contexto.drawImage(imagen, 0, 0, canvas.width, canvas.height);

  // Dibuja la cuadrícula
  dibujarCuadricula();
};

function limpiar(){
  console.log('Se limpia canvas');
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  console.log('canvas limpio');
  
}

function cambiarColorLineas() {
  colorLineas = document.getElementById('colorLineas').value;
  // Dibuja la cuadrícula al cambiar el color de las líneas
  dibujarCuadricula();
}

function cambiarCantLineas() {
  var cant = document.getElementById("setcant").value;
  document.getElementById("cantLineas").innerText = cant;
  cantidadlineasH = parseInt(cant);
   console.log('lineas=', cantidadlineasH);
  limpiar();
  ///dibujarCuadricula();
   
  
}

function dibujarCuadricula() {
  
  
  // Dibujar la cuadrícula 
  for (var i = 0; i < cantidadlineasH; i++) {
    
      var x = canvas.width;
      var y = (canvas.height/(cantidadlineasH-1))*i;
      

      // Dibujar el cuadro en el canvas con el nuevo color de líneas
      contexto.lineWidth = ancholinea;
      contexto.strokeStyle = colorLineas;
      
      contexto.moveTo(0,y);
      //console.log(x);
      contexto.lineTo(x,y);
      //console.log(y);
      contexto.stroke();
      //contexto.strokeRect(x, y, 100, 100);
      console.log('linea H numero: ', i , "dibujada",'x=', x ,'y= ', y );
    
  }
   // Dibujar la cuadrícula y los números
   for (var i = 0; x < canvas.width; i++) {
    console.log('hola');

    
    var x = (canvas.height/(cantidadlineasH-1))*i;//se podría usar el width
    // para que no se pase del alto pero se usa el height para que todos los cuadros queden iguales y se mas práctico para el dibujante
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

    console.log('linea V numero: ', i , "dibujada", 'x= ', x, 'yf=', y);
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
            
            canvas.width=400;
            canvas.height=400;
            factor=alto/ancho;
            var nuevoAlto=canvas.height*factor;
            canvas.height=nuevoAlto;
            contexto.drawImage(imagenFondo, 0, 0, canvas.width, canvas.height)
        }
        else{
      // Dibuja la imagen de fondo
      
       canvas.width=400;
       canvas.height=400;
        factor=ancho/alto;
        console.log('ancho/alto:', ancho, '/', alto, '=', ancho/alto);
        var nuevoAncho = canvas.width * factor;
        var nuevoAlto = canvas.height;
        
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

