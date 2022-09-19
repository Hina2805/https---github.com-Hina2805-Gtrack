import 'cypress-xpath'
describe('Login', () => {
  it('login Gtrack', () => {
    cy
    .viewport(1920, 1080)
    cy
    .visit('https://app-dev.gtrackdev.top/')
    cy
    .xpath('//input[@placeholder="Username"]')
    .type("Alice")
    cy.
    xpath('//input[@placeholder="Enter Password"]')
    .type("P@ssword123")
    cy
    .xpath('//button[@name="button" and @value="login"]')
    .click()

  })
})