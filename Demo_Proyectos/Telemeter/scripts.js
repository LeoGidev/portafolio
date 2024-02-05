strText = '';
strText2 = '';

function SendText(){
    var user= prompt('escriba el password');
    nocache = '&nocache=' + Math.random() * 1000000; var request = new XMLHttpRequest();
    strPS = user;
    strText = '&Nodo=' + document.getElementById('txt_form').form_text.value +'&IP=' + document.getElementById('txt_form').form_text1.value + '&GW=' + document.getElementById('txt_form').form_text2.value + '&end=end';
    request.open('GET', 'SETEO' + '&pass=' + strPS + strText +  nocache, true);
    request.send(null);location.href ='main.htm';}

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
    