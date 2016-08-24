'use strict';
module.exports = angular
    .module('app.trainer_page_services', ['ngResource'])
    .factory('TrainerPageServices', TrainerPageServices);

function TrainerPageServices($resource) {
    // service definition
    var service = {
        GetData: GetData,
        TrainerTrainings: TrainerTrainings,
        TrainingDescription: TrainingDescription,
        TrainerGroups: TrainerGroups
    };
    return service;

    // resource
    function GetData() {
        return $resource('http://localhost:8000/api/v1/training-catalog/:id', {id: "@id"});
    }

    function TrainerTrainings() {
        return $resource('', {}, {
            all: {
                method: "GET",
                url: ""
            }
        });
    }
    function TrainingDescription() {
        return $resource('', {}, {
            all: {
                method: "GET",
                url: ""
            }
        });
    }

    function TrainerGroups() {
        return $resource('', {}, {
            all: {
                method: "GET",
                url: ""
            }
        });
    }
}

