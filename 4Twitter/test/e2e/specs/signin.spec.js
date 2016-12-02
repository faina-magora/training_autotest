var SignInPage = require('../pages/signin.page.js');
var EC = protractor.ExpectedConditions;

describe('Twitter SignIn Page', function() {
	it('should signin in twitter', function(){
		
		SignInPage.go();
		browser.wait(EC.visibilityOf(SignInPage.usernamefield), 30000);
		SignInPage.inputdata('ffloxee', '8908september');
		SignInPage.login();

    	browser.wait(EC.visibilityOf(SignInPage.checklogin()), 30000);

		expect(SignInPage.checklogin()).toContain('logged-in');


	});
});
