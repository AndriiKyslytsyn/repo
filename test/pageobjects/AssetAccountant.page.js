const assert = require('assert')
class AssetAccountant{
get clickBeforeStart() {
    return $('[src="/resources/images/aa-logo-small-white.svg"]')
}
async UseClickBeforeStart() {
    await this.clickBeforeStart.click();
}
get inputOrganisation() {
    return $('[class="form-control ng-untouched ng-pristine ng-invalid ng-star-inserted"]')
}
async setOrganisation() {
    await this.inputOrganisation.setValue('Valhalla')
}
get btnCreate() {
    return $('[class="btn btn-primary"]')
}
async clickbtnCreate() {
    await this.btnCreate.click()
}


};


  
  module.exports = new AssetAccountant(); 