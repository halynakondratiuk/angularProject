var angular = require('angular'),

trainerPageDescriptionComponent = require('./components/trainerPageDescription.component.js'),
mainPageComponent = require('./components/mainPage.component.js'), 
navbarLeftSideComponent = require('./components/navbarLeftSide.component.js'),
trainerGroupsComponent = require('./components/trainerGroups.component.js'),
trainerTrainingsComponent = require('./components/trainerTrainings.component.js');

module.exports = angular 
.module('app.trainerPage.mainModule', [
    trainerPageDescriptionComponent.name,
    mainPageComponent.name,
    navbarLeftSideComponent.name,
    trainerGroupsComponent.name,
    trainerTrainingsComponent.name
]);