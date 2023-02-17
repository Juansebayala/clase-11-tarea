const URL = "127.0.0.1:8080";

describe("Calcular edades familia", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  describe("Comprueba ingreso de integrantes erroneos", () => {
    it("Muestra mensaje error al no ingresar ningún valor", () => {
      cy.get("#agregar-integrantes").click();
      cy.get("#alerta-ingreso-integrantes")
        .should("not.have.class", "oculto")
        .should("have.text", "Debes agregar al menos 1 integrante");
    });

    it("Muestra mensaje error al ingresar el valor 0 o menor", () => {
      agregarIntegrantes("-32");
      cy.get("#alerta-ingreso-integrantes")
        .should("not.have.class", "oculto")
        .should("have.text", "Debes agregar al menos 1 integrante");
    });

    it("Muestra mensaje error al ingresar valor con punto decimal", () => {
      agregarIntegrantes("5.5");
      cy.get("#alerta-ingreso-integrantes")
        .should("not.have.class", "oculto")
        .should("have.text", "No puedes agregar integrantes con punto decimal");
    });
  });

  describe("Calcula correctamente con dos edades", () => {
    it("Agrega dos integrantes", () => {
      agregarIntegrantes("2");
      cy.get("#integrantes-familia")
        .find("input")
        .should(($integrantes) => {
          expect($integrantes).to.have.length(2);
        });
    });

    it("Resuelve con edad de dos integrantes", () => {
      agregarIntegrantes("2");
      calculaEdadesIntegrantes("24", "26");
      cy.get("#edad-mas-grande").should(
        "have.text",
        "La edad más grande es 26"
      );
      cy.get("#edad-mas-pequenia").should(
        "have.text",
        "La edad más pequeña es 24"
      );
      cy.get("#edad-promedio").should("have.text", "La edad promedio es 25.00");
    });

    it("Resetea la calculadora", () => {
      agregarIntegrantes("2");
      calculaEdadesIntegrantes("24", "26");
      cy.get("#boton-resetear").click();
      cy.get("#integrantes-familia").find("div").should("not.exist");
      cy.get("#mensajes-resultados").should("have.class", "oculto");
      cy.get("#boton-calcular").should("have.class", "oculto");
      cy.get("#boton-resetear").should("have.class", "oculto");
    });
  });
});

function agregarIntegrantes(cantidadIntegrantes, borrarCampo = false) {
  if (borrarCampo) {
    cy.get("#integrantes").clear().type(cantidadIntegrantes);
  } else {
    cy.get("#integrantes").type(cantidadIntegrantes);
  }
  cy.get("#agregar-integrantes").click();
}

function calculaEdadesIntegrantes(edadPrimerIntegrante, edadSegundoIntegrante) {
  cy.get("#integrantes-familia")
    .find("input")
    .then(($integrantes) => {
      cy.get($integrantes[0]).type(edadPrimerIntegrante);
      cy.get($integrantes[1]).type(edadSegundoIntegrante);
    });
  cy.get("#boton-calcular").click();
}
