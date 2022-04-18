const HelperQAPage = require("../pageobjects/HelperQA.page");



describe('api request from wdio ', () => {
    it('check Email', () => {
         browser.pause(5000)
        const message =  HelperQAPage.checkMesages("api+request+from+wdio@mailsac.com")
    });
});


