#Fun with Babel
Es básicamente una tarea de gulp y un setup mínimo para poder empezar a jugar con Ecmascript 6 y que corra en cualquier navegador, gracias a la magia de Babel.

##1. Requisitos del sistema

####1.1 Tener instalado [Node.js](https://nodejs.org/) o [io.js](https://iojs.org/es/)

####1.2 Instalar gulp globalmente
```
sudo npm install -g gulp
```

####1.3 Instalar babel globalmente
```
sudo npm install -g babel
```

##2. En la carpeta del proyecto


###2.1 Instalar los módulos node del proyecto
```
npm install
```

###2.2 Iniciar gulp
```
gulp
```

###2.3 Escribir código ES6 en el archivo es6.js

Cada vez que se registren cambios en es6.js se regenerará el archivo es5.js con la conversión a ES5. Este último archivo está vinculado al index.html para su ejecución en cualquier navegador.