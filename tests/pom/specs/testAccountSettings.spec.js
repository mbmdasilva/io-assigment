// @ts-nocheck
const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../models/Login.page');
const {AccountPage} = require('../models/Account.page');
const { describe } = require('yargs');
const { chromium } = require('@playwright/test');
const {SettingsPage} = require('../models/Settings.page');

test.describe('PayPalm page', () => {
    let browser = null;
    let page = null;
    let loginPage = null;
    let accountPage = null;
    let settingsPage =null;
    let context = null;

    test.beforeAll( async ()=>{
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        await loginPage.navigate();  
        accountPage = new AccountPage (page);
        await accountPage.navigate(); 
        settingsPage = new SettingsPage(page);
        await settingsPage.navigate();
       
    });

    test.afterAll(async ()=>{
        await context.close();
        await browser.close();
    });

    test('Should be able to login', async()=>{
        await loginPage.login('demo', 'demo');
        expect(await page.title()).not.toBeNull();
    })

    test('Should be able to click in accounts menu', async()=>{
        await accountPage.clickAccount();
    })

    test('Should click on settings ', async()=>{
        await accountPage.clickSettings(); 
    })

    test('Should enter first name ', async()=>{
        await settingsPage.enterFirstName()
    })

    test('Should enter last name ', async()=>{
        await settingsPage.enterLastName()
    })

    test('Should enter email ', async()=>{
        await settingsPage.enterEmail() 
    })

    test('Should enter save ', async()=>{
        await settingsPage.clickSave()
    })

    test('Should enter logout ', async()=>{
        await accountPage.clickLogOut()
    })

});