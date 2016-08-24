var angular = require('angular'),
    mainModule = require('./main/main.module.js'),
 trainerPageDescriptionModule = require('./trainerPage/trainerPage.module.js');
require('@angular/router/angular1/angular_1_router');
require('angular-resource');

angular.module('app',
    [
      mainModule.name,
        trainerPageDescriptionModule.name,
      'ngComponentRouter',
      'ngResource'
    ])
  .config(function($locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
  })
  .value('$routerRootComponent', 'appMain');


