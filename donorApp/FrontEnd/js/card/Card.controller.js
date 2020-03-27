(function() {
    'use strict';

    angular
        .module('app')
        .controller('CardController', CardController);

    CardController.$inject = [ '$location', 'ApiServices','ValidationServices'];

    function CardController( $location, ApiServices,ValidationServices) {
        var vm = this;
        // fill form
        vm.alerts = [];
        vm.CreditCardTypeList = [{
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
        vm.form=ApiServices.paymentValues;
        vm.PaymentTypeLabel = "Credit card label info";
       

        // alert method and prev y continue button methods
        vm.addAlert=addAlert;
        vm.closeAlert=closeAlert;
        vm.next = next;
        vm.prev = prev;

        function addAlert(message) {
            vm.alerts.push({msg: message});
          };
        
        function closeAlert(index) {
            vm.alerts.splice(index, 1);
        };

        function next() {
            if (!ValidationServices.ValidateCards(vm.form.CreditCard.value, vm.form.CardNumber)) {
                addAlert('Invalid Card Number');
            } else if (String(vm.form.VerificationNumber).length != 3) {
                addAlert('Invalid Verification Number');
            } else if (!vm.form.Name.match(/^\w+\s\w+$/)) {
                addAlert('Write first and last name');
            } else if(!ValidationServices.ValidateDate(vm.form.ExpirationDate)){
                addAlert('Invalid date');
            } else {
                $location.path('adress');
            }
        }

        function prev() {
            $location.path('payment');
        }

    }

})();