var map = L.map('map').
    setView([-32.8908, -68.8272], 12);
     
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        
        maxZoom: 18
    }).addTo(map);
    
    var Icono = L.icon({
    iconUrl: "img/up.png",
    iconSize: [30, 30],
    iconAnchor: [15, 40],
    
    shadowSize: [35, 50],
    shadowAnchor: [18, 38],
    popupAnchor: [0, -40]
    });
    
    var IconoDown = L.icon({
    iconUrl: "img/down.png",
    iconSize: [30, 30],
    iconAnchor: [15, 40],
    
    shadowSize: [35, 50],
    shadowAnchor: [18, 38],
    popupAnchor: [0, -40]
    });
    
    var customPopup1 = 'Nodo:Plaza Burgos';
    var customOptions1 = {
        'maxWidth': '200',
        'className' : 'custom'
    }
    var marker1 = L.marker([-32.849376475660264, -68.84059851534498], { title: 'Plaza Burgos',
      draggable: false,
      icon: Icono}).bindPopup(customPopup1, customOptions1).addTo(map);
    var customPopup2 = 'Nodo:Godoy Cruz';
    var customOptions2 = {
        'maxWidth': '200',
        'className' : 'custom'
    }
    var marker2 = L.marker([-32.925101961991615, -68.84443919027653], { title: 'Godoy Cruz',
      draggable: false,
      icon: Icono}).bindPopup(customPopup2, customOptions2).addTo(map);
    
      var a='';
      
      function cambiarpunto() {
        var estado = "";
        
        $.ajax({
            url: 'map.php',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                // Limpiar mapa antes de agregar nuevos marcadores
               
                for (var key in markers) {
                    map.removeLayer(markers[key]);
                }
                
                // Agregar datos a la tabla
                $.each(data, function(index, item) {
                
                    var markerN = 'marker' + item.numero;
                    var elestado = item.estado;
                    var coordenadas = item.coordenadas.split(',');
    
                    if (elestado == 'down') {
                        markers[markerN] = L.marker([parseFloat(coordenadas[0]), parseFloat(coordenadas[1])], {
                            title: 'hola',
                            draggable: false,
                            icon: IconoDown
                        }).bindPopup(customPopup1, customOptions1).addTo(map);
                    } else {
                        markers[markerN] = L.marker([parseFloat(coordenadas[0]), parseFloat(coordenadas[1])], {
                            title: 'hola',
                            draggable: false,
                            icon: Icono
                        }).bindPopup(customPopup1, customOptions1).addTo(map);
                    }
                });
            },
            error: function(error) {
                console.error('Error al realizar la consulta AJAX:', error);
            }
        });
    }
    
    //setInterval(cambiarpunto, 2000);

    var numero=3;
    var markers = {};
    var detalleNombre = {};

    function nuevopunto() {

        // Obtener los valores de los campos del formulario
        var nombre = document.getElementsByName("nombre")[0].value;
       var coordenadas = document.getElementsByName("coordenadas")[0].value;

        // Mostrar los valores en el console.log
        console.log("Nombre:", nombre);
        console.log("Coordenadas:", coordenadas);

        var markerN = 'marker' + numero;
        var elestado = 'up';
        var coordenadas = coordenadas.split(',');
        var nombreN = 'cust' + numero;
        detalleNombre[nombreN] = nombre;
            
        markers[markerN] = L.marker([parseFloat(coordenadas[0]), parseFloat(coordenadas[1])], {
            title: nombre,
            draggable: false,
            icon: Icono
        }).bindPopup(detalleNombre[nombreN], customOptions1).addTo(map);
        numero ++;
    }

    function copyToClipboard(elementId) {
        
        var coordElement = document.getElementById(elementId);
        var textToCopy = coordElement.innerText;

        // Clipboard API
        navigator.clipboard.writeText(textToCopy)
            .then(function () {
                
                alert('Coordenadas copiadas: ' + textToCopy);
            })
            .catch(function (err) {
                console.error('Error al copiar al portapapeles: ', err);
            });
    }
