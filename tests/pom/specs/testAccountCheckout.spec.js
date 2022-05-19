
// @ts-nocheck
const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../models/Login.page');
const {AccountPage} = require('../models/Account.page');
const { describe } = require('yargs');
const { chromium } = require('@playwright/test');
const {CheckoutPage}= require('../models/Checkout.page');

test.describe('PayPalm page', () => {
    let browser = null;
    let page = null;
    let loginPage = null;
    let accountPage = null;
    let checkoutPage = null;
    let context = null;

    test.beforeAll( async ()=>{
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        await loginPage.navigate(); 
        checkoutPage = new CheckoutPage(page);
        await checkoutPage.navigate(); 
        accountPage = new AccountPage (page);
        await accountPage.navigate(); 
       
    });

    test.afterAll(async ()=>{
        await context.close();
        await browser.close();
    });

    test('Should be able to login', async()=>{
        await loginPage.login('demo', 'demo');
        expect(await page.title()).not.toBeNull();
    })

    test('Should be able to select checkbox', async()=>{
        await accountPage.selectProducts();
    })

    test('Should see Total amount: USD78.13 ', async()=>{
        expect(await accountPage.getTotal()).toContainText('USD78.13');
    })

    test('Should proceed to checkout', async()=>{
        await accountPage.proceedToCheckout();
       expect( await page.locator('text=Checkout')).toBeVisible;
    })

    test('Should see the payment card information', async()=>{
        expect(await checkoutPage.paymentCardInformation());
    })

    test('Should return to account page', async()=>{
        await checkoutPage.clickReturn();
        await expect(page).toHaveURL('http://localhost:8080/account');
        expect(await page.locator('h3:has-text("Products")')).toBeVisible;
    })

});