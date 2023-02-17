const $agregarIntegrantes = document.querySelector('#agregar-integrantes');

$agregarIntegrantes.onclick = function(event) {
	eliminarIntegrantesCreados(integrantes);
	const cantidadIntegrantes = document.querySelector('#integrantes').value;
	const errorIngresoIntegrantes = comprobarIngresoDeIntegrantes(cantidadIntegrantes);
	if (!errorIngresoIntegrantes) {
		ocultarErrorIngresoIntegrantes();
		ocultarMensajesResultados();
		agregarIntegrantes();
		mostrarBotones();
	} else {
		mostrarErrorIngresoIntegrantes(errorIngresoIntegrantes);
		ocultarMensajesResultados();
		ocultarBotones();
	}
	event.preventDefault();
}

function eliminarIntegrantesCreados() {
	const $integrantes = document.querySelectorAll('#integrantes-familia div');
	$integrantes.forEach(function(integrante){
		integrante.remove();
	});
}

function comprobarIngresoDeIntegrantes(cantidadIntegrantes) {
	if (cantidadIntegrantes === '' || cantidadIntegrantes <= 0) {
		return 'Debes agregar al menos 1 integrante';
	} else if (/\./.test(cantidadIntegrantes)) {
		return 'No puedes agregar integrantes con punto decimal';
	} else {
		return '';
	}
}

function crearIntegrante() {
	const $integrante = document.createElement('div');
	$integrante.classList.add('row');
	$integrante.classList.add('row-cols-lg-auto')
	const $contenedorLabel = document.createElement('div');
	$contenedorLabel.classList.add('col');
	const nuevoLabel = document.createElement('label');
	nuevoLabel.classList.add('form-label');
	const textoLabel = document.createTextNode('Por favor, inserta la edad del familiar: ');
	const $contenedorInput = document.createElement('div');
	$contenedorInput.classList.add('col-6')
	const nuevoInput = document.createElement('input');
	nuevoInput.classList.add('form-control');
	const atributoInput = document.createAttribute('type');
	atributoInput.value = 'number';
	nuevoLabel.appendChild(textoLabel);
	nuevoInput.setAttributeNode(atributoInput);
	$contenedorLabel.appendChild(nuevoLabel);
	$contenedorInput.appendChild(nuevoInput);
	$integrante.appendChild($contenedorLabel);
	$integrante.appendChild($contenedorInput);
	return $integrante;
}

function agregarIntegrantes() {
	const $nodoIntegrantes = document.querySelector('#integrantes-familia');
	cantidadIntegrantesFamilia = document.querySelector('#integrantes').value;
	if (cantidadIntegrantesFamilia > 0) {	
		for (let i = 1; i <= cantidadIntegrantesFamilia; i++) {
			const nuevoIntegrante = crearIntegrante();
			agregarIntegrante($nodoIntegrantes, nuevoIntegrante);
		}
	} else {
		return false;
	}
}

function agregarIntegrante(nodoIntegrantes, integrante) {
	nodoIntegrantes.appendChild(integrante);
}

function mostrarErrorIngresoIntegrantes(mensajeError) {
	const $mensaje = document.querySelector('#alerta-ingreso-integrantes');
	$mensaje.textContent = mensajeError;
	$mensaje.classList.remove('oculto');
}

function ocultarErrorIngresoIntegrantes() {
	const $mensaje = document.querySelector('#alerta-ingreso-integrantes');
	$mensaje.classList.add('oculto');
}

function mostrarBotones() {
	document.querySelector('#boton-calcular').classList.remove('oculto');
	document.querySelector('#boton-resetear').classList.remove('oculto');
}

function ocultarBotones(botonCalcular, botonResetear) {
	document.querySelector('#boton-calcular').classList.add('oculto');
	document.querySelector('#boton-resetear').classList.add('oculto');
}
