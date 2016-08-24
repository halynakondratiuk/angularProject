var angular = require('angular');

module.exports = angular
    .module('app.trainerGroupsPage.Module', [])
    .component('trainerGroups', {
        templateUrl:'/app/js/trainerPage/components/trainerGroups.template.html',
        controller: TrainerGroupsController
    })

function TrainerGroupsController (TrainerPageServices) {
    var $ctrl = this;

    $ctrl.trainerGroup  = TrainerPageServices.TrainerGroups().all().$promise.then(function(response) {
        $ctrl.data = response;
    })
}

