//Guarda cada una de las fotos que esten con ese nombre de clase y se transforma en un array
var loteFotos = document.getElementsByClassName('fotoCarousel');
var contador = 0;
//array permite almacenar varios valores y acceder a cada objeto e inicia con el indice 0.
loteFotos[0].style.display='block';
function nextImage(){
    contador++;
    for(var i = loteFotos.length -1; i>=0; i--){
        loteFotos[i].style.display='none';
        //console.log("Prueba"+loteFotos[i])
        //document.getElementsByClassName('fotoCarousel').style.display='block'
    }
    loteFotos[contador].style.display='block';
};
function previousImage(){
    contador--;
    for(var i = loteFotos.length -1; i>=0; i--){
        loteFotos[i].style.display='none';
        //console.log("Prueba"+loteFotos[i])
        //document.getElementsByClassName('fotoCarousel').style.display='block'
    }
    loteFotos[contador].style.display='block';
};
/*
for(var i = 0; i < loteFotos.length; i++){
    loteFotos[i].style.display='block';
    console.log("Prueba"+loteFotos[i])
    //document.getElementsByClassName('fotoCarousel').style.display='block'
}
*/