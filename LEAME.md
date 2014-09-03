react-jsx-server-side
=====================

Un simple demo que muestra una de las formas posibles de cómo *renderizar* una aplicación [ReactJS](http://facebook.github.io/react/) del lado del servidor (nodejs), sin perder la *reactividad* del lado del cliente. Está totalmente inspirado en [este artículo](http://www.princeton.edu/~crmarsh/react-ssr/) publicado por [Charlie Marsh](https://github.com/crm416) (Agosto 2014), así como también en los recursos que él expone al final. Si necesitas saber más de qué va esto recomiendo su lectura.

Este es un simple demo. **No usar en producción!**

## Instalación

- Instalar dependencias: `$ npm install`
- Iniciar el servidor: `$ npm start`
- Diviértete con el botón asombroso :) en `localhost:3000`
- Explora el código!

## Características
* En el servidor se puede usar `require()` para incluir archivos `.jsx` en sintaxis [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) como lo hacemos normalmente con javascript. Estos archivos son compilados automáticamente a código javascript al momento de cargarlos gracias al modulo [node-jsx](https://github.com/petehunt/node-jsx).

* Los archivos `.jsx` que conforman la aplicación son cargados, compilados y renderizados en cada petición http, lo que significa que uno puede editar el código, y sin necesidad de reiniciar el servidor, el cliente siempre recibe el markup html actualizado, parecido a la manera en que se comportan sistemas de plantillas tales como *ejs* o *jade*.

* El cliente recibe todo el código necesario para correr la aplicación (incluyendo react) en un único archivo .js (`bundle.js`) gracias a [connect-browserify](https://github.com/andreypopp/connect-browserify). Este archivo también es *re-compilado* de manera automática ante cualquier cambio en el código!

**Nota:** Este es un simple demo que utiliza algunos *hacks* solo apropiados para la etapa de desarrollo y nada aptos para producción. En este último caso y por dar algunos ejemplos:

* El archivo `bundle.js` que recibe el buscador debería ser compilado a javascript, minificado y comprimido previamente, totalmente fuera del servidor con [Browserify](http://browserify.org/) y herramientas como [Grunt](http://gruntjs.com/) o [Gulp](http://gulpjs.com/).
* Del lado del servidor la aplicación debería ser renderizada una única vez al momento de iniciar el servidor y NO en cada petición http. 
* Tampoco es conveniente utilizar el módulo [node-jsx](https://github.com/petehunt/node-jsx) para cargar los archivos ya que aplica un parche *no muy convencional* al `require()` de nodejs. Es preferible compilar previamente a javascript todos los archivos en sintaxis *JSX* con [react-tools](https://www.npmjs.org/package/react-tools) para no tener que aplicar tal parche.