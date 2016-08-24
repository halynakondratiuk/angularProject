var angular = require('angular');

module.exports = angular
    .module('app.trainerTrainingsPage.Module', [])
    .component('trainerTrainings', {
        templateUrl: '/app/js/trainerPage/components/trainerTrainings.template.html',
        conroller: TrainerTrainingsController
    })
    

function TrainerTrainingsController (TrainerPageServices) {
    var $ctrl = this;

    $ctrl.trainerTrainings = TrainerPageServices.TrainerTrainings().all().$promise.then(function(response) {
        $ctrl.data = response;
    })
}

    
