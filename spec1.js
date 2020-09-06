describe('Regression suite----->', function() 
		{
	
	
	beforeEach(function() {
		console.log("Setting up Test");
		//Open the application URL	  
		  var url="https://angularjs.org"; 
		  //It will maximize the window
		  browser.manage().window().maximize();
		  browser.get(url);
	})
	
	  it('Test application title', function()
		{
	  console.log("Verifying the Title")
	  expect(browser.getTitle()).toContain("AngularJS");


	  })
	  
	  it('test click on new angular link', function()
			{
	 console.log("Verify clicking on angular js link")
	 element(by.xpath("//a[contains(text(),'Try')]")).click();
			})
/*
afterEach(function() {
	console.log("Close browser after each tests");
	browser.close();
	
})*/
		
})