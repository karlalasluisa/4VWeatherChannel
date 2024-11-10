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
});
