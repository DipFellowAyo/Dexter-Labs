// This calls the env Url links from cypress.json//
const Urls = Cypress.env("Urls");

//Random Email input function //
function userEmail() {
  var text = "test@dukka.com";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 5; i++)
    text = possible.charAt(Math.floor(Math.random() * possible.length)) + text;

  return text;
}

//Random Password input function //
function userPassword() {
  var password = "";
  var possiblePassword = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    password += possiblePassword.charAt(
      Math.floor(Math.random() * possiblePassword.length)
    );

  return password;
}

//Random userName input function //
function userName() {
  var firstName = "";
  var possibleName = "abcdefghijklmnopqrstuvwxyz";
  var textString = "test";

  for (var i = 0; i < 5; i++)
    firstName += possibleName.charAt(
      Math.floor(Math.random() * possibleName.length)
    );

  return firstName + " " + textString;
}

var p = "12345";

//Cypress test code for Login Page //
context("Password Personalization Page Test", () => {
  Urls.forEach((url) => {
    it("Testing Password Personalization Page", () => {
      cy.visit(url + "/password-personalization");
      cy.get('[alt="logo"]').should("be.visible");
      cy.get('[alt="office"]').should("be.visible");
      cy.get("h2").contains("Welcome To Dexter");
      cy.get('[alt="happy"]').should("be.visible");
      cy.get("p").contains("Email:");
      cy.get("p").contains("Personalise your username and password");
      cy.get('input[name="username"]').type(userName());
      cy.get('input[name="password"]').type(userPassword());
      cy.get('input[name="password"]')
        .invoke("val")
        .then((sometext) =>
          cy.get('input[name="password_confirmation"]').type(sometext)
        );
     
      cy.get('button[type="submit"]').click();
      cy.wait(3000);
  
    });
  });
});
