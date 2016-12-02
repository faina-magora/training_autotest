var SignUpPage = require('../pages/signup.page.js');
var EC = protractor.ExpectedConditions;

describe('Twitter SignUp Page', function() {
	it('should signup in twitter', function(){
		
		SignUpPage.go();
		browser.wait(EC.visibilityOf(SignUpPage.namefield), 30000);
		SignUpPage.inputdata('It is me', 'cusole@rootfest.net', 'tryeverything');

    	browser.wait(EC.visibilityOf(SignUpPage.okname()), 30000);
    	browser.wait(EC.visibilityOf(SignUpPage.okemail()), 30000);
    	browser.wait(EC.visibilityOf(SignUpPage.okpassword()), 30000);

		expect(SignUpPage.okname()).toContain('active');
		expect(SignUpPage.okemail()).toContain('active');
		expect(SignUpPage.okpassword()).toContain('active');
	});
});
