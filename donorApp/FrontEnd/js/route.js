angular
      .module('app')
      .config(function ($routeProvider, $locationProvider) { 
    //$locationProvider.hashPrefix('');
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $routeProvider 
        .when('/', { 
            controller: 'MainController as main', 
            templateUrl: 'views/login.html' 
        }) 
        .when('/payment', { 
            controller: 'PaymentController as info', 
            templateUrl: 'views/payment.html' ,
            resolve:{
                ApiPrepConfig:function(ApiServices)
                {
                    return ApiServices.PaymentTypeConfiguration();
                }
            }
        }) 
        .when('/card', { 
            controller: 'CardController as info', 
            templateUrl: 'views/card.html' 
        }) 
        .when('/adress', { 
            controller: 'AdressController as info', 
            templateUrl: 'views/adress.html',
            resolve:{
                ApiPrepCountry:function(ApiServices)
                {
                    return ApiServices.Countries();
                },
                ApiPrepState:function(ApiServices)
                {
                    return ApiServices.State();
                }
            }
        }) 
        .when('/agency', { 
            controller: 'AgencyController as info', 
            templateUrl: 'views/agency.html' ,
            resolve:{
                ApiPrepAgency:function(ApiServices)
                {
                    return ApiServices.IntroductoryPanel();
                }
            }
        }) 
        .when('/sumary', { 
            controller: 'SumaryController as info', 
            templateUrl: 'views/sumary.html' 
        }) 
        .when('/history', { 
            controller: 'HistoryController as info', 
            templateUrl: 'views/history.html',
            resolve:{
                ApiPrepHistory:function(ApiServices)
                {
                    return ApiServices.GivingHistory();
                }
            } 
        })
        .otherwise({ 
        redirectTo: '/' 
        }); 
    }); 