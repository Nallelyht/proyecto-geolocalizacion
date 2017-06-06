var restaurantes = [
	{
		"nombre": "La Casa de Toño - Clavería",
		"direccion": "Direccion: Calle Floresta No. 77 Col. Clavería",
		"lat": "19.4660768", 
		"lng": "-99.1865509"

	},
	{
		"nombre": "La Casa de Toño - Santa Maria la Rivera",
		"direccion": "Direccion: Calle Sabino No. 166 Col. Santa María la Ribera",
		"lat": "19.4497338", 
		"lng": "-99.1600218"
	},
	{
		"nombre": "La Casa de Toño - Marina Nacional",
		"direccion": "Direccion: Calle Bahía del Espíritu Santo No. 21 Local 2 Col. Anáhuac",
		"lat": "19.4398648",
		"lng": "-99.1777897"
	},
	{
		"nombre": "La Casa de Toño - Lindavista",
		"direccion": "Direccion: Av. Guillermo Massieu Helguera No. 86 Col. La Escalera",
		"lat": "19.5107253",
		"lng": "-99.1374483" 
	},
	{
		"nombre": "La Casa de Toño - Narvarte",
		"direccion": "Direccion: Av. Cuauhtémoc No. 439 Col. Piedad Narvarte",
		"lat": "19.4033427", 
		"lng": "-99.1557774"

	},
	{
		"nombre": "La Casa de Toño - Zona Rosa",
		"direccion": "Direccion: Calle Londres No. 144 Col. Juárez",
		"lat": "19.424758",
		"lng": "-99.1652"
	}
];
var plantillaRestaurantes = '<article class="col-xs-8 col-xs-offset-2 well well-sm">' +
		'<h4 class="name" data-latitude="__lat__" data-longitude="__lng__">__nombre__</h4>' + '<h5>__direccion__</h5>' + '<h5>__latitud__</h5>' + '<h5>__longitud__</h5>' +	'</article>';

var cargarPagina = function () {
	obtenerUbicacion();
	$(".name").click(cambiarUbicacion);
	$("#search-form").submit(filtrarRestaurantes);
	
};

var filtrarRestaurantes= function (e) {
	e.preventDefault();
	var criterioBusqueda = $("#search").val().toLowerCase();
	var restaurantesFiltrados = restaurantes.filter(function (restaurante) {
		return restaurante.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
	});
	mostrarRestaurante(restaurantesFiltrados);
};

var mostrarRestaurante = function (restaurantes) {
	var plantillaFinal = "";
	restaurantes.forEach(function (restaurante) {
		plantillaFinal += plantillaRestaurantes.replace("__nombre__", restaurante.nombre)
			.replace("__direccion__", restaurante.direccion)
			.replace("__latitud__", restaurante.lat).replace("__longitud__", restaurante.lng).replace("__lat__", restaurante.lat).replace("__lng__", restaurante.lng);
	});
	$("#show").html(plantillaFinal);
		$(".name").click(cambiarUbicacion);
};

var obtenerUbicacion = function (e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Actualice su navegador");
	}
};


var mostrarPosicion = function (posicion) {


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
function cambiarUbicacion() {
	var latitud = $(this).data("latitude");
	var longitud = $(this).data("longitude");

	var coordenadas = {
		lat: latitud,
		lng: longitud
	};

	console.log(coordenadas);
	mostrarMapa(coordenadas);
}


$(document).ready(cargarPagina);

