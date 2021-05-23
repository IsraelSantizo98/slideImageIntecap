//Guarda cada una de las fotos que esten con ese nombre de clase y se transforma en un array
//array permite almacenar varios valores y acceder a cada objeto e inicia con el indice 0.
var loteFotos = document.getElementsByClassName('fotoCarousel');
//Se agregan contador para poder tener registro de que foto colocaremos el disploy block
var contador = 0;
//Se agrega con el indice inicial con display block para que se ve la primera imagen
loteFotos[0].style.display='block';
//la funcion es para ir a la siguiente imagen
function nextImage(){
    //Se suma al contador para que un valor aumentado por 1 en cada click de boton
    contador++;
    //Condiciona a que cuando contador sea el total de la capacidad de length entonces regrese a 0
    if(contador == loteFotos.length){
        contador=0;
    }
    //Este ciclo sirve para colocar todo a display none, trabaja en conjunto con la variable contador para que contador se vaya aumentado pero el for pone todo en none
    for(var i = loteFotos.length -1; i>=0; i--){ //Coloca la variable i como el ultimo elemento del array, coloca i que sea mayor o igual a 0 y entonces le resta 1 en otras palabras se inicializa con el numero mayor del array en este caso 5 y mientras i sea mayor o igual a 0 le restara 1 cada vez
        loteFotos[i].style.display='none';//Coloca todas la fotos en 0
        //console.log("Prueba"+loteFotos[i])
        //document.getElementsByClassName('fotoCarousel').style.display='block'
    }
    console.log(contador);
    //Luego ya que contador se sumo y que el for puso las demas fotos con none, este se coloca el valor sumado de contador para hacer que solo una foto tenga el display block
    loteFotos[contador].style.display='block';
};
function previousImage(){
    contador--;
    //Condiciona a que cuando el contador sea -1 (un elemento que no existe en el array) entonces el contador pasara el maximo de incide del array
    if(contador == -1){
        contador = 4;
        //contador=loteFotos[loteFotos.length+1];
    }
    for(var i = loteFotos.length -1; i>=0; i--){
        loteFotos[i].style.display='none';
        //console.log("Prueba"+loteFotos[i])
        //document.getElementsByClassName('fotoCarousel').style.display='block'
    }
    console.log(contador);
    loteFotos[contador].style.display='block';
};
/*
for(var i = 0; i < loteFotos.length; i++){
    loteFotos[i].style.display='block';
    console.log("Prueba"+loteFotos[i])
    //document.getElementsByClassName('fotoCarousel').style.display='block'
}
*/