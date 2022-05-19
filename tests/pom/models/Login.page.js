const BasePage = require ('./Base.page');

class LoginPage extends BasePage {
    constructor(page){
        super(page);
        //locators
        this.username = 'input[name="j_username"]';
        this.password = 'input[name="j_password"]';
        this.signInButton = 'button:has-text("Sign in")';
    }
    
    async navigate(){
        await super.navigate();
    }

    async login(username, password){
        await this.page.fill(this.username,username);
        await this.page.fill(this.password,password);
        await this.page.locator(this.signInButton).click();
    }
}
module.exports = {LoginPage};