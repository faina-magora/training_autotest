module.exports = {

	finishbutton:element(by.xpath('.//button[@class="btn primary-btn tweet-action tweet-btn js-tweet-btn"]')),

	newtweetfield:element(by.xpath('.//div[@id="tweet-box-home-timeline"]')),


	go:function(){

		browser.get(browser.baseUrl);
		
	},

	texttweet:function(newtweet){

		this.newtweetfield.click();
		this.newtweetfield.sendKeys(newtweet);
	},

	finishtweet:function(){
		this.finishbutton.click();
	},

/*
	checktimetweet:function(){
		return element.all(by.xpath('.//span[@class="_timestamp js-short-timestamp js-relative-timestamp"]')).get(0).getText();
	},
*/

	checktweet:function(){
		return element.all(by.xpath('.//p[@class="TweetTextSize  js-tweet-text tweet-text"]')).get(0).getText();
	}

}
