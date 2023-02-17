function probarComprobarIngresoDeIntegrantes() {
	console.assert(comprobarIngresoDeIntegrantes('') === 'Debes agregar al menos 1 integrante',
		'comprobarIngresoDeIntegrantes no comprueba que el usuario no haya ingresado un valor en el input #integrantes'
		);
	console.assert(comprobarIngresoDeIntegrantes('0') === 'Debes agregar al menos 1 integrante',
		'comprobarIngresoDeIntegrantes no comprueba que el usuario haya ingresado el valor 0'
		);
	console.assert(comprobarIngresoDeIntegrantes('-35') === 'Debes agregar al menos 1 integrante',
		'comprobarIngresoDeIntegrantes no comprueba que el usuario haya ingresado un valor menor a 0'
		);
	console.assert(comprobarIngresoDeIntegrantes('5.5') === 'No puedes agregar integrantes con punto decimal',
		'comprobarIngresoDeIntegrantes no comprueba que el usuario haya ingresado un valor con punto decimal'
		);
	console.assert(comprobarIngresoDeIntegrantes('5') === '',
		'comprobarIngresoDeIntegrantes no comprueba que el usuario haya ingresado un valor válido'
		);
}

function probarCalcularEdadMasGrande() {
	console.assert(calcularEdadMasGrande([15, 3, 24, 32, 5]) === 32,
		'calcularEdadMasGrande no calcula correctamente la edad más grande de las edades brindadas'
		);
}

function probarCalcularEdadMasPequenia() {
	console.assert(calcularEdadMasPequenia([15, 3, 24, 32, 5]) === 3,
		'calcularEdadMasPequenia no calcula correctamente la edad más pequenia de las edades brindadas'
		);
}

function probarCalcularEdadPromedio() {
	console.assert(calcularEdadPromedio([15, 3, 24, 32, 5]) === 15.8,
		'calcularEdadPromedio no calcula correctamente la edad promedio de las edades brindadas'
		);
}

probarComprobarIngresoDeIntegrantes();
probarCalcularEdadMasGrande();
probarCalcularEdadMasPequenia();
probarCalcularEdadPromedio();
