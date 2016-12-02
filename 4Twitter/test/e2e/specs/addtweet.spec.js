var AddTweet = require('../pages/addtweet.page.js');
var EC = protractor.ExpectedConditions;

describe('Add New Tweet', function() {
	it('should add new tweet', function(){

		var text = 'Try add tweet. It is easy.';
		browser.wait(EC.visibilityOf(AddTweet.newtweetfield), 30000);

		AddTweet.texttweet(text);
		
		browser.wait(EC.visibilityOf(AddTweet.finishbutton), 30000);
		AddTweet.finishtweet();

		//browser.wait(EC.visibilityOf(AddTweet.checktimetweet()), 30000);
		//expect(AddTweet.checktimetweet()).toContain('Только что');

		// не дожидается отправки твита, поэтому дает ошибку
		// как пофиксить???
    	browser.wait(EC.visibilityOf(AddTweet.checktweet()), 30000);
		expect(AddTweet.checktweet()).toContain(text);
	});
});
