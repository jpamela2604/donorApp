
(function() {
    'use strict';
  
    angular
        .module('app')
        .controller('PaymentController', PaymentController)
        .component('paymentComponent', {
            controller: 'PaymentController', 
            controllerAs: "info",
            templateUrl: 'js/payment/payment.html' ,
            bindings: {
                apiPrepConfig: '='
            }               
        });    
    
        PaymentController.$inject = [ '$location', 'ApiServices'];



        function PaymentController( $location, ApiServices) {
            var vm = this;
            vm.$onInit = onInit;
           
            function onInit() {
                
                // fill form  
                vm.alerts = [];
                vm.Data = vm.apiPrepConfig.data.Data;
                vm.Data =vm.Data;
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

                console.log(vm.apiPrepConfig);
            }
           
          
           // continue button method    
          vm.addAlert=addAlert;
          vm.closeAlert=closeAlert;
          vm.next = next;
          function addAlert(message) {
              vm.alerts.push({msg: message});
            };
          
          function closeAlert(index) {
              vm.alerts.splice(index, 1);
          };
      
          function next() {
              if(vm.form.checkAmount<=0||vm.form.checkAmount<vm.Data.MinimumDonationAmount)
              {
                  addAlert('Amount of donation is not enough');
              }else
              {
                  $location.path('card');
              }
                
            }
          }


  })();
