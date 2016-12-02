module.exports = {

	finishbutton:element(by.xpath('.//button[@class="submit btn primary-btn"]')),
	usernamefield:element(by.xpath('.//input[@class="js-username-field email-input js-initial-focus"]')),
	passwordfield:element(by.xpath('.//input[@class="js-password-field"]')),

	go:function(){

		browser.get(browser.baseUrl + 'login');
		
	},

	inputdata:function(username, password){
		this.usernamefield.sendKeys(username);
		this.passwordfield.sendKeys(password);
	},

	login:function(){
		this.finishbutton.click();
	},

	checklogin:function(){
		aftertry = element(by.xpath('.//body[contains(@class,"logged")]'));
		classname = aftertry.getAttribute("class");
		return classname;
	}

}
