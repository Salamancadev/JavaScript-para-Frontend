/*
Entendiendo eventos y tipos: Burbuja, Captura y Propagación

En esta clase vamos a hablar sobre los eventos.
Los eventos existen en casi todos los lenguajes de programación desde el navegador hasta los servidores
Y esto pasa porque queremos que nuestro codigo sea dinamico y cambie con relación a algo, a esto lo
consideramos como un envento.

Eventos en el navegador vamos a utilizar un metodo especifico para agregarlos, este es "addEventListener"
Este genera el trigger de un evento y escuchar los eventos que estan pasando, y una vez que el evento suceda
nosotros en nuestro codigo con una funcion estemos esperando que hacer de acuerdo con ese suceso ej: Ocultar
algo, cambiar texto, etc. 

TIPOS DE EVENTOS:
    - Mouse
    - Teclado
    - Window del navegador
    - Formulario
    - Táctiles
    - Etc
    La idea con esto es que busqyemos que haya siempre cierto dinamismo que haga el usuario para lanzar eventos

FLUJO DE UN EVENTO: Esto quiere decir en donde inicia y termina el evento
    - Capturing: Es el primer lugar donde comienza, este inicia desde el window object, y el evento va recorriendo
    el DOM en su forma jerarquica hasta llegar al objeto que disparo el evento.
    - Target: Este es el objeto que inicio el evento.
    - Bubbling: El evento vuelve a subir al window para mostrar el resultado.
*/