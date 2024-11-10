$(document).ready(function () {
    const claveAPI = 'tu_clave_API';

    // Crear las tarjetas de pronóstico al cargar la página
    crearTarjetasPronostico();

    // Detecta si se permite la geolocalización y obtiene los datos
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (posicion) {
            const latitud = posicion.coords.latitude;
            const longitud = posicion.coords.longitude;
            obtenerClimaPorUbicacion(latitud, longitud);
        }, function () {
            alert("No se pudo acceder a la ubicación. Usa la búsqueda de ciudad.");
        });
    }


    // Función para obtener el clima por geolocalización
    function obtenerClimaPorUbicacion(latitud, longitud) {
        $.getJSON(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&units=metric&lang=es&appid=${claveAPI}`, function (datos) {
            mostrarDatosClima(datos);
        });
    }

});
