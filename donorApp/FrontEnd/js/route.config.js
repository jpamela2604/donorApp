angular
      .module('app')
      .config(function($stateProvider, $locationProvider) {

        $locationProvider.html5Mode({ enabled: true, requireBase: false });

        var states = [            
            {
                name: 'login',
                url: '/',
                component: 'loginComponent'
            },
            {
                
                name: 'payment',
                url: '/payment',
                component: 'paymentComponent',    
                resolve:{
                    apiPrepConfig:['ApiServices',function(ApiServices)
                    {
                        return ApiServices.PaymentTypeConfiguration();
                    }]
                }
            },
            {
                name: 'card',
                url: '/card',
                component: 'cardComponent',
            },
            {
                name: 'adress',
                url: '/adress',
                component: 'adressComponent', 
                resolve:{
                    apiPrepCountry:['ApiServices',function(ApiServices)
                    {
                        return ApiServices.Countries();
                    }],
                    apiPrepState:['ApiServices',function(ApiServices)
                    {
                        return ApiServices.State();
                    }],
                }
            },
            {
                name: 'agency',
                url: '/agency',
                component: 'agencyComponent', 
                resolve:{                    
                    apiPrepAgency:['ApiServices',function(ApiServices)
                    {
                        return ApiServices.IntroductoryPanel();
                    }],
                }
            },
            {
                name: 'sumary',
                url: '/sumary',
                component: 'sumaryComponent'
            },
            {
                name: 'history',
                url: '/history',
                component: 'historyComponent',                
                resolve:{
                    apiPrepHistory:['ApiServices',function(ApiServices)
                    {
                        return ApiServices.GivingHistory();
                    }]
                } 
            }

        ];  
       

        states.forEach(function(state) {
            $stateProvider.state(state);
          });
      });