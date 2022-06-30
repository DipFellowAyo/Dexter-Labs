// This calls the env Url links from cypress.json//
const Urls = Cypress.env("Urls");

//Cypress test code for Login Page //
context("Splash Page Test", () => {
  Urls.forEach((url) => {
    it("Testing Splash Page", () => {
      cy.visit(url + "/");
      cy.get(".MuiBox-root").find("img").should("be.visible");
      cy.get("h1").contains("DEXTER");
      cy.get("h2").contains("Partner Dashboard");
      cy.get("p").contains("apply to the use of Dexter");
      cy.wait(5000);
      cy.get("img").click();
    });
  });
});
