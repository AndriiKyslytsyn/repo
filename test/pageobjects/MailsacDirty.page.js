const assert = require('assert')
class MailsacDirty{


get verifyEmail() {
    return $('//a[@href and @target and @style]')
}

async clickVerifyEmail() {
    await this.verifyEmail.click()
}
get btnprofile() {
    return $('//span[@class="ml-2" and contains(text(),"")]')
}
async clickOnProfile() {
    await this.btnprofile.click();
}
get btnLogOut(){
    return $('[name="log-out"]')
}
async clickLogout() {
    await this.btnLogOut.click()
}


};


  
  module.exports = new MailsacDirty(); 