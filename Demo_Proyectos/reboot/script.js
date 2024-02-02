strRA = "";
strRB = "";
strRC = "";
strRD = "";
var x;
var tig;
var xB;
var xC;
var xD;
var tigB;
var tigC;
var tigD;



           





function RebootA(){
var user= prompt("clave de Reboot");
 $.ajax({
      url: 'simArduno.php',
      method: 'POST',
      data: {psw:user, Ac:'RebootA'}, 
  success: function(response) {
      // Actualizar el contenido del div con la respuesta 
      $('#respuestaA').html(response);
  },
  error: function(error) {
      console.error('Error al realizar la consulta AJAX:', error);
  }
});
}

function move() {
var elem = document.getElementById("myBar"); 
var width = 0;
var id = setInterval(frame, 150);
function frame() {
if (width >= 100) {
document.getElementById('myProgress').hidden = true;

tig=1;  


clearInterval(id);
mostrarbotones();
} else {
width++; 
elem.style.width = width + '%';
document.getElementById("label").innerHTML = width * 1  + '%';
document.getElementById('myProgress').hidden = false;
ocultarbotones();


}
}
}




function RebootB(){
var userB = prompt("clave de Reboot");

$.ajax({
  url: 'simArduno.php',
  method: 'POST',
  data: {psw:userB, Ac:'RebootB'}, 
success: function(response) {
  // Actualizar el contenido del div con la respuesta 
  $('#respuestaB').html(response);
},
error: function(error) {
  console.error('Error al realizar la consulta AJAX:', error);
}
});
}

function moveB() {
var elem = document.getElementById("myBarB"); 
var width = 0;
var id = setInterval(frame, 150);
function frame() {
if (width >= 100) {
document.getElementById('myProgressB').hidden = true;

tigB=1;
clearInterval(id);
mostrarbotones();
} else {
width++; 
elem.style.width = width + '%';
document.getElementById("labelB").innerHTML = width * 1  + '%';
document.getElementById('myProgressB').hidden = false;
ocultarbotones();
}
}
}
function RebootC(){
var userC= prompt("clave de Reboot");
$.ajax({
  url: 'simArduno.php',
  method: 'POST',
  data: {psw:userC, Ac:'RebootC'}, 
success: function(response) {
  // Actualizar el contenido del div con la respuesta de novedad.php
  $('#respuestaC').html(response);
},
error: function(error) {
  console.error('Error al realizar la consulta AJAX:', error);
}
});
}
function moveC() {
var elem = document.getElementById("myBarC"); 
var width = 0;
var id = setInterval(frame, 150);
function frame() {
if (width >= 100) {
document.getElementById('myProgressC').hidden = true;

tigC=1;
clearInterval(id);
mostrarbotones();
} else {
width++; 
elem.style.width = width + '%';
document.getElementById("labelC").innerHTML = width * 1  + '%';
document.getElementById('myProgressC').hidden = false;
ocultarbotones(); 
}
}
}
function RebootD(){
var userD= prompt("clave de Reboot");
$.ajax({
  url: 'simArduno.php',
  method: 'POST',
  data: {psw:userD, Ac:'RebootD'}, 
success: function(response) {
  // Actualizar el contenido del div con la respuesta de novedad.php
  $('#respuestaD').html(response);
},
error: function(error) {
  console.error('Error al realizar la consulta AJAX:', error);
}
});
}

function moveD() {

var elem = document.getElementById("myBarD"); 
var width = 0;
var id = setInterval(frame, 150);

function frame() {
if (width >= 100) {
document.getElementById('myProgressD').hidden = true;

tigD= 1;
clearInterval(id);
} else {
width++; 
elem.style.width = width + '%';
document.getElementById("labelD").innerHTML = width * 1  + '%';
document.getElementById('myProgressD').hidden = false;
ocultarbotones(); 
}
}
}

function mostrarbotones(){
document.getElementById('BotA').hidden = false;
document.getElementById('BotB').hidden = false;
document.getElementById('BotC').hidden = false;
document.getElementById('BotD').hidden = false;

}
function ocultarbotones(){
document.getElementById('BotA').hidden = true; 
document.getElementById('BotB').hidden = true;
document.getElementById('BotC').hidden = true;
document.getElementById('BotD').hidden = true;

}