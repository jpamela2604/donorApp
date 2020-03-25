(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('SumaryController', SumaryController);
  
    SumaryController.$inject = [ '$location', 'ApiServices','$uibModal','ValidationServices'];
  
    function SumaryController( $location, ApiServices,$uibModal,ValidationServices) {
        var vm = this;
        //fill data
        vm.form=ApiServices.paymentValues;
        vm.form.TotalAnnualAmount=ValidationServices.TotalAnnaulAmount(vm.form.frequency,vm.form.checkAmount);

        //method of buttons
        vm.EditCharity = function() {
            $location.path('agency');
        }
        vm.EditPayment = function() {
           $location.path('payment');
        }       
        
        vm.Finish = function() {            

           ApiServices.SaveDonation(vm.form.Amount,
            vm.form.Agency.CFCAgencyId,
            vm.form.CreditCard.value,
            vm.form.Name,
            vm.form.CardNumber,
            vm.form.ExpirationDate,
            vm.form.EmailAdress,
            vm.form.VerificationNumber).then(function(data) {
                if (data.status == 200) {
                    ApiServices.message="Successfull transaction";
                }else{
                    ApiServices.message="Fail transaction";
                }
                $uibModal.open({
                    templateUrl: "views/modal.html",
                    controller: "ModalController as info",
                    size: '',
                  });
            });


         }
 
         vm.prev = function() {
             $location.path('agency');
         }
    }
  
  })();