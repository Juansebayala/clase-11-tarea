const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(event) {
	const $edadesFamilia = document.querySelectorAll('#integrantes-familia input');
	const edadesFamilia = conseguirEdadesDeFamilia($edadesFamilia);
	const resultadoEdades = {
		edadMasGrande: calcularEdadMasGrande(edadesFamilia),
		edadMasPequenia: calcularEdadMasPequenia(edadesFamilia),
		edadPromedio: calcularEdadPromedio(edadesFamilia)
	}
	agregarMensajes(resultadoEdades.edadMasGrande, resultadoEdades.edadMasPequenia, resultadoEdades.edadPromedio);
	event.preventDefault();
}

function conseguirEdadesDeFamilia($edades) {
	const edades = [];
	$edades.forEach(function(edad){
		edades.push(Number(edad.value));
	});
	return edades;
}

function agregarMensajes(edadMasGrande, edadMasPequenia, edadPromedio) {
	const $mensajeMasGrande = document.querySelector('#edad-mas-grande');
	const $mensajeMasPequenia = document.querySelector('#edad-mas-pequenia');
	const $mensajePromedio = document.querySelector('#edad-promedio');
	$mensajeMasGrande.textContent = `La edad más grande es ${edadMasGrande}`;
	$mensajeMasPequenia.textContent = `La edad más pequeña es ${edadMasPequenia}`;
	$mensajePromedio.textContent = `La edad promedio es ${edadPromedio.toFixed(2)}`;
	mostrarMensajesResultados();
}

function mostrarMensajesResultados() {
	document.querySelector('#mensajes-resultados').classList.remove('oculto');
}
