module.exports = {

	searchfield:element(by.xpath('.//input[@class="search-input"]')),
	searchbutton:element(by.xpath('.//span[@class="search-icon js-search-action"]')),
	resultsearch:element(by.xpath('.//span[@class="u-linkComplex-target"]')),

	go:function(){

		browser.get(browser.baseUrl);
		
	},

	inputdata:function(word){
		this.searchfield.sendKeys(word);
	},

	gosearch:function(){
		this.searchbutton.click();
	},

	checkresult:function(){
		return this.resultsearch.getText();
	}

}
