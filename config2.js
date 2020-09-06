var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
 seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['testregister.js'],


onPrepare: function() {
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports'
    }).getJasmine2Reporter());
}
};