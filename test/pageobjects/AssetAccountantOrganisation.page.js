const assert = require('assert')
class AssetAccountantOrganisation{
get btnCreateRegister() {
    return $('[class="btn btn-register ng-star-inserted"]')
};
async clickBtnCreateRegister() {
    await this.btnCreateRegister.click()
}
get btnNext() {
    return $('[class="btn btn-primary ml-2"]')
}
async clickbtnNext() {
    await this.btnNext.click()
}
get btnTryForFree() {
    return $('//*[contains(text(),"Try For Free")]')
}
async clickbtnTryForFree() {
    await this.btnTryForFree.click()
}
get AutoNumber() {
    return $('//*[contains(text(),"Auto") and @class]')
}
async clickAutoNumber() {
    await this.AutoNumber.click()
}
get btnSave() {
    return $('[type="submit"]')
}
async clickbtnSave() {
    await this.btnSave.click()
}
get btnAssets() {
    return $('//a[contains(text(),"Assets")]')
}
async clickbtnAssets() {
    await this.btnAssets.click()
}
get btnCreateAssetGroupfromTemplate() {
    return $('//a[contains(text()," Create Asset Group (from template) ")]')
}
async clickbtnCreateAssetGroupfromTemplate() {
    await this.btnCreateAssetGroupfromTemplate.click()
}
get btnNewAsset() {
    return $('[class="custom-control-label CheckboxGrid-item real-grid"][for="check[1]"]')
}
async clickbtnNewAsset() {
    await this.btnNewAsset.click()
}
get btnExit() {
    return $('[routerlink="../../assets"]')
}
async clickbtnExit() {
    await this.btnExit.click()
}
};


  
  module.exports = new AssetAccountantOrganisation(); 