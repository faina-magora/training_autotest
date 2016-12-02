exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // specs: ['specs/*.js'],
  rootElement:'body',
  seleniumPort: '4444',

  suites: {
    specs:['specs/signin.spec.js',
    'specs/deletetweet.spec.js']
  },

  jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        defaultTimeoutInterval: 120000
    },


  onPrepare: function () {
    
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.getProcessedConfig().then(function(config) {
        browser.baseUrl = 'https://www.twitter.com/';
       
    });
   }
};