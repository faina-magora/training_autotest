module.exports = {

	startbutton:element(by.xpath('.//a[@class = "Button StreamsSignUp js-nav js-signup"]')),
	finishbutton:element(by.xpath('.//input[@class = "submit button signup"]')),
	namefield:element(by.xpath('.//input[@id = "full-name"]')),
	emailfield:element(by.xpath('.//input[@id = "email"]')),
	passwordfield:element(by.xpath('.//input[@id = "password"]')),

	go:function(){

		browser.get(browser.baseUrl + '/signup');
		
	},

	inputdata:function(name, email, password){
		this.namefield.sendKeys(name);
		this.emailfield.sendKeys(email);
		this.passwordfield.sendKeys(password);
	},

	okname:function(){
		return element.all(by.xpath('.//p[contains(@class,"ok isaok")]')).get(0).getAttribute("class");
	},

	okemail:function(){
		return element.all(by.xpath('.//p[contains(@class,"ok isaok")]')).get(1).getAttribute("class");
	},

	okpassword:function(){
		return element.all(by.xpath('.//p[contains(@class,"ok isaok")]')).get(2).getAttribute("class");
	}

}