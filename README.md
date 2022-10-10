# Coolx
> Este proyecto es una aplicación web realizada por un [equipo de desarrolladores](#contacto) como Proyecto Final de Bootcamp para la empresa Coolx.<br/>
 "En Coolx nos encargamos de optimizar el  registro y la evaluación de tus proyectos forestales. Mediante teledetección y big data, disminuimos el tiempo necesario para que tu consultoría medioambiental genere créditos de carbono".
<br/>
> Vídeo presentación en YouTube: XXXXXXXXXXXXX


## Tabla de Contenidos
* [Información General](#informacion-general)
* [Tecnologías utilizadas](#tecnologías-utilizadas)
* [Características](#características)
* [Capturas](#capturas)
* [Instalación y configuración](#instalación-y-configuración)
* [Agradecimientos](#agradecimientos)
* [Contacto](#contacto)
* [Licencia](#licencia)


## Información General
- El administrador puede crear proyectos, modificarlos, cambiar su estado y eliminarlos; también puede buscar y ordenar proyectos por nombre, país y ganancias. Además, puede crear usuarios, ver un listado de los mismos y asignarles proyectos.
- El usuario puede registrarse, editar su perfil, crear y editar sus propios proyectos y ver un listado de los mismos; también puede ver un listado de los proyectos disponibles para invertir y realizar la compra de estos, además de de ponerse en contacto con la empresa.


## Tecnologías utilizadas
- Front-end: HTML5 - SASS - Bootstrap - JavaScript - Validator
- Back-end: Node.js - Express [  Otras librerías:  MySql  |  Multer  |  Bcrypt  |  Nodemon  |  Nodemail  |  Puppeteer  ]
- Base de datos: MySQL


## Características
- Contraseñas encriptadas.
- Diseño responsive.
- Envío de emails desde formulario de contacto y desde registro de usuario.
- Recuperación de contraseña a través de email.
- Conversión a formato PDF y descarga del fichero.


## Capturas
![Example screenshot]
<br/>
<br/>
![Example screenshot]
<br/>
<br/>
![Example screenshot]
<br/>
<br/>
![Example screenshot]
<br/>
<br/>
![Example screenshot]


## Instalación y configuración
1 - Crear la base de datos mediante el script coolx.sql, localizado en el directorio /client/public
<br/>
2 - Copiar el archivo .env (proporcionado aparte, no disponible en este repositorio) en el directorio /server
<br/>
3 - Desde el directorio /server, ejecutar: <br/>
   npm i
<br/>
Esto instalará las dependencias necesarias en el servidor.
<br/>
4 - Desde el directorio /client, ejecutar:<br/>
   npm i
<br/>
Esto instalará las dependencias necesarias en el cliente.
<br/>
5 - Desde el directorio /server, lanzar el servidor mediante el comando:<br/>
   npm run dev
<br/>
6 - Desde el directorio /client, ejecutar el cliente mediante el comando:<br/>
      npm start
<br/>
7 - En el navegador, ir a la dirección: <br/>
   localhost:3000
<br/>
8 - La aplicación web se ejecutará entonces en el navegador.


## Agradecimientos
- Este proyecto ha sido realizado como parte del Bootcamp Fullstack Web Developer en [Socratech](https://socratech.es/).
- Agradecimientos a los formadores Carlos Yañez, Miriam Segura y Santigo Peña por su ayuda y dedicación.
- Agradecimientos a la empresa Coolx por confiar en nosotros.


## Contacto
Este proyecto ha sido realizado por un equipo de cinco desarrolladores compuesto por:
- [Pablo Fuentes](https://www.linkedin.com/in/pablo-fuentes-quirosa/)
- [Franco Amoroso](https://www.linkedin.com/in/francoamoroso/)
- [Andrea Sosa](https://www.linkedin.com/in/andrea-sosamolina/)
- [Jose Antonio Posada](https://www.linkedin.com/in/jose-antonio-posada/)
- [Bárbara Jiménez](https://www.linkedin.com/in/barbarajg/)

## Licencia
- El código del proyecto aquí alojado se encuentra bajo licencia <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional</a>.
- El nombre "Coolx", los logos y toda información y contenidos relacionados con la empresa es propiedad de [Coolx©](https://coolx.earth/) y no podrán utilizarse sin su consentimiento expreso.
