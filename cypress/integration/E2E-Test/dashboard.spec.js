// This calls the env Url links from cypress.json//
const Urls = Cypress.env("Urls");

//Cypress test code for Dashboard Page //
context("Dashboard Page Test", () => {
  Urls.forEach((url) => {
    it("Testing Merchants & Sales Card", () => {
      cy.visit(url + "/dashboard");
      cy.get('[alt="group"]').should("be.visible");
      cy.get("p").contains("MERCHANTS & SALES");
      cy.get("p").contains("Active");
      cy.get("p").contains("Inactive");
      cy.get("p").contains("Made in sales");
      cy.get("p").contains("Merchants onboarded in the past");
      cy.wait(2000);
    });

    it("Testing Merchant Expenses Card", () => {
      cy.get("p").contains("MERCHANT EXPENSESES");
      cy.get('[alt="hand"]').should("be.visible");
      cy.get("p").contains("MERCHANT EXPENSESES");
      cy.wait(2000);
    });

    it("Weekly Transaction Analysis", () => {
      cy.get("p").contains("Weekly Transaction Analysis");
      cy.get("p").contains("Week");
      cy.get("p").contains("made so far");
      cy.get("select").contains("Week");
      cy.get("canvas");

      // Take a snapshot
      // cy.get("body").toMatchImageSnapshot();
      cy.wait(2000);
    });

    it("Expense vs sales chat", () => {
      cy.get("p").contains("Expense vs sales chat");
      cy.get("select").contains("Week");
      cy.get("canvas");

      // Take a snapshot
      cy.get("body").toMatchImageSnapshot();
      cy.wait(2000);
    });

    it("Monthly Merchant Onboarding Analysis", () => {
      cy.get("p").contains("Monthly Merchant");
      cy.get("p").contains("made so far");
      cy.get("select").contains("Week");
      cy.get("p").contains('January') 
      cy.get("p").contains("February")
      cy.get("p").contains("March") 
      cy.get("p").contains("November")

    //   cy.contains("December").should('be.visible') 
      cy.wait(2000);
    });
  });
});
