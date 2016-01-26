/// <reference path="../_all.ts" />

module quizzer {
  'use strict';

  angular
    .module('quizzer', ['ui.router', 'angularMoment', 'ngMockE2E', 'ngMaterial'])
    .config(function ($mdThemingProvider: any, $mdIconProvider: any) {

      var xx = 'x';

      // load the svg icons
      $mdIconProvider
        .icon("checked", "./assets/svg/ic_check_circle_black_24px.svg", 24)
        .icon("menu", "./assets/svg/menu.svg", 24);

      // the color theme
      $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
    });

  console.info('app.ts');
}