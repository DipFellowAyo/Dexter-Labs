// This calls the env Url links from cypress.json//
const Urls = Cypress.env("Urls");

//Default Email input function //
function userEmail() {
  var text = "habib@dukka.com";

  return text;
}

//Default Message function //
function userMessage() {
  var message =
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.";

  return message;
}

//Cypress test code for Forgot Password Page //
context("Forgot Password Page Test", () => {
  Urls.forEach((url) => {
    it("Testing Forgot Password Page", () => {
      cy.visit(url + "/forgot-password");
      cy.get('[alt="logo"]').should("be.visible");
      cy.get('[alt="office"]').should("be.visible");
      cy.get("h2").contains("Forgot Password");

      cy.get('input[name="email"]')
        .type(userEmail())
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

      cy.get('input[name="message"]').type(userMessage());
      cy.get('button[type="submit"]').click();
      cy.wait(3000);

    });
  });
});
