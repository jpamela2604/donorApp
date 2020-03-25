(function() {
    'use strict';

    angular
        .module('app')
        .controller('AdressController', AdressController);

    AdressController.$inject = ['$location', 
                                'ApiServices',
                                'ApiPrepCountry',
                                'ApiPrepState'
                            ];

    function AdressController($location, ApiServices,ApiPrepCountry,ApiPrepState) {
        var vm=this;
        // fill form
        vm.form=ApiServices.paymentValues;
        vm.contries=ApiPrepCountry.data.Data;
        vm.state=ApiPrepState.data.Data;
        
        // prev y continue button methods

        vm.next = function() {
            $location.path('agency');
        }        
        vm.prev = function() {
            $location.path('card');
        }
    }
})();