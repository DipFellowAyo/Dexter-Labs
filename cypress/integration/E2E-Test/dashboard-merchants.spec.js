// This calls the env Url links from cypress.json//
const Urls = Cypress.env("Urls");

//Default Email input function //
function merchantEmail() {
  var text = "habib@dukka.com";

  return text;
}

//Cypress test code for Merchant Dashboard Page //
context("Merchant Dashboard Page Test", () => {
  Urls.forEach((url) => {
    it("Testing All Merchants Table", () => {
      cy.visit(url + "/dashboard/merchants");
      cy.get('[alt="logo"]').should("be.visible");
      cy.get("p").contains("Create merchant");
      cy.get("p").contains("Batch create");
      cy.get("p").contains("Delete merchant");
      cy.get("p").contains("Message merchant");
      cy.get("div").contains("All Merchants");
      cy.get("div").contains("Inactive Merchants");
      cy.get("table")
        .contains("th", "SN")
        .should("be.visible");
      cy.get("table")
        .contains("th", "Phone Number")
        .should("be.visible");
      cy.get("table")
        .contains("th", "Email")
        .should("be.visible");
      cy.get("table")
        .contains("th", "Merchant ID")
        .should("be.visible");
      cy.get("table")
        .contains("th", "City code")
        .should("be.visible");
      cy.get("table")
        .contains("th", "City")
        .should("be.visible");
      cy.get("table").contains("th", "Sector");
      cy.get("table").contains("th", "Sales Summary");
      cy.get("table").contains("th", "Expense Summary");
      cy.get(".MuiSelect-root").click();
      cy.get("li:nth-child(3)").click({
        shiftKey: true,
      });
      cy.wait(2000);
    });

    it("Testing Create Merchant", () => {
      cy.get("p")
        .contains("Create merchant")
        .click();
      cy.get("p").contains("Create merchant account");
      cy.get('button[type="submit"]').click();
      cy.get('input[name="merchant_name"]').type("Demo Business Name");
      cy.get('input[name="merchant_phone_number"]').type("08142526272");
      cy.get('select[name="sector"]').select("Education");
      cy.get('select[name="country"]').select("Nigeria");
      cy.get('select[name="state"]').select("Lagos");
      cy.get('select[name="city"]').select("Ikeja");
      cy.get('input[name="merchant_id"]').type("12d0JKLMNY");
      cy.get('input[name="merchant_email"]')
        .type(merchantEmail())
        // .type() with special character sequences
        .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
        .type("{del}{selectall}{backspace}")

        // .type() with key modifiers
        .type("{alt}{option}") //these are equivalent
        .type("{ctrl}{control}") //these are equivalent
        .type("{meta}{command}{cmd}") //these are equivalent
        .type("{shift}")

        // Delay each keypress by 0.1 sec
        .type("slow.typing@email.com", { delay: 100 })
        .should("have.value", "slow.typing@email.com");
      cy.get('input[name="merchant_url"]').type(
        merchantEmail() + "/12d0JKLMNY"
      );
      cy.get('select[name="city_code"]').select("234");
      cy.get('select[name="currency"]').select("NGN");
      cy.get('button[type="submit"]').click();
      cy.wait(2000);
    });

    it("Testing Batch Create", () => {
      const filepath = "csv/tests_results.csv";
      cy.get("p")
        .contains("Batch create")
        .click();
      cy.get("p").contains("Upload multiple Merchant at once");
      cy.get('input[type="file"]').attachFile(filepath);
      cy.get('button[type="submit"]').click();
      // cy.get('input[type="file"]').contains('tests_results.csv')
      cy.wait(2000);
    });

    it("Testing Delete Merchant", () => {
      cy.get("p")
        .contains("Delete merchant")
        .click();
      cy.get("div").contains("All Merchants");
      cy.get("div").contains("Inactive Merchants");
      cy.get("table")
        .contains("th", "SN")
        .should("be.visible");
      cy.get("table")
        .contains("th", "Phone Number")
        .should("be.visible");
      cy.get("table")
        .contains("th", "Email")
        .should("be.visible");
      cy.get("table")
        .contains("th", "Merchant ID")
        .should("be.visible");
      cy.get("table")
        .contains("th", "City code")
        .should("be.visible");
      cy.get("table")
        .contains("th", "City")
        .should("be.visible");
      cy.get("table").contains("th", "Sector");
      cy.get("table").contains("th", "Sales Summary");
      cy.get("table").contains("th", "Expense Summary");
      cy.get('[type="checkbox"]').check();
      cy.get(".MuiSelect-root").click();
      cy.get("li:nth-child(3)").click({
        shiftKey: true,
      });
      cy.wait(2000);
    });

    it("Test Message merchant", () => {
      const filepath = "csv/tests_results.csv";
      cy.get("p")
        .contains("Message merchant")
        .click();
      cy.get("p").contains("Mail Merchant(s)");
      cy.get('input[name="From"]').type(merchantEmail());
      cy.get('input[name="To"]').type("to-email@dukka.com");
      cy.get("p")
        .contains("CC")
        .click();
      cy.get('input[name="CC"]').type("cc-email@dukka.com");
      cy.get('input[name="Subject"]').type("Test Subject Headline");
      cy.get('textarea[name="Message"]').type(
        "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it seen all around the web; on templates, websites, and stock"
      );
      cy.get('input[type="file"]').attachFile(filepath);
      cy.get('button[type="submit"]').click();
      cy.wait(2000);
    });
  });
});
