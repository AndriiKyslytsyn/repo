const assert = require('assert')
const StartPagePage = require('./StartPage.page')
class MailsacDashboardPage{
get inputMail() {
    return $('[ng-model="myinbox"]')
};
get btnCheckEmail() {
    return $('[class="btn btn-primary btn-block"]')
}
get letter() {
    return $('[class="col-xs-5 ng-binding"]')
};
get showMailwithLink() {
    return $('//a[contains(text(),"Unblock links and images ↗")]')
}
get verifyEmail() {
    return $('//a[@href and contains(text(), "Verify Email")]')
}
async SetMail() {
    await this.inputMail.setValue(await StartPagePage.loginpart)
};
async ClickCheckEmail() {
    await this.btnCheckEmail.click()
};
async ClickLetter() {
    await this.letter.click();
}
async clickshowMailwithLink() {
    await this.showMailwithLink.click()
};
async clickVerifyEmail() {
    await this.verifyEmail.click()
}


};


  
  module.exports = new MailsacDashboardPage(); 