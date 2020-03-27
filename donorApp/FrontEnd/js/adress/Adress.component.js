(function() {
    'use strict';

    angular
        .module('app')
        .controller('AdressController', AdressController)
        .component('adressComponent', {
            templateUrl: 'js/adress/adress.html',
            controller: 'AdressController',
            controllerAs: "info",
            bindings: {
                apiPrepCountry: '=',
                apiPrepState:'='
            }
        });
  
        AdressController.$inject = ['$location', 
        'ApiServices'
    ];

    function AdressController($location, ApiServices) {
    var vm=this;
    vm.$onInit = onInit;
           
    function onInit() {
    // fill form
        vm.form=ApiServices.paymentValues;
        vm.contries=vm.apiPrepCountry.data.Data;
        vm.state=vm.apiPrepState.data.Data;
    }
    // prev y continue button methods

    vm.next = next;
    vm.prev = prev;


    function next () {
    $location.path('agency');
    }        

    function prev()  {
    $location.path('card');
    }
    }
  })();