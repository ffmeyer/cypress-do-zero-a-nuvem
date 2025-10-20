Cypress.Commands.add(
  "fillMandatoryFieldsAndSubmit",
  (
    data = {
      firstName: "zezinho",
      lastName: "QA",
      email: "zezinho.qa@example.com",
      text: "teste-qa.",
    }
  ) => {
    cy.get("#firstName").type(data.firstName);
    cy.get("#lastName").type(data.lastName);
    cy.get("#email").type(data.email);
    cy.get("#open-text-area").type(data.text);
    cy.contains('button', 'Enviar').click()
  }
);
