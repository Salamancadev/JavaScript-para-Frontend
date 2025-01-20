/*
Navegación efectiva entre nodos:

En esta clase vamos a ver como navegar entre lo elementos del DOM de forma
jerarquica. Por qué?: Porque habra ocasiones en las que tendremos que seleccionar
elementos que pueda ser el hijo o el padre de otro elemento.

Ej: Si seleccionamos un <il> y tenemos que llegar a su padre <ul> tendemos
que saber como llegar ahi.

Vamos a empezar con el primer ejercicio.
    1. Vamos a seleccionar un elementos que tenga el ID de "parent" que es un <ul>
    Este es un padre, con este vamos a navergar entre los hijos.

    Hay varias formas para navegar en el DOM, como:
        1. A traves de los hijos: head>menu>ul>li
        2. De forma descendente: ver codigo
*/

// //En este le estamos diciendo que traiga el elemento con id parent
// const parent = document.getElementById("parent");
// console.log(parent);

// //Aqui se le dice que traiga todos los elementos de parent
// const children = parent.children;
// console.log(children);

// //Para ir al primer hijo que hay:
// const firstChild = parent.firstElementChild;
// console.log(firstChild);

// // Para ir al ultimo hijo que hay:
// const lastChild = parent.lastElementChild;
// console.log(lastChild);

// //Para ir al hermano que esta antes del padre que hay:
// const previousSibling = parent.previousElementSibling;
// console.log(previousSibling);

// //Para ir al siguiente hermano del padre hay que:
// const nextSibling = parent.nextElementSibling;
// console.log(nextSibling);

//Lista de metodos para navegar en el DOM
//No es habitual seleccionar elementos de esta forma pero puede surgir el caso

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

//Ahora vamos con el ejemplo de:
 //2. Como seleccionar padres desde los hijos.

 const children2 = document.querySelector("li")
 console.log(children2);

 //Ahora vamos con tres ejemplos de como este hijo puede navergar hacia los padres
 
 //Aqui le decimos que traiga el Nodo padre
 const parent2 = children2.parentNode;
 console.log(parent2);
 
 //Aqui le decimos que traiga el Elemento padre
 const grandParent = children2.parentElement;
 console.log(grandParent);
 
 //Aqui le estamos diciendo que tragica el elemento mas cercano.
 //Es como decir que traiga el abuelo
 const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
 console.log(grandGrandParent);
 