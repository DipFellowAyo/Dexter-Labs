// This calls the env Url links from cypress.json//
const Urls = Cypress.env("Urls");

//Cypress test code for Transaction Dashboard Page //
context("Transaction Dashboard Page Test", () => {
  Urls.forEach((url) => {
    it("Testing All Transactions Table", () => {
      cy.visit(url + "/dashboard/transactions");
      cy.get('[alt="logo"]').should("be.visible");
      cy.get("div").contains("All Transactions");
      cy.get("div").contains("Orders");
      cy.get("div").contains("Sales");
      cy.get("table").contains("th", "SN");
      cy.get("table").contains("th", "Transactions Type");
      cy.get("table").contains("th", "Transaction Origin");
      cy.get("table").contains("th", "Amount");
      cy.get("table").contains("th", "Transaction Date");
      cy.get("table").contains("th", "Transaction Time");
      cy.get("table").contains("th", "Merchant");
      cy.get("table").contains("th", "Transaction Status");
      cy.get("table").contains("th", "Payment Channel");
      cy.get("table").contains("th", "City Code");
      cy.get(".MuiSelect-root").click();
      cy.get("li:nth-child(3)").click({
        shiftKey: true,
      });
      cy.wait(2000);
    });
  });
});
