/*(function() {
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
        
        vm.next = next;
        vm.prev = prev;
        
        
        function next () {
            $location.path('agency');
        }        
               
        function prev()  {
            $location.path('card');
        }
    }
})();*/ 