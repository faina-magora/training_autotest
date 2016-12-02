var SearchPage = require('../pages/search.page.js');
var EC = protractor.ExpectedConditions;

describe('Twitter Search', function() {
	it('should search in twitter', function(){
		
		SearchPage.go();

		browser.wait(EC.visibilityOf(SearchPage.searchfield), 30000);
		SearchPage.inputdata('github');

		browser.wait(EC.visibilityOf(SearchPage.searchbutton), 30000);
		SearchPage.gosearch();

		//не работает

    	browser.wait(EC.visibilityOf(SearchPage.resultsearch), 30000);
		expect(SearchPage.checkresult()).toContain('github');


	});
});
