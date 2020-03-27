(function() {
    'use strict';

    angular
        .module('app')
        .controller('AgencyController', AgencyController)
        .component('agencyComponent', {
            controller: 'AgencyController as info', 
            templateUrl: 'js/agency/agency.html' ,
            bindings: {
                apiPrepAgency: '='
            }
        });
  
    AgencyController.$inject = [ 'ApiServices','$location'];

    function AgencyController( ApiServices,$location) {
        var vm = this;
        vm.$onInit = onInit;
           
        function onInit() {
        // fill form
            console.log(vm.apiPrepAgency.data.Data)
            vm.form=ApiServices.paymentValues;
            vm.Data = vm.apiPrepAgency.data.Data;
        }
        // prev y continue button methods
        vm.next = next;
        vm.prev = prev;

        function next() {
            if(vm.form.checkAmount<vm.form.Agency.MinimumDonation){
                vm.message = 'Amount of donation is not enough';
                vm.messageVisibility = true;
            }else{
                vm.messageVisibility = false;
                $location.path('sumary');
            }
        }
        
        function prev() {
            $location.path('adress');
        }
        
    }


  })();