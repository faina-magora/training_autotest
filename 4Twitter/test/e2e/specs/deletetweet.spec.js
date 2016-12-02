var DeleteTweetPage = require('../pages/deletetweet.page.js');
var EC = protractor.ExpectedConditions;

describe('Twitter Delete Tweet Page', function() {
	it('should delete last tweet', function(){
		
		DeleteTweetPage.go('ffloxee');

		var lasttweet = DeleteTweetPage.getlasttweet();

		browser.wait(EC.visibilityOf(DeleteTweetPage.morebutton), 30000);
		DeleteTweetPage.deletetweetclickmore();

		browser.wait(EC.visibilityOf(DeleteTweetPage.deletebutton), 30000);
		DeleteTweetPage.deletetweetclickdelete();

		browser.wait(EC.visibilityOf(DeleteTweetPage.agreebutton), 30000);
		DeleteTweetPage.deletetweetclickagree();

		//не дожидается удаления, поэтому ошибка

		browser.wait(EC.visibilityOf(DeleteTweetPage.getlasttweet()), 30000);
		expect(DeleteTweetPage.getlasttweet()).not.toContain(lasttweet);

	});
});
