module.exports = function(config){
  config.set({
    //  root path location that will be used to resolve all relative paths in files and exclude sections
    basePath : '../',

    // files to include, ordered by dependencies
    files : [
      // include relevant Angular files and libs
      'app/components/angular/angular.js',
      'app/components/angular-mocks/angular-mocks.js',
      
      // include JS files
      'app/js/**/*.js',
      'app/js/app.js',
    
      // include html template files
      // 'app/partials/directives/*.html',
      // 'app/partials/*.html',

      // include unit test specs
      'test/unit/*.js'
    ], 
    // files to exclude
    exclude : [
      'app/components/angular/angular-loader.js'
      , 'app/components/angular/*.min.js'
      , 'app/components/angular/angular-scenario.js'
    ],

    // karma has its own autoWatch feature but Grunt watch can also do this
    autoWatch : false,

    // testing framework, be sure to install the correct karma plugin
    frameworks: ['jasmine'],

    // browsers to test against, be sure to install the correct browser launcher plugins
    browsers : ['PhantomJS'],

    // map of preprocessors that is used mostly for plugins
    preprocessors: {
      // test coverage
      'app/js/*.js': ['coverage'],
      'app/js/*.js': ['coverage'],
    },

    reporters: ['progress', 'coverage'],

    // list of karma plugins
    plugins : [
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],

    coverageReporter: {
        type : 'html',
        dir : 'coverage/'
    },
    
    junitReporter: {
      outputFile: 'test-results/junit-results.xml'
    }
})}