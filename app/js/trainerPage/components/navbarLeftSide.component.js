var angular = require('angular');

module.exports = angular
    .module('app.navbarPage.module', [])
    .component('navbarLeftSide', {
        templateUrl:'/app/js/trainerPage/components/navbarLeftSide.template.html',
        controller: navbarLeftSideController
    })
    .factory('navbarLeftSideFactory', ['$resource',
        function($resource) {
            return $resource('', {}, {
                all: {
                    method: "GET",
                    url: ""
                }
            });
        }
    ]);
function navbarLeftSideController ($scope, navbarLeftSideFactory) {
    $scope.navbar = navbarLeftSideFactory.all();
};
