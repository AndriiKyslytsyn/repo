const assert = require('assert');
const StartPagePage = require('./StartPage.page');
class CreateAnAccountPage{
get inputFirstname() {
  return $('[name="firstname"]');

};
get inputLastname() {
    return $('[name="lastname"]');
};
get inputEmail() {
    return $('[name="email"]');
};
get inputPhonenumber() {
    return $('[name="phonenumber"]');
};
get inputPassword() {
    return $('[name="password"]');
};
get inputConfirmPassword() {
    return $('[name="confirmpassword"]');
};
get btnSubmit() {
    return $('[type="submit"]')
}

async SetFirstname() {
  await this.inputFirstname.setValue('John');
};
async SetLastname() {
    await this.inputLastname.setValue('Snow');
};

async SetEmail() {
    await this.inputEmail.setValue(await StartPagePage.loginpart()+'@mailsac.com');
};
async SetPhone() {
    await this.inputPhonenumber.setValue('+380598647878');
};
async SetPassword() {
    await this.inputPassword.setValue('JohnSnow13');
};
async ConfirmPassword() {
    await this.inputConfirmPassword.setValue('JohnSnow13');
};
async clickbtnSubmit() {
    await this.btnSubmit.click();
};


};


  
  module.exports = new CreateAnAccountPage(); 