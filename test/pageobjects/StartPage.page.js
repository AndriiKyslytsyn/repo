const assert = require('assert')
class StartPage{
get btnCreateAnAccount() {
  return $('a[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]')

};

async clickbtnCreateAnAccount() {
  await this.btnCreateAnAccount.click()
};
get btnSignIn() {
  return $('[class="btn btn-lg btn-light bold Login-heading"]')
}
async clickSignIn() {
  await this.btnSignIn.click()
}
get inputEmail(){
  return $('[class="form-control form-control-lg"]')
}
async loginpart(){
  return this.loginpart="Test_2222a2234w344e34rw3342" //Here enter first part of Email. For example:JohnDou@mailsac.com(JohnDou is a first part)
}
async SetEmail() {

  await this.inputEmail.setValue(await this.loginpart+'@mailsac.com')
}
get btnNext() {
  return $('[class="btn btn-lg btn-primary Login-submit"]')
}
async clickNext() {
  await this.btnNext.click()
}
get inputpassword() {
  return $('[class="form-control form-control-lg"]')
}
async Setpassword() {
  await this.inputpassword.setValue('JohnSnow13')
}

};


  
  module.exports = new StartPage(); 