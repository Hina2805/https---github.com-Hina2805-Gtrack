import 'cypress-xpath'
import { faker } from '@faker-js/faker';
import { parseIsolatedEntityName } from 'typescript'
import{LoginPage} from "../pages/login_page"
describe('Gtrack', () => {
  const loginpage= new LoginPage()
  beforeEach(()=>{
    cy.viewport(1920, 1080)
    cy.visit('https://app-dev.gtrackdev.top/')
    cy.fixture('logindetails.json').then(user=>{
        loginpage.enterUsername(user.username)
        loginpage.enterPassword(user.password) 
        loginpage.clickLogin()  
    })
})
 it('External Party', function(){
 cy
 .xpath('//a[@href="/external-party/list"]')
 .click({force:true})
 cy
 .xpath('//p-button[@label="Add External Party"]')
 .click({force:true})
 cy
 .get('[formcontrolname="externalPartyType"] .p-dropdown > .p-inputtext')
 .click()
 cy
 .xpath('//li[@role="option" and  @aria-label="Producer"]')
 .click()
 cy
 .xpath('//input[@formcontrolname="name" and  @fieldname="externalPartyName"]')
 .type()
 })
})
