// Karma configuration
// Generated on Thu Jun 23 2016 13:47:40 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
        'client/bower_components/angular/angular.min.js',
        'client/bower_components/angular-cookies/angular-cookies.min.js',
        'client/bower_components/angular-resource/angular-resource.min.js',
        'client/bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'client/bower_components/lodash/dist/lodash.min.js',
        'client/bower_components/ng-dialog/js/ngDialog.min.js',
        'client/bower_components/angular-input-dropdown/inputDropdown.js',
        'client/bower_components/angulartics/dist/angulartics.min.js',
        'client/bower_components/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
        'client/bower_components/moment/min/moment-with-locales.min.js',
        'client/bower_components/angular-moment-picker/dist/angular-moment-picker.min.js',
        'client/bower_components/angular-i18n/angular-locale_pt-br.js',
        'client/bower_components/ng-currency/dist/ng-currency.min.js',
        'client/bower_components/angular-mocks/angular-mocks.js',
        'client/app/**/*.module.js',
        'client/components/**/*.module.js',
        'client/app/**/*.js',
        'client/components/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};