strText = '';
strText2 = '';

function SendText() {
    var formData = new FormData(document.getElementById('txt_form'));
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'set.php', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // Manejar la respuesta aquí, si es necesario
                var response = JSON.parse(xhr.responseText);

                // Cambiar los placeholders con los valores recibidos
                document.getElementById('octeto1').placeholder = response.octeto1;
                document.getElementById('octeto2').placeholder = response.octeto2;
                document.getElementById('octeto3').placeholder = response.octeto3;
                document.getElementById('octeto4').placeholder = response.octeto4;
                document.getElementById('gw1').placeholder = response.gw1;
            } else {
                // Manejar errores de la solicitud
                alert('Error en la solicitud');
            }
        }
    };

    xhr.send(formData);
}




    function GetArduinoInputs() {
        var nocache = '&nocache=' + Math.random() * 1000000;
        var request = new XMLHttpRequest();
    
        request.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    if (this.responseXML != null) {
                        document.getElementById('TenL').innerHTML = this.responseXML.getElementsByTagName('button1')[0].childNodes[0].nodeValue;
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
    