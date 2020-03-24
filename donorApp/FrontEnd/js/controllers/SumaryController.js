(function() {
    'use strict';
    
    app
        .controller('SumaryController', SumaryController);
  
    SumaryController.$inject = ['$scope', '$location', 'ApiServices','$uibModal','ValidationServices'];
  
    function SumaryController($scope, $location, ApiServices,$uibModal,ValidationServices) {
        $scope.form=ApiServices.paymentValues;
        $scope.form.TotalAnnualAmount=ValidationServices.TotalAnnaulAmount($scope.form.frequency,$scope.form.checkAmount);

        $scope.EditPayment = function() {
           $location.path('payment');
        }

        $scope.EditCharity = function() {
            $location.path('agency');
        }
        $scope.Finish = function() {
           // $location.path('payment');            

           ApiServices.SaveDonation($scope.form.Amount,
            $scope.form.Agency.CFCAgencyId,
            $scope.form.CreditCard.value,
            $scope.form.Name,
            $scope.form.CardNumber,
            $scope.form.ExpirationDate,
            $scope.form.EmailAdress,
            $scope.form.VerificationNumber).then(function(data) {
                if (data.status == 200) {
                    ApiServices.valor="Successfull transaction";
                }else{
                    ApiServices.valor="Fail transaction";
                }
                $uibModal.open({
                    templateUrl: "views/modal.html",
                    controller: "ModalController",
                    size: '',
                  });
                  
                 /* modalInstance.result.then(function(response){
                      $scope.result = `${response} button hitted`;
                  });*/
            });


         }
 
         $scope.prev = function() {
             $location.path('agency');
         }
    }
  
  })();