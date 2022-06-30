// This calls the env Url links from cypress.json//
const Urls = Cypress.env("Urls");

//Cypress test code for Forgot Password Page //
context("Password Reset Successful Page Test", () => {
  Urls.forEach((url) => {
    it("Testing Password Reset Successful Page", () => {
      cy.visit(url + "/password-reset-successful");
      cy.get('[alt="logo"]').should("be.visible");
      cy.get('[alt="office"]').should("be.visible");
      cy.get("h2").contains("Forgot Password");
      cy.get("p").contains("Well done a mail has been sent to you to help you get a new password");
      cy.get('[alt="success"]').should("be.visible");

      cy.get('button[type="button"]').click();
      cy.wait(3000);

    });
  });
});


