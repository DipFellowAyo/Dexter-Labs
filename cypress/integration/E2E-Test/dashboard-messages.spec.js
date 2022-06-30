// This calls the env Url links from cypress.json//
const Urls = Cypress.env('Urls');

//Default Email input function //
function fromEmail() {
    var text = "habib@dukka.com";
  
    return text;
  }

  function toEmail() {
    var text = "johnDoe@dukka.com";
  
    return text;
  }

  function ccEmail() {
    var text = "cc@dukka.com";
  
    return text;
  }

  function bcEmail() {
    var text = "bc@dukka.com";
  
    return text;
  }


//Cypress test code for Messages Page //
context('Messages Page Test', () => {
  Urls.forEach((url) => {
	  it('Testing Inbox Page', () => {
	  	cy.visit(url+'/dashboard/messages')
          cy.viewport(320, 480)
          cy.viewport('iphone-5')
          cy.get('div').contains('Inbox')
          cy.get('div').contains('Compose mail')
          cy.get('div').contains('Mails')
          cy.get('img[alt="notification"]').should("be.visible")
          cy.get('img[alt="message"]').should("be.visible")
          cy.get('div').contains('Compose mail')
          cy.get('img[alt="write"]').should("be.visible")
          cy.get('h2').contains('Sherryl Monroe')
          cy.get('img[alt="avatar"]').should("be.visible")
          cy.get('input.makeStyles-searchField-107').type("Search dummy text")
      	cy.wait(2000);
	});
    it('Testing Compose Mail Page', () => {
        cy.viewport(320, 480)
        cy.viewport('iphone-5')
        const csvpath = "csv/tests_results.csv";
        const imagepath = "images/inbox.png";
        const zipPath = "zip/zip-file.zip";
        cy.get('div').contains('Inbox')
        cy.get('div').contains('Compose mail').click()
        cy.get('input[placeholder=From]').type(fromEmail())
        cy.get('input[placeholder=To]').type(toEmail())
        cy.get('p').contains('CC').click()
        cy.get('input[placeholder=Cc]').type(ccEmail())
        cy.get('p').contains('BC').click()
        cy.get('input[placeholder=Bc]').type(bcEmail())
        cy.get('input[placeholder=Subject]').type('Subject Headline')
        cy.get('textarea[name="Message"]').type(
            "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it seen all around the web; on templates, websites, and stock"
          );
        cy.get('input[type="file"]').attachFile(csvpath);
        cy.get('input[type="file"]').attachFile(imagepath);
        cy.get('input[type="file"]').attachFile(zipPath);
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
  })
  })
})