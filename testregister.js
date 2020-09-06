describe("spec to test register", function() {
	
	it("Add two number" , function() {
		browser.get("https://juliemr.github.io/protractor-demo/")
		
		element(by.model("first")).sendKeys("8");
		
		element(by.model("second")).sendKeys("8");
		
		element(by.id("gobutton")).click();
		
	    expect(element(by.className("ng-binding")).getText()).toEqual("10");
		
	});
	
});