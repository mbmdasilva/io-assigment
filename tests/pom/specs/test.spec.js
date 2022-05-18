
// @ts-nocheck
const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../models/Login.page');
const {AccountPage} = require('../models/Account.page');
const { describe } = require('yargs');
const { chromium } = require('@playwright/test');

test.describe('PayPalm page', () => {
    let browser = null;
    let page = null;
    let loginPage = null;
    let accountPage = null;
    let context = null;

    test.beforeAll( async ()=>{
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        await loginPage.navigate(); 
        accountPage = new AccountPage (page);
       
    });

    test.afterAll(async ()=>{
        await context.close();
        await browser.close();
    });

    test('Should be able to login', async()=>{
        await loginPage.login('demo', 'demo');
        expect(await page.title()).not.toBeNull();
    })

    test('Shoud be able to select checkbox', async()=>{
        await accountPage.selectProducts();
    })

    test('Shoud see Total amount: USD78.13 ', async()=>{
        expect(await accountPage.getTotal(total)).toBeLessThanOrEqual('USD78.13');
    })

    test('Shoud proceed to checkout', async()=>{
        await accountPage.proceedToCheckout();
    })
});