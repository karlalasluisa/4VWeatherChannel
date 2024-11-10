$(document).ready(function () {
    const claveAPI = 'fbf9fe2249c24292eeea81e49715a525';

    // Función para crear las tarjetas de pronóstico
    function crearTarjetasPronostico() {
        const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const contenedorPronostico = $('#forecast-cards');

        const fechaActual = new Date();

        for (let i = 0; i < 4; i++) {
            const fechaPronostico = new Date();
            fechaPronostico.setDate(fechaActual.getDate() + i);

            const nombreDia = nombresDias[fechaPronostico.getDay()];
            const numeroDia = fechaPronostico.getDate();

            // Crear la estructura de la tarjeta
            contenedorPronostico.append(`
                <div class="col-md-3 mb-4">
                    <div class="card day-card">
                        <div class="card-header text-center font-weight-bold day-header">${nombreDia}, ${numeroDia}</div>
                        <ul class="list-group list-group-flush" id="pronostico-dia${i + 1}"></ul>
                    </div>
                </div>
            `);
        }
    }


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

    // Función para obtener el clima por ciudad
    function obtenerClimaPorCiudad(ciudad) {
        $.getJSON(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&units=metric&lang=es&appid=${claveAPI}`, function (datos) {
            mostrarDatosClima(datos);
        }).fail(function () {
            alert("No se pudo encontrar la ciudad. Inténtalo de nuevo.");
        });
    }
    // Función para mostrar los datos del clima en las tarjetas
    function mostrarDatosClima(datos) {
        const ciudad = datos.city.name;
        const pais = datos.city.country;
        $(".city").text(`${ciudad}, ${pais}`);
        $(".temp").text(`${Math.round(datos.list[0].main.temp)}°C`);
        $(".description").text(datos.list[0].weather[0].description);

        for (let i = 0; i < 4; i++) {
            const datosDia = datos.list.slice(i * 8, (i + 1) * 8);
            const elementoDia = $(`#pronostico-dia${i + 1}`);
            elementoDia.empty();

            datosDia.forEach(datoHora => {
                const hora = new Date(datoHora.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const temp = `${Math.round(datoHora.main.temp)}°C`;
                const descripcion = datoHora.weather[0].description;
                const icono = `https://openweathermap.org/img/wn/${datoHora.weather[0].icon}.png`;

                elementoDia.append(`
                    <li class="list-group-item d-flex justify-content-between align-items-center transparent-blue">
                        <span>${hora} - ${temp}</span>
                        <img src="${icono}" alt="${descripcion}">
                        <span>${descripcion}</span>
                    </li>
                `);
            });
        }
    }
    
    // Crear las tarjetas de pronóstico al cargar la página
    crearTarjetasPronostico();

});
