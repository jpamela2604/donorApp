(function() {
    'use strict';

    app
        .controller('CardController', CardController);

    CardController.$inject = ['$scope', '$location', 'ApiServices','ValidationServices'];

    function CardController($scope, $location, ApiServices,ValidationServices) {

        // fill form
        $scope.form=ApiServices.paymentValues;
        $scope.PaymentTypeLabel = "Credit card label info";
        $scope.CreditCardTypeList = [{
                value: 1,
                description: "Visa"
            },
            {
                value: 2,
                description: "Master Card"
            },
            {
                value: 3,
                description: "American Express"
            },
            {
                value: 4,
                description: "Discover"
            },
            {
                value: 5,
                description: "Diners Club"
            }
        ];

        // prev y continue button methods
        $scope.next = function() {
            console.log($scope.form.ExpirationDate)
            if (!ValidationServices.ValidateCards($scope.form.CreditCard.value, $scope.form.CardNumber)) {

                $scope.respuesta = 'Invalid Card Number';
                $scope.visible = true;
            } else if (String($scope.form.VerificationNumber).length != 3) {
                $scope.respuesta = 'Invalid Verification Number';
                $scope.visible = true;
            } else if (!$scope.form.Name.match(/^\w+\s\w+$/)) {
                $scope.respuesta = 'Write first and last name';
                $scope.visible = true;
            } else if(!ValidationServices.ValidateDate($scope.form.ExpirationDate)){
                $scope.respuesta = 'Invalid date';
                $scope.visible = true;
            } else {
                $scope.visible = false;
                $location.path('adress');
            }
        }

        $scope.prev = function() {
            $location.path('payment');
        }

    }

})();