var angular = require('angular');

module.exports = angular
    .module('app.trainerDescriptionPage.module', [])
    .component('trainerPage',{
        templateUrl:'/app/js/trainerPage/components/trainerPageDescription.template.html',
        controller: TrainingDescriptionController
    })

function TrainingDescriptionController (TrainerPageServices) {
    var $ctrl = this;

    $ctrl.trainerPage = TrainerPageServices.TrainingDescription().all().$promise.then(function(response) {
        $ctrl.dataTrainerPage = response;
    })
}

// function TrainingDescriptionController ($scope, TrainerPageDescriptionFactory) {
//     this.$routerOnActivate = function (next, previous) {
//         var id = next.params.id;
//         $scope.trainerPageDescription = TrainerPageDescriptionFactory.all({id: id});
//
//     }
// };
