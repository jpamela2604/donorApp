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
        vm.EditCharity = EditCharity;
        vm.EditPayment = EditPayment;
        vm.Finish = Finish;
        vm.prev = prev;

        function EditCharity() {
            $location.path('agency');
        }
        
        function EditPayment() {
           $location.path('payment');
        }       
        
        function Finish() {            

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
                    templateUrl: "js/sumary/modal.html",
                    controller: "ModalController as info",
                    size: '',
                  });
            });


         }
 
         function prev() {
             $location.path('agency');
         }
    }
  
  })();