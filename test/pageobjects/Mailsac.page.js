const assert = require('assert')
class MailsacPage{
get dropbox() {
    return $('[class="dropdown-toggle"]')
 
}
async clickdropbox() {
    await this.dropbox.click()
}
    get signIn() {
  return $('[href="/login"]')

};
get inputname() {
    return $('[ng-model="loginDetails._id"]')

}
get inputpassword() {
    return $('[ng-model="loginDetails.password"]')
}
get btnSignIn() {
    return $('[class="btn btn-primary"]')
}
async clicksignIn() {
    await this.signIn.click()
}
async SetName() {
    await this.inputname.setValue('andriitsin')
}
async setPassword() {
    await this.inputpassword.setValue('KINGK0NGq13')
}
async clickbtnSignIn() {
    await this.btnSignIn.click()
}


};


  
  module.exports = new MailsacPage(); 