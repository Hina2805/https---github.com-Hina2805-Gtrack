import 'cypress-xpath'
import{LoginPage} from "../pages/login_page"
describe('Gtrack', () => {
  const loginpage= new LoginPage()
  beforeEach(()=>{
    cy.viewport(1920, 1080)
    cy.visit('https://dev.condescending-dirac.208-109-39-195.plesk.page/', {timeout: 80000})
    cy.fixture('logindetails.json').then(user=>{
        loginpage.enterUsername(user.username)
        loginpage.enterPassword(user.password) 
        loginpage.clickLogin()  
    })
})
})
