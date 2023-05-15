class Login
{

    textUsername = "input[placeholder='Username']";
    textPassword = "input[placeholder='Password']";
    butSubmit = "button[type='submit']";
    lblMasg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setuserName(userName){
        cy.get(this.textUsername).type(userName);
    }

    setPassword(password){
        cy.get(this.textPassword).type(password);
    }

    clickSubmit(){
        cy.get(this.butSubmit).click();
    }

    VerifyLogin(expected){
        cy.get(this.lblMasg).should('have.text',expected);
    }
}

export default Login;