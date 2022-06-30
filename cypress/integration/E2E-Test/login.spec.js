// This calls the env Url links from cypress.json//
const Urls = Cypress.env('Urls');

//Default Email input function //
function userEmail() {
	var text = "habib@dukka.com";

	return text;
}

//Default Password input function //
function userPassword() {
	var password = "test12345";

	return password;
}

//Cypress test code for Login Page //
context('Login Page Test', () => {
  Urls.forEach((url) => {
	  it('Testing Login Page', () => {
	  	cy.visit(url+'/login')
	    cy.get('input[name="username"]').type(userEmail())
		  // .type() with special character sequences
		  .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
		  .type('{del}{selectall}{backspace}')
	
		  // .type() with key modifiers
		  .type('{alt}{option}') //these are equivalent
		  .type('{ctrl}{control}') //these are equivalent
		  .type('{meta}{command}{cmd}') //these are equivalent
		  .type('{shift}')
	
		  // Delay each keypress by 0.1 sec
		  .type('slow.typing@email.com', { delay: 100 })
		  .should('have.value', 'slow.typing@email.com')
	
	  	cy.get('input[name="password"]').type(userPassword())
	  	cy.get('button[type="submit"]').click()
	  	cy.wait(5000)
      	// cy.get('div#root main > div > h2')
      	cy.wait(7000);
	})
  })
})