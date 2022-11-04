import 'cypress-xpath'
import { faker } from '@faker-js/faker';
import{LoginPage} from "../pages/login_page"
describe('Gtrack', () => {
  const loginpage= new LoginPage()
  const faker = require('faker')
  EPname: faker.name.findName()

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
 .get('.gt-header-wrapper .gt-header-menu .p-menubar [role="menubar"] li:nth-child(4) .p-submenu-list li:nth-child(1) .p-menuitem-link .p-menuitem-text')
 .click({force:true})
 cy
 .get('trk-external-party-list .gt-filter-btn-wrapper p-button span:nth-child(2)')
 .click({force:true})
 cy
 .get('[formcontrolname="externalPartyType"] .p-dropdown > .p-inputtext')
 .click()
 cy
 .get('trk-upsert-external-party [formcontrolname="externalPartyType"] [role="listbox"] [aria-label="Producer"]')
 .click()
 cy
 .get('.gt-card-container div:nth-child(2) [fieldname="externalPartyName"]')
 .type(this.EPname)
 cy
 .get('.gt-card-container div:nth-child(3) [formcontrolname="email"]')
 .type('c1@mail.com')
 cy
 .get('.gt-card-container div:nth-child(4) [formcontrolname="phone"]')
 .type('03001234567')
 cy
 .get('.gt-card-container div:nth-child(5) [formcontrolname="address1"]')
 .type('address 1 abc')
 cy
 .get('.gt-card-container div:nth-child(6) [formcontrolname="address2"]')
 .type('adddress 2 xyz')
 cy
 .get('[formcontrolname="countryId"] .p-dropdown > .p-inputtext')
 .click()
 cy
 .get('[formcontrolname="countryId"] .p-dropdown .p-dropdown-items-wrapper .p-element [aria-label="Pakistan"]')
 .click()
 cy
 .get('[formcontrolname="provinceId"] .p-dropdown > .p-inputtext')
 .click()
 cy
 .get('[formcontrolname="provinceId"] .p-dropdown .p-dropdown-items-wrapper .p-element [aria-label="Azad Kashmir"]')
 .click()
 cy
 .get('[formcontrolname="cityId"] .p-dropdown > .p-inputtext')
 .click()
 cy
 .get('[formcontrolname="cityId"] .p-dropdown .p-dropdown-items-wrapper .p-element [aria-label="Bhimbar"]')
 .click()
 cy
 .get('.gt-card-container div:nth-child(10) [formcontrolname="website"]')
 .type('www.abc.com')
 cy
.get('trk-upsert-external-party .gt-btns-wrapper .gt-ctm-btn')
.click()
 })
 it('Add Plant/Branch', function(){

 })
})
