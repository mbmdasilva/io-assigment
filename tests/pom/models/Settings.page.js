const BasePage = require ('./Base.page');

class SettingsPage extends BasePage {
    constructor(page){
        super(page);
        
        //locators
        this.firstname = 'input[name="firstName"]';
        this.lastname = 'input[name="lastName"]';
        this.email ='input[name="email"]';
        this.save = 'text=Save'; 
    }

    async enterFirstName(){
        await this.page.locator(this.firstname).click();  
        await this.page.locator(this.firstname).fill('Matthew');
    }

    async enterLastName(){
        await this.page.locator(this.lastName).click();
        await this.page.locator(this.lastName).fill('Doe');
    }

    async enterEmail(){
        await this.page.locator(this.email).click();
        await this.page.locator(this.email).fill('matt-doe@example.com');
    }

    async enterEmail(){
        await this.page.locator(this.save).click();
    }

    async clickSave(){
        await this.page.locator(this.save).click();
    }
}
module.exports = {SettingsPage};