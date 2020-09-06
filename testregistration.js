describe("spec to test register", function() {
	
	it("Add two number" , function() {
		browser.ignoreSynchronization=true
		
		browser.get("https://tst-www2.hm.com/en_gb/index.html",20)
		
		if(expect(element(by.className("modalclose icon-close-black")).isDisplayed()))
		{
			(element(by.className("modalclose icon-close-black")).click();
		}
		
		expect(element(by.className('modalclose icon-close-black')).isPresent()).toBe(true);
		element(by.className("menu__myhm")).click();
		
		element(by.xpath("//*[@class='link' and @data-remodal-trigger='join']")).click();
		
		expect(element(by.xpath("//div[@data-remodal-content-id='join']")).isDisplayed())
		
				
	});
	
});