import LoginPage from "../PageObject-OrangeHRM/LoginPage";

describe('loin the Application', ()=>{

    let userdata;
    before('Collect the data form fixtures',()=>{
        cy.fixture('LoginPage').then((data)=>{
            userdata = data;
        })

    })

    it('using Page object type',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        const ln = new LoginPage();
        ln.setuserName(userdata.userName);
        ln.setPassword(userdata.password);
        ln.clickSubmit();
        ln.VerifyLogin(userdata.expected);
        
    })
})