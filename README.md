# Aplicación de Pronóstico del Tiempo

Esta es una aplicación web de pronóstico del tiempo que permite a los usuarios consultar las condiciones meteorológicas actuales en su ubicación o buscar el clima de otras ciudades. La aplicación muestra el pronóstico del clima para los próximos 4 días usando la API de OpenWeather.

---

## Tabla de Contenidos
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Configuración](#-configuración)
- [Características](#-características)
- [Licencia](#-licencia)

---

## Tecnologías

Este proyecto utiliza las siguientes tecnologías y bibliotecas:

- **HTML5** y **CSS3/SASS** para el marcado y los estilos.
- **Bootstrap** para el diseño y componentes de la interfaz de usuario.
- **JavaScript (jQuery)** para la manipulación del DOM y peticiones AJAX.
- **API de OpenWeather** para obtener datos de pronóstico meteorológico.

---

## Instalación

Para poner en marcha la aplicación, sigue estos pasos:

1. Clona el repositorio:
   git clone https://github.com/tu-usuario/tu-repositorio.git
   
2. Navega hasta el directorio del proyecto:
   cd tu-repositorio
   
3. Asegúrate de tener **SASS** instalado. Si no lo tienes, instálalo usando npm:
   npm install -g sass
   
4. Compilación de SASS
Para convertir el archivo SASS principal `styles.scss` a CSS, ejecuta el siguiente comando en la terminal:
sass scss/styles.scss css/styles.css

---

## Estructura del Proyecto

```
📁 4VVWeberChannel
├── 📁 css
│   ├── styles.css               # Archivo CSS compilado a partir de styles.scss
│   └── styles.css.map           # Mapa de origen para depuración del CSS
├── 📁 img                       # Carpeta de imágenes y logotipos
├── 📁 java
│   └── app.js                   # Lógica de interacción y conexión con la API
├── 📁 scss
│   ├── _components.scss         # Estilos para componentes específicos
│   ├── _mixins.scss             # Mixins para reuso de estilos
│   ├── _variables.scss          # Variables de colores, tamaños, etc.
│   └── styles.scss              # Archivo SASS principal que importa los parciales
├── index.html                   # Página principal
└── README.md                    # Archivo de documentación
```

---

## Configuración

### API Key de OpenWeather
La aplicación utiliza la API de OpenWeather para obtener datos meteorológicos. Para configurar tu clave API:

1. Regístrate en [OpenWeather](https://openweathermap.org/) y obtén una API Key.
2. En el archivo **app.js**, reemplaza la clave de ejemplo con tu propia API Key:

   ```javascript
   const claveAPI = 'TU_API_KEY';
   ```

---

## Características

- **Clima de la ubicación actual**: Obtén el clima de la ubicación del usuario utilizando geolocalización.
- **Búsqueda por ciudad**: Permite a los usuarios consultar el clima de otras ciudades.
- **Pronóstico de 4 días**: Muestra el pronóstico extendido de los próximos 4 días.
- **Interfaz intuitiva**: La interfaz está diseñada para facilitar la navegación y la comprensión de la información.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE) en el repositorio.

---

## Notas para Desarrolladores

- **SASS**: Asegúrate de compilar el archivo `styles.scss` a `styles.css` después de realizar cambios en los estilos.
- **API Requests**: Ten en cuenta el límite de peticiones de la API gratuita de OpenWeather. Para producción, considera la posibilidad de una cuenta premium o una optimización de peticiones.
- **Soporte de Navegadores**: Recomendamos verificar la compatibilidad de geolocalización y otros elementos de la aplicación en distintos navegadores.

---

