const BasePage = require ('./Base.page');
class AccountPage extends BasePage {
    constructor(page){
        super(page);
        //locators
        this.loggedIn = '.h4.list-group-item-heading';
        this.accountDropDowm = 'text=Account';
        this.clearCart = '.cartclearShoppingCartButton';
        this.beerCheckBox = 'text=Beer USD 8.50 >> span >> nth=1';
        this.suicideCheckBox = 'text=Suicide booth services USD 0.23 >> span >> nth=1';
        this.cigarCheckBox = 'text=Cigar USD 1.80 >> span >> nth=1';
        this.oneWayTicketCheckBox = 'text=One way ticket USD 66.60 >> span >> nth=1';
        this.iceCreamCheckBox = 'text=Ice cream USD 1.00 >> span >> nth=1';
        this.totalValue = 'text=Total amount: USD78.13';
        this.gotoCheckout = 'button.btn.btn-primary.btn-lg.btn-block.btn-raised';
        this.logOut = 'text=Log out';
        this.settings = 'a:has-text("Settings")';
    
        

    }
   
    async selectProducts(){
        await Promise.all([
            await this.page.locator(this.beerCheckBox).click(),
            await this.page.locator(this.cigarCheckBox).click(),
            await this.page.locator(this.suicideCheckBox).click(),
            await this.page.locator(this.oneWayTicketCheckBox).click(),
            await this.page.locator(this.iceCreamCheckBox).click()

        ])
    }
    async proceedToCheckout(){
        await this.page.locator(this.gotoCheckout).click();
    }

    async getTotal(){
        let totalValue  = await this.page.locator(this.totalValue);
            return await totalValue;
        }

    async clickLogOut(){
        await page.locator(this.logOut).click();
    }

    async clickSettings(){
        await page.locator(this.settings).click();
    }

    async clearShopping(){
        await page.locator(this.clearCart).click();  
    }

    async clickAccount(){
        await page.locator(this.accountDropDowm).click();  
    }
    
    async navigate(){
        await super.navigate('account');
    }
}
module.exports ={ AccountPage};