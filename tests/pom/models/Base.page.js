class BasePage{
    constructor(page){
        this.page = page
        this.account = 'text=Account';
    }

    async navigate(path){
        await this.page.goto(`http://localhost:8080/${path}`);
    }
    async clickAccount(){
        await page.locator(this.account).click();
    }

}
module.exports = BasePage;