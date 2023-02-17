function calcularEdadMasGrande(edades) {
	let edadMasGrande = edades[0];
	edades.forEach(function(edad){
		if (edad > edadMasGrande) {
			edadMasGrande = edad;
		}
	});
	return edadMasGrande;
}

function calcularEdadMasPequenia(edades) {
	let edadMasPequenia = edades[0];
	edades.forEach(function(edad){
		if (edad < edadMasPequenia) {
			edadMasPequenia = edad;
		}
	});
	return edadMasPequenia;
}

function calcularEdadPromedio(edades) {
	let sumaEdades = 0;
	edades.forEach(function(edad){
		sumaEdades += edad;
	});
	return sumaEdades / edades.length;
}
