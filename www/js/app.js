// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      StatusBar.show();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.d27', {
      url: "/d27",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D27'
        }
      }
    })
    .state('app.d28', {
      url: "/d28",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D28'
        }
      }
    })
    .state('app.d29', {
      url: "/d29",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D29'
        }
      }
    })
    .state('app.d30', {
      url: "/d30",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D30'
        }
      }
    })
    .state('app.d1', {
      url: "/d1",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D1'
        }
      }
    })
    .state('app.d2', {
      url: "/d2",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D2'
        }
      }
    })
    .state('app.d3', {
      url: "/d3",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D3'
        }
      }
    })
    .state('app.d4', {
      url: "/d4",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D4'
        }
      }
    })
    .state('app.d5', {
      url: "/d5",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D5'
        }
      }
    })
    .state('app.d6', {
      url: "/d6",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D6'
        }
      }
    })

    .state('app.transport', {
      url: "/transport",
      views: {
        'menuContent' :{
          templateUrl: "templates/transport.html"
        }
      }
    })

    .state('app.txosnaschedule', {
      url: "/txosnaschedule",
      views: {
        'menuContent' :{
          templateUrl: "templates/txosnaschedule.html"
        }
      }
    })

    .state('app.tournaments', {
      url: "/tournaments",
      views: {
        'menuContent' :{
          templateUrl: "templates/tournaments.html"
        }
      }
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    })

    .state('app.telephones', {
      url: "/telephones",
      views: {
        'menuContent' :{
          templateUrl: "templates/telephones.html"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/d27');
});

