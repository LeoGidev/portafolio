strText = '';
strText2 = '';

function SendText() {
    var user = prompt('Escriba el password');
    var xhr = new XMLHttpRequest();

    // Obtener los valores del formulario
    var ipValue = document.getElementById('txt_form').form_text.value;
    var gwValue = document.getElementById('txt_form').form_text2.value;

    var formData = new FormData();
    formData.append('pass', user);
    formData.append('Nodo', ipValue);
    formData.append('IP', '192.168.9.' + ipValue);
    formData.append('GW', '192.168.9.' + gwValue);

    xhr.open('POST', 'SETEO.php', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // Manejar la respuesta aquí, por ejemplo, mostrar un mensaje
                alert(xhr.responseText);

                // Redirigir solo si la respuesta es exitosa (puedes ajustar la lógica según tu necesidad)
                if (xhr.responseText.trim() === 'OK') {
                    location.href = 'main.htm';
                }
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
    