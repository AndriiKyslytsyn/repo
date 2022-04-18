const assert = require('assert');
const AssetAccountantPage = require('../pageobjects/AssetAccountant.page');
const AssetAccountantOrganisationPage = require('../pageobjects/AssetAccountantOrganisation.page');
const CreateAnAccountPage = require('../pageobjects/CreateAnAccount.page');
const HelperQAPage = require('../pageobjects/HelperQA.page');
const MailsacPage = require('../pageobjects/Mailsac.page.js');
const MailsacDashboardPage = require('../pageobjects/MailsacDashboard.page');
const MailsacDirtyPage = require('../pageobjects/MailsacDirty.page');
const StartPage = require('../pageobjects/StartPage.page');
//Before start test enter Email on StartPage.page.js!!!!
//Before start test enter Email on StartPage.page.js!!!!
//Before start test enter Email on StartPage.page.js!!!!
//Before start test enter Email on StartPage.page.js!!!!
//Before start test enter Email on StartPage.page.js!!!!
//Before start test enter Email on StartPage.page.js!!!!
//Before start test enter Email on StartPage.page.js!!!!

describe('Test task on https://dev.asset.accountant', async () => {
    it('Creating a new account', async () => {
        await browser.url('https://dev.asset.accountant');
        await browser.pause(5000)
        await StartPage.clickbtnCreateAnAccount();
        await browser.pause(2000)
        await CreateAnAccountPage.SetFirstname();
        await CreateAnAccountPage.SetLastname();
        await CreateAnAccountPage.SetEmail();
        await CreateAnAccountPage.SetPhone();
        await CreateAnAccountPage.SetPassword();
        await CreateAnAccountPage.ConfirmPassword();
        await CreateAnAccountPage.clickbtnSubmit();
        await browser.pause(2000)
    })

    it('The new account verification via Email', async () => {
        await browser.url('https://mailsac.com');
        await browser.pause(10000)
        await MailsacPage.clickdropbox();
        await MailsacPage.clicksignIn();
        await browser.pause(1500)
        await MailsacPage.inputname.click();
        await MailsacPage.SetName();
        await MailsacPage.inputpassword.click();
        await MailsacPage.setPassword();
        await MailsacPage.clickbtnSignIn();
        await browser.pause(1500)
        await MailsacDashboardPage.SetMail();
        await MailsacDashboardPage.ClickCheckEmail();
        await browser.pause(1000)
        await MailsacDashboardPage.ClickLetter();
        await browser.pause(2000)
        await MailsacDashboardPage.clickshowMailwithLink();
        await browser.pause(2000)
        await browser.switchWindow('Welcome to AssetAccountant™')
        await MailsacDirtyPage.clickVerifyEmail();
        await browser.pause(4000)
        await browser.switchWindow('Loading… - AssetAccountant™')
        await MailsacDirtyPage.clickOnProfile();
        await MailsacDirtyPage.clickLogout();
        await browser.pause(2000)
    })

    it('sign in', async () => {
        await browser.url('https://dev.asset.accountant');
        await browser.setWindowSize(1920, 1080)
        await browser.pause(5000)
        await StartPage.clickSignIn();
        await StartPage.SetEmail()
        await StartPage.clickNext()
        await StartPage.Setpassword()
        await StartPage.clickNext()
        await browser.pause(1000)
        await AssetAccountantPage.UseClickBeforeStart();
        await browser.pause(3000)
        await AssetAccountantPage.setOrganisation();
        await browser.pause(2000)
        await AssetAccountantPage.clickbtnCreate();
        await browser.pause(5000)
        await AssetAccountantOrganisationPage.clickBtnCreateRegister();
        await AssetAccountantOrganisationPage.clickbtnNext();
        await browser.pause(1500)
        await AssetAccountantOrganisationPage.clickbtnTryForFree();
        await AssetAccountantOrganisationPage.clickAutoNumber();
        await browser.pause(2000)
        await AssetAccountantOrganisationPage.clickbtnSave();
        await browser.pause(3000)
        await AssetAccountantOrganisationPage.clickbtnAssets()
        await browser.pause(1500)
        await AssetAccountantOrganisationPage.clickbtnCreateAssetGroupfromTemplate();
        await browser.pause(1500)
        await AssetAccountantOrganisationPage.clickbtnNewAsset();
        await browser.pause(1500)
        await AssetAccountantOrganisationPage.clickbtnSave();
        await browser.pause(1500)
        await AssetAccountantOrganisationPage.clickbtnExit();
        await browser.pause(1500)
        await browser.saveScreenshot('All_done.png')  









    })
})