var restaurantes = [
	{
		"nombre": "Clavería",
		"direccion": "Calle Floresta No. 77 Col. Clavería",
		"lat": "19.4660768", 
		"lng": "-99.1865509"
		
	},
	{
		"nombre": "Santa Maria la Rivera",
		"direccion": "Calle Sabino No. 166 Col. Santa María la Ribera",
		"lat": "19.4497338", 
		"lng": "-99.1600218"
	},
	{
		"nombre": "Marina Nacional",
		"direccion": "Calle Bahía del Espíritu Santo No. 21 Local 2 Col. Anáhuac",
		"lat": "19.4398648," 
		"lng": "-99.1777897"
	},
	{
		"nombre": "Lindavista",
		"direccion": "Av. Guillermo Massieu Helguera No. 86 Col. La Escalera",
		"lat": "19.5107253,
		"lng": "-99.1374483" 
	},
	{
		"nombre": "Narvarte",
		"direccion": "Av. Cuauhtémoc No. 439 Col. Piedad Narvarte",
		"lat": "19.4033427", 
		"lng": "-99.1557774"
	
	},
	{
		"nombre": "Zona Rosa",
		"direccion": "Calle Londres No. 144 Col. Juárez",
		"lat": "19.424758",
		"lng": "-99.1652"
	}
];







var cargarPagina = function () {
	obtenerUbicacion();
};

var obtenerUbicacion = function (e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Actualice su navegador");
	}
};

var mostrarPosicion = function (posicion) {
	console.log(posicion);


	var coordenadas = {
		lat: posicion.coords.latitude, 
		lng: posicion.coords.longitude
	};
	mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('.map')[0], {
		zoom: 17,
		center: coordenadas
	});
	var marker = new google.maps.Marker({
		position: coordenadas,
		map: map
	});
}

$(document).ready(cargarPagina);

