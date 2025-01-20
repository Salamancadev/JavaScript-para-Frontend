/*
Modificando atributos y propiedades
Vamos a ver un tema importante  atributos y propiedades.

Los atributos son todo lo que le agregamos a una etiqueta HTML
    Ej: <h1 class="Titulo"></h1>
    Aqui el atributo es class

Las propiedades son el reflejo de los atributos en JS.
    Cuando en el DOM los objetos se veran los atributos reflejados como sus propiedades

Para empezar vamos a llamar el input del HTML a JS.
Esto lo hacemos llamandolo con querySlector y lo guardamos en una const
const input = document.querySelector("input");

Y llamamos nuestro objeto con: console.dir(input)
Asi podemos verificar que estos atributos ahora son propiedades del elemento.


EJ: Moficiando una propiedad en JS para modificar el atributo en HTML


*/

