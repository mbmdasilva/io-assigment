class BasePage{
    constructor(page){
        this.page = page
    }

    async navigate(path){
        await this.page.goto('http://localhost:8080');
    }
}
module.exports = BasePage;