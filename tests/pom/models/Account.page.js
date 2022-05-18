const BasePage = require ('./Base.page');
class AccountPage extends BasePage {
    constructor(page){
        super(page);
        //locators
        this.loggedIn = '.h4.list-group-item-heading';
        this.accountDropDowm = '.btn.btn-primary.dropdown-toggle'
        this.clearShoppingcart = '.clearShoppingCartButton'
        this.suicideCheckBox = 'text=Suicide booth services USD 0.23 >> span >> nth=1';
        this.cigarCheckBox = 'text=Cigar USD 1.80 >> span >> nth=1';
        this.oneWayTicketCheckBox = 'text=One way ticket USD 66.60 >> span >> nth=1';
        this.iceCreamCheckBox = 'text=Ice cream USD 1.00 >> span >> nth=1';
        this.totalValue = 'text=Total amount: USD78.13';
        this.gotoCheckout = 'text=Proceed to checkout';

    }
    async navigate(){
        await super.navigate('account');
    }
    async selectProducts(){
        await Promise.all([
            await this.page.locator(this.suicideCheckBox).click(),
            await this.page.locator(this.cigarCheckBox).click(),
            await this.page.locator(this.oneWayTicketCheckBox).click(),
            await this.page.locator(this.iceCreamCheckBox).click()
        ])
    }
    async proceedToCheckout(){
        await page.locator(this.gotoCheckout).click();
    }

    async getTotal(total){
        let totalValue  = await this.page.locator(this.totalValue);
            return await totalValue;
        }

    async clickLogOut(){
        await page.locator('text=Log out').click();
    }

    async clickAccount(){
        await page.locator('text=Account').click();
    }

    async clearShoppingcart(){
        await page.clearShoppingcart.click();
    }

}
module.exports ={ AccountPage};