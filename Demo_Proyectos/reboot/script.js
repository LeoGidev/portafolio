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

function ValoresAjax()
{

nocache = "&nocache=" + Math.random() * 1000000;

var request = new XMLHttpRequest();

request.onreadystatechange = function()
{

        if (this.readyState == 4) {

        if (this.status == 200) {

        if (this.responseXML != null) {
        if(this.responseXML.getElementsByTagName('ValuA')[0].childNodes[0].nodeValue === "checked"){
         x=1;}else{ x=0;}
         
         if (x==1 && tig==1){
alert("Reboot en EdgeA realizado con exito");tig=0; 
mostrarbotones();}
else if(x==0 && tig==1){
alert("Password incorrecto, Reboot en EdgeA abortado");tig=0;
mostrarbotones();}
         if(this.responseXML.getElementsByTagName('ValuB')[0].childNodes[0].nodeValue === "checked"){
         xB=1;}else{ xB=0;}
         
         if (xB==1 && tigB==1){
alert("Reboot en EdgeB realizado con exito");tigB=0; 
mostrarbotones();}
else if(xB==0 && tigB==1){
alert("Password incorrecto, Reboot en EdgeB abortado");tigB=0;
mostrarbotones();}
           if(this.responseXML.getElementsByTagName('ValuC')[0].childNodes[0].nodeValue === "checked"){
         xC=1;}else{ xC=0;}
         
         if (xC==1 && tigC==1){
alert("Reboot en EdgeC realizado con exito");tigC=0; 
mostrarbotones();}
else if(xC==0 && tigC==1){
alert("Password incorrecto, Reboot en EdgeC abortado");tigC=0;
mostrarbotones();}
          if(this.responseXML.getElementsByTagName('ValuD')[0].childNodes[0].nodeValue === "checked"){
         xD=1;}else{ xD=0;}
         
         if (xD==1 && tigD==1){
alert("Reboot en EdgeD realizado con exito");tigD=0;
mostrarbotones();	   }
else if(xD==0 && tigD==1){
alert("Password incorrecto, Reboot en EdgeD abortado");tigD=0;
mostrarbotones();}						

        
       

}}
}

}	

           


request.open("GET", "ajax_inputs" + nocache, true);

request.send(null);

setTimeout('ValoresAjax()', 1000);


strRA = "";
strRB = "";
strRC = "";
strRD = "";


}


function RebootA(){
var user= prompt("clave de Reboot");

nocache = "&nocache=" + Math.random() * 1000000;
var request = new XMLHttpRequest();
strRA = user;
request.open("GET", "REBOOTER" +"&"+ strRA + "&RebootA" + nocache, true);
request.send(null);
user = "";
strRA = "";
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

nocache = "&nocache=" + Math.random() * 1000000;
var request = new XMLHttpRequest();
strRB = userB;
request.open("GET", "REBOOTER" +"&"+ strRB + "&RebootB" + nocache, true);
request.send(null);
userB = "";
strRB = "";
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
nocache = "&nocache=" + Math.random() * 1000000;
var request = new XMLHttpRequest();
strRC = userC;
request.open("GET", "REBOOTER" +"&"+ strRC + "&RebootC" + nocache, true);
request.send(null);
userC = "";
strRC = "";
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
nocache = "&nocache=" + Math.random() * 1000000;
var request = new XMLHttpRequest();
strRD = userD;
request.open("GET", "REBOOTER" +"&"+ strRD + "&RebootD" + nocache, true);
request.send(null);
userD = "";
strRD = "";
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