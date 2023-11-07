# Node.js API Project

¡Hola! Soy Diego Aquino y te guiaré a través de este archivo para que puedas levantar el proyecto de manera correcta.

## Descripción

Este proyecto tiene como objetivo funcionar como una API que conecta con el proyecto de prueba. Actúa como intermediaria entre la aplicación y la base de datos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener Node.js y npm instalados en tu sistema.

### Verificando Node.js

Para verificar si Node.js ya está instalado en tu sistema, abre tu terminal o línea de comandos y ejecuta el siguiente comando:
node -v

Si ves la versión de Node.js, significa que ya está instalado. En caso contrario, sigue las instrucciones a continuación.

### Instalando Node.js

Si Node.js no está instalado, sigue estos pasos:

1. Ve al sitio oficial de Node.js en [https://nodejs.org](https://nodejs.org) y descarga la última versión para tu sistema operativo.

2. Sigue las instrucciones de instalación proporcionadas para tu sistema operativo.

### Verificando npm

Después de instalar Node.js, verifica si npm (Node Package Manager) se instaló correctamente. Ejecuta el siguiente comando:
npm -v

### Clonar o Descargar el Proyecto

Ahora, clona el repositorio o descarga el archivo ZIP del proyecto:
git clone https://github.com/tuusuario/tuproyecto.git

### Cargar el Proyecto

Navega al directorio del proyecto desde tu IDE preferido.

### Instalar las Dependencias

Para instalar las dependencias necesarias, ejecuta el siguiente comando en la raíz del proyecto:
npm install

### Ejecutar el Proyecto

Una vez que las dependencias estén instaladas, puedes iniciar el proyecto con el siguiente comando:
npm start

## Configuración de la Base de Datos
Para que este proyecto funcione correctamente, la conexión a la base de datos ya está configurada en el archivo ubicado en:
server/config/config.js

Esta configuración se encuentra diseñada para funcionar con la API publicada en la nube. Sin embargo, si deseas ejecutarla de forma local, necesitarás crear la base de datos siguiendo estos pasos:

### Base de Datos

El script proporcionado para crear la base de datos es específico para MySQL, por lo que deberás tener MySQL instalado en tu sistema.

1. Abre tu administrador de base de datos preferido.

2. Ejecuta el script proporcionado para crear la tabla ADN y los stored procedures (SPs) utilizados en la API.

   [Descargar el script de la base de datos](https://drive.google.com/file/d/12csA2sU-fV6sY_BPZEDUQiFtu7yQ8jWz/view?usp=sharing)

### Cambio de Configuración

Una vez que hayas ejecutado el script para la base de datos, es necesario que cambies la configuración en el archivo `server/config/config.js` para que coincida con los datos de tu servidor local.

Después de realizar estos pasos, podrás continuar utilizando la API y la base de datos de manera local.


## Contacto

Si tienes alguna pregunta o necesitas ayuda con este proyecto, no dudes en ponerte en contacto, Juan Diego Aquino Barrios (Diego Aquino) a través de la siguiente dirección de correo electrónico: diegoab44@gmail.com.

¡Saludos cordiales!