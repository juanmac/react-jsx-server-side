react-jsx-server-side
=====================

Es un simple demo que muestra cómo *renderizar* una aplicación [ReactJS](http://facebook.github.io/react/) del lado del servidor (nodejs), sin perder la *reactividad* del lado del cliente.

## Instalación

- Instalar dependencias: `npm install`
- Iniciar el servidor: `npm start`
- Diviértete con el botón asombroso :) en `localhost:3000`
- Explora el código!

## Características
- En el servidor, se usa el módulo [node-jsx](https://github.com/petehunt/node-jsx) el cual compila automáticamente a javascript los archivos en sintaxis [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) al momento de cargarlos con `require()` (normalmente como si fueran javascript).

- El cliente recibe todo el código necesario para correr la aplicación en un único archivo .js (`bundle.js`) gracias a [connect-browserify](https://github.com/andreypopp/connect-browserify).

**NOTA:** Este demo está totalmente inspirado en [este artículo](http://www.princeton.edu/~crmarsh/react-ssr/) publicado por [Charlie Marsh](https://github.com/crm416) (Agosto 2014), así como también el los valiosos recursos que él expone al final, Así que léelo!

Este es un simple demo, no lo use en producción!