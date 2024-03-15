function mostrar(){
    console.log("hola");
    var bt = document.getElementsByClassName('tras');
    for (var i = 0; i < bt.length; i++) {
        bt[i].classList.toggle('ver');
    }
    
   
}
//en proceso