(function() {
  'use strict';

  angular
      .module('app')
      .controller('PaymentController', PaymentController);

  PaymentController.$inject = [ '$location', 'ApiServices','ApiPrepConfig'];



  function PaymentController( $location, ApiServices,ApiPrepConfig) {
      var vm = this;
      // fill form  
      vm.Data = ApiPrepConfig.data.Data;
      vm.form=ApiServices.paymentValues;
      vm.form.PaymentType=vm.Data.PaymentTypeLabel;
      vm.FrequencyTypeList = [{
        value: 1,
        description: "One-time"
        },
        {
            value: 2,
            description: "Monthly"
        },
        {
            value: 3,
            description: "Quarterly"
        },
        {
            value: 4,
            description: "Semi-annual"
        }
    ];
    
     // continue button method
    vm.next = next;
    function next() {
        if(vm.form.checkAmount<=0||vm.form.checkAmount<vm.Data.MinimumDonationAmount)
        {
            vm.message = 'Amount of donation is not enough';
            vm.messageVisibility = true;
        }else
        {
            $location.path('card');
            vm.messageVisibility = false;
        }
          
      }
    }

})();