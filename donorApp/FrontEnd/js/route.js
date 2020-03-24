app.config(function ($routeProvider, $locationProvider) { 
    //$locationProvider.hashPrefix('');
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $routeProvider 
        .when('/', { 
            controller: 'MainController', 
            templateUrl: 'views/login.html' 
        }) 
        .when('/payment', { 
            controller: 'PaymentController', 
            templateUrl: 'views/payment.html' 
        }) 
        .when('/card', { 
            controller: 'CardController', 
            templateUrl: 'views/card.html' 
        }) 
        .when('/adress', { 
            controller: 'AdressController', 
            templateUrl: 'views/adress.html' 
        }) 
        .when('/agency', { 
            controller: 'AgencyController', 
            templateUrl: 'views/agency.html' 
        }) 
        .when('/sumary', { 
            controller: 'SumaryController', 
            templateUrl: 'views/sumary.html' 
        }) 
        .when('/history', { 
            controller: 'HistoryController', 
            templateUrl: 'views/history.html' 
        })
        .otherwise({ 
        redirectTo: '/' 
        }); 
    }); 