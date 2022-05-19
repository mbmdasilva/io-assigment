const BasePage = require ('./Base.page');

class CheckoutPage extends BasePage {
    constructor(page){
        super(page);
        //locatos
        this.payButton = '#payButton';
        this.returnBackButton = 'text=Return back';
        this.paymentForm = '#paymentForm > h3';
        this.account = 'text=Account';
       
    }
    async navigate(){
        await super.navigate('account/checkout');
    }

    async clickPay(){
        await this.page.locator(this.payButton).click();
    }


    async clickReturn(){
        await this.page.locator(this.returnBackButton).click();
       // await page.waitForSelector('h4.ist-group-item-heading')
    }

    async paymentCardInformation(){
        await this.page.locator(this.paymentForm);
    }   

    async clickAccount(){
        await page.locator(this.account).click();
    }
    
}
module.exports = {CheckoutPage};