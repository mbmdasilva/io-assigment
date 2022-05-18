const BasePage = require ('./Base.page');
class CheckoutPage extends BasePage {
    constructor(page){
        super(page);
       
    }
    async navigate(){
        await super.navigate('account/checkout')
    }

    
}
module.exports = CheckoutPage;