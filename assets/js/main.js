$(document).ready(function() { 

/* Objeto */
var carrusel = {};

/* Llamamos al id del ul que contiene elementos del carrusel */
carrusel.initQuery = '#el-carrusel'; //initQuery = metodo movimiento

/* Variables */
carrusel.slider = $( carrusel.initQuery + " ul,ul"+ carrusel.initQuery);  //selecciona el ul con jquery
carrusel.slides = carrusel.slider.find('li'); //encuentra un li
carrusel.number = carrusel.slides.length; //largo del carrusel ( cantidad de li )
carrusel.actual = 0; //img primer indice, parte del cero = primera foto
carrusel.height = 0; // minimo alto
carrusel.width = 0; //minimo ancho

/*  Toma el tamaño de la img del primer li para tomar ese tamaño de carrusel */
for(var i=0 ; i < carrusel.number; i++){
  var w = $(carrusel.slides[i]).width();
  var h = $(carrusel.slides[i]).height();
  carrusel.height = ( h > carrusel.height  ) ?  h : carrusel.height;  //IF ECMAscript 6 "?" es entones ":" es sino
  carrusel.width = ( w > carrusel.width  ) ? w : carrusel.width;  
}

/* CSS 
No es buena practica ponerlo en JS, pero se basa en el width y height 
que se entrega en el for anterior*/
carrusel.slider.css({
  overflow: "hidden", // overflow: especifica si se recorta el contenido
  width: carrusel.width,  
  height: carrusel.height,
  position: 'relative'
});

/* Posicion absoluta todos los <li> del carrusel */
for (var i=0;i<carrusel.number;i++){
  var sl = $(carrusel.slides[i]);
  sl.attr('class',sl.attr('class') + " slider-slide-"+i);
  sl.css({
    position : 'absolute',
    left : carrusel.width * i 
  });
}



