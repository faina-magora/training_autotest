module.exports = {

	morebutton:element.all(by.xpath('.//button[@class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle"]')).get(0),
	deletebutton:element.all(by.xpath('.//li[@class="js-actionDelete"]')).get(0),
	agreebutton:element(by.xpath('.//button[@class="btn primary-btn delete-action"]')),

	go:function(username){

		browser.get(browser.baseUrl + username);
		
	},

	getlasttweet:function(){
		return element.all(by.xpath('.//p[@class="TweetTextSize TweetTextSize--16px js-tweet-text tweet-text"]')).get(0).getText();
	},

	deletetweetclickmore:function(){
		this.morebutton.click();
	},

	deletetweetclickdelete:function(){
		this.deletebutton.click();
	},

	deletetweetclickagree:function(){
		this.agreebutton.click();
	}

}
