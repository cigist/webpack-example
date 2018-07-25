import angular from 'angular';
import ngRouter from '@uirouter/angularjs';
import HomeCtrl from './controller/HomeCtrl';
import ProfileCtrl from './controller/ProfileCtrl';

const app = angular.module('app', ['ui.router'])
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'pages/home.html'
        })
        .state('/profile', {
            url: '/profile',
            templateUrl: 'pages/profile.html'
        });
});
app.controller('HomeCtrl', HomeCtrl);
app.controller('ProfileCtrl', ProfileCtrl);
export default app;