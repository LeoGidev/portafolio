   
<!DOCTYPE html><html>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      <script src="https://kit.fontawesome.com/4541e18ef9.js" crossorigin="anonymous"></script>
    
      <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    
        <script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />
      <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="styles.css">
      
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Economica:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
     
     
     </head>
      <body>
        <main>
        <div class="container-fluid principal">
            <div class="row">
                <div class="col-12 col-md-6 ">
                    <div id="map"></div>
                </div>
                <div class="col-12 col-md-6 ">
                    <div class="formulario">
                    <h4>Agregar puntos</h4>
                    
                    <form method="post" method="POST">
                        <div class="form-group">				
                            <input type="text" class="form-control" name="nombre" placeholder="Nombre del punto" required>
                            <input type="text" class="form-control" name="coordenadas" autocomplete="off" placeholder="Coordenadas" required>
                        </div>              
                    
                      <button type="button" onclick="nuevopunto()" class="btn btn-success btn-block">Enviar</button>
                    </form>	
                    </div>
                    <div class="explicacion">
                        Este demo presenta nuestro avanzado sistema de monitoreo mediante direcciones IP, visualizado de manera geográfica en un mapa interactivo. 
                        Al introducir el nombre y las coordenadas correspondientes, los iconos se mostrarán automáticamente en el mapa. A continuación, proporcionamos 
                        una lista de puntos para que puedas experimentar y probar la funcionalidad de la plataforma web:
                        <ul>
                            <li>
                                Plaza Independencia: <span id="coord1">-32.88593657963769, -68.84703983068465</span>
                                <button class="btn btn-success" onclick="copyToClipboard('coord1')">Copiar</button>
                            </li>
                            <li>
                                Plaza Chile: <span id="coord2">-32.88905258304352, -68.84461802328835</span>
                                <button class="btn btn-success" onclick="copyToClipboard('coord2')">Copiar</button>
                            </li>
                            <li>
                                Parque General San Martin: <span id="coord3">-32.889620280633494, -68.87011899025954</span>
                                <button class="btn btn-success" onclick="copyToClipboard('coord3')">Copiar</button>
                            </li>
                        </ul>
                        <p>El diseño de este sistema se concibió específicamente para el monitoreo en empresas de "Wireless ISP" 
                            (proveedores de servicios de internet mediante sistemas inalámbricos). Es crucial destacar que la versión original 
                            del sistema se destina exclusivamente para uso privado, y su código fuente está disponible para aquellos interesados que deseen
                             adquirirlo mediante un pago correspondiente.</p>
                            <p>Es importante señalar que el sistema en su versión completa incluye componentes adicionales que no están disponibles en el demo,
                                ya que este último está alojado en un servidor externo y el código completo es de acceso público. Estos componentes se detallan
                            a continuación:</p>
                            
                        <ul>
                            <li>Sistema en python analizador de estado por ping</li>
                            <li>Sistema de alerta ante un estado de Down por mensaje de Telegram</li>
                            <li>Conexión entre el php servidor a la base de datos</li>
                            <li>Sistema de login con niveles de usuarios</li>
                            <li>Sistema de "parent" para determinar importancia de equipo caído</li>
                            
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
        </main>
    
    <script src="script.js">
   
     </script>
     
     </body> 
     </html>