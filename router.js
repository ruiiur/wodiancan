/**
 * Created by Weetao on 2017-06-07.
 */
var app=angular.module('app',['ui.router']);
angular.module('app')
    .config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
        //路由配置
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index',{
                url:'/',
                views:{
                    'main':{
                        controller:'mainCtrl',
                        templateUrl:'views/home.html'
                    }
                }
            })
    }])