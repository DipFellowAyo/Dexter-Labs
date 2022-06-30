// This calls the env Url links from cypress.json//
const Urls = Cypress.env("Urls");

//Default Password input function //
function userPassword() {
  var password = "test12345";

  return password;
}

function shortPassword() {
  var password = "te45";

  return password;
}

//Cypress test code for  Admin Auth Page //
context("Admin Auth Page Test", () => {
  Urls.forEach((url) => {
    it("Testing Admin Auth Page", () => {
      cy.visit(url + "/admin-auth");
      cy.get('[alt="logo"]').should("be.visible");
      cy.get('[alt="office"]').should("be.visible");
      cy.get("h2").contains("Admin Authentication");

      cy.get('input[name="password"]').type(userPassword());
      cy.get('button[type="submit"]').click();
      cy.wait(3000);
    });

    it("Testing Admin Auth Page with short password", () => {
      cy.visit(url + "/admin-auth");
      cy.get('[alt="logo"]').should("be.visible");
      cy.get('[alt="office"]').should("be.visible");
      cy.get("h2").contains("Admin Authentication");

      cy.get('input[name="password"]').type(shortPassword());
      cy.get('button[type="submit"]').click();
      cy.wait(3000);
    });
  });
});
