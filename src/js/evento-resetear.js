const $botonResetear = document.querySelector('#boton-resetear');

$botonResetear.onclick = function(event) {
	eliminarIntegrantesCreados();
	ocultarMensajesResultados();
	ocultarBotones();
	event.preventDefault();
}

function ocultarMensajesResultados() {
	document.querySelector('#mensajes-resultados').classList.add('oculto');
}
