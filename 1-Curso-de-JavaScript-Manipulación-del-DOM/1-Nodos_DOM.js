/* En esta calse vamos a ver la diferencia entre el DOM y el Object Widonw
de manera pratica
Lo que vamos a trabajar lo haremos en el navegador.

En elementos podemos ver nuestro codigo HTML, esto quiere decir 
que ya se ha parseado(Convertir una serie de datos a un formato que sea más fácil de leer, 
analizar, o procesar.), osea que ya existe el DOM 

Si en la consola escribimos:
 - document: Nos dara un documento con una URL, si se habre es el mismo HTML
 - console.dir(document): Nos dara un objeto, este objeto es el DOM practicamente del HTML
 - window: Trae un objeto similar pero este trae algunos metodos particulares de la
    ventana donde estamos situados. Como el alert, o el manejo de cache.
    Hay otros metodos que solo lo da el navegador pero no el DOM
Diferencia:
 Window es un objeto padre pues da acceso al document (hijo) una vez que el HTML se haya parseado
 y ya JS podemos manipular los nodos.

*/

console.log("hola");