(function() {
    'use strict';

    angular
        .module('app')
        .controller('AgencyController', AgencyController);

    AgencyController.$inject = [ 'ApiServices','$location','ApiPrepAgency'];

    function AgencyController( ApiServices,$location,ApiPrepAgency) {
        var vm = this;
        // fill form
        vm.form=ApiServices.paymentValues;
        vm.Data = ApiPrepAgency.data.Data;
        
        // prev y continue button methods
        vm.next = function() {
            if(vm.form.checkAmount<vm.form.Agency.MinimumDonation){
                vm.message = 'Amount of donation is not enough';
                vm.messageVisibility = true;
            }else{
                vm.messageVisibility = false;
                $location.path('sumary');
            }
        }
        vm.prev = function() {
            $location.path('adress');
        }
        
    }
})();