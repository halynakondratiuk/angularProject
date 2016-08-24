var angular = require('angular');

module.exports = angular
    .module('app.mainTrainerPage.module', [])
    .component('mainPage',{
        templateUrl:'/app/js/trainerPage/components/mainPage.template.html',
        controller: MainPageController
    });

function MainPageController (TrainerPageServices) {
    var $ctrl = this;
    
    $ctrl.mainPage = TrainerPageServices.MainPage().all().$promise.then(function(response) {
        $ctrl.data = response;
    })
}

// http://localhost:8089/api/v1/training-trainers

