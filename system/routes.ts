/// <reference path="../_all.ts" />

module router {
  'use strict';

  angular
    .module('quizzer')
    .config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];

  function router($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    console.info('in router');

    $stateProvider
      .state('quiz', {
        url: '/quiz',
        templateUrl: 'quiz/quiz-listings.html',
        controller: 'QuizListController as quizList'
      })
      .state('player', {
        url: '/player/:id',
        templateUrl: 'play/play.html',
        controller: 'PlayController as player'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.html',
        controller: 'AboutController as about'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'LoginController as login'
      });

    $urlRouterProvider.otherwise('/quiz');
  }

  console.info('routes.ts');
}