import  'cypress-xpath'
export class LoginPage{

    loginPage_username = '//input[@id="Username"]'
    loginPage_password ='//input[@placeholder="Enter Password"]'
    loginPage_loginButton ='//button[@name="button" and @value="login"]'
    homePageExternalPartiesList = '//a[@href="/external-Party/contact/list"]'
    
    enterUsername(username: string){
        cy.xpath(this.loginPage_username).type(username)

    }
    enterPassword(password: string){
        cy.xpath(this.loginPage_password).type(password)

    }
    clickLogin(){
        cy.xpath(this.loginPage_loginButton).click()

    }

}