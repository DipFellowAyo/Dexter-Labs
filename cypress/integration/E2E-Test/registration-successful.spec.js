// This calls the env Url links from cypress.json//
const Urls = Cypress.env("Urls");

//Cypress test code for Forgot Password Page //
context("Registration Successful Page Test", () => {
  Urls.forEach((url) => {
    it("Testing Registration Successful Page", () => {
      cy.visit(url + "/registration-successful");
      cy.get('[alt="logo"]').should("be.visible");
      cy.get('[alt="office"]').should("be.visible");
      cy.get("h2").contains("Congrats");
      cy.get("p").contains("You have registered a new user & an email has been sent to you and them");
      cy.get('[alt="happy"]').should("be.visible");
      cy.get("p").contains("User name:");
      cy.get("p").contains("Email:");
     
      cy.get('button[type="button"]').click();
      cy.wait(3000);

    });
  });
});


