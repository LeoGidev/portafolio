strText = '';
strText2 = '';

function SendText() {
    var formData = new FormData(document.getElementById('txt_form'));
    var xhr = new XMLHttpRequest();
    var mensaje = document.getElementById('mensaje');
    var ipv4Pattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    console.log(formData.get('ip'));
    if (!ipv4Pattern.test(formData.get('ip')) || !ipv4Pattern.test(formData.get('gw'))) {
        event.preventDefault(); // Evitar que se envíe el formulario
        mensaje.textContent = 'Formato IPv4 inválido';
    } else {
    
    
    xhr.open('POST', 'set.php', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // Manejar la respuesta aquí, si es necesario
                var response = JSON.parse(xhr.responseText);
                
                // Cambiar las con los valores recibidos
                document.getElementById('ip').innerHTML = response.ip;
                document.getElementById('gw').innerHTML = response.gw;
                mensaje.textContent = 'Ip y Gw cambiados';
               
            } else {
                // Manejar errores de la solicitud
                alert('Error en la solicitud');
            }
        }
    };

    xhr.send(formData);}
}

 function GetArduinoInputs() {
        var nocache = '&nocache=' + Math.random() * 1000000;
        var request = new XMLHttpRequest();
    
        request.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    if (this.responseXML != null) {
                        
                        var tension = this.responseXML.getElementsByTagName('button1')[0].childNodes[0].nodeValue;
                        var estado = document.getElementById('EstadoLinea');
                        console.log(tension);
                        
                        if(tension < 180){
                            estado.innerHTML= "Peligro";
                            estado.className= "btn-danger";
                        }else if(tension < 200 ){
                            estado.innerHTML= "Precaución";
                            estado.className= "btn-warning";
                        }else{
                            estado.innerHTML= "OK";
                            estado.className= "btn-success";
                        }

                        document.getElementById('TenL').innerHTML = tension;

                        document.getElementById('CorrL').innerHTML = this.responseXML.getElementsByTagName('button2')[0].childNodes[0].nodeValue;
                        document.getElementById('TenB').innerHTML = this.responseXML.getElementsByTagName('button3')[0].childNodes[0].nodeValue;
                        document.getElementById('CorrB').innerHTML = this.responseXML.getElementsByTagName('button4')[0].childNodes[0].nodeValue;
                        document.getElementById('TempA').innerHTML = this.responseXML.getElementsByTagName('button5')[0].childNodes[0].nodeValue;
                        document.getElementById('TempB').innerHTML = this.responseXML.getElementsByTagName('button6')[0].childNodes[0].nodeValue;
                    }
                }
            }
        };

        
       
       
       
        request.open('GET', 'ArduSimu.php?' + nocache, true);
        request.send(null);
        setTimeout(GetArduinoInputs, 5000);
    }
    