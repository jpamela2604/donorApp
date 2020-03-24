(function() {
  'use strict';

  app
      .controller('PaymentController', PaymentController);

  PaymentController.$inject = ['$scope', '$location', 'ApiServices'];



  function PaymentController($scope, $location, ApiServices) {

      // fill form  
      ApiServices.PaymentTypeConfiguration().then(function(data) {
          if (data.status == 200) {
              $scope.PaymentTypeLabel = data.data.Data.PaymentTypeLabel;
              $scope.PaymentInstructions = data.data.Data.PaymentInstructions;
              $scope.PaymentQuestion = data.data.Data.PaymentQuestion;
              $scope.Pays = data.data.Data.AmountQuestions[0].AmountOptions;
              $scope.FrequencyInstructions = data.data.Data.FrequencyInstructions;
              $scope.FrequencyTypeList = [{
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
             $scope.form=ApiServices.paymentValues;
             $scope.MinimumDonationAmount = data.data.Data.MinimumDonationAmount;
             $scope.form.PaymentType=data.data.Data.PaymentTypeLabel;
          }

      });
      
     // continue button method
      $scope.next = function() {
        if($scope.form.checkAmount<=0||$scope.form.checkAmount<$scope.MinimumDonationAmount)
        {
            $scope.respuesta = 'Amount of donation is not enough';
            $scope.visible = true;
        }else
        {
            $location.path('card');
            $scope.visible = false;
        }
          
      }
  }

})();