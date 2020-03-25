(function() {
    'use strict';

    angular
        .module('app')
        .controller('CardController', CardController);

    CardController.$inject = [ '$location', 'ApiServices','ValidationServices'];

    function CardController( $location, ApiServices,ValidationServices) {
        var vm = this;
        // fill form
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
       

        // prev y continue button methods
        vm.next = next;
        vm.prev = prev;
        function next() {
            if (!ValidationServices.ValidateCards(vm.form.CreditCard.value, vm.form.CardNumber)) {
                vm.message = 'Invalid Card Number';
                vm.messageVisibility = true;
            } else if (String(vm.form.VerificationNumber).length != 3) {
                vm.message = 'Invalid Verification Number';
                vm.messageVisibility = true;
            } else if (!vm.form.Name.match(/^\w+\s\w+$/)) {
                vm.message = 'Write first and last name';
                vm.messageVisibility = true;
            } else if(!ValidationServices.ValidateDate(vm.form.ExpirationDate)){
                vm.message = 'Invalid date';
                vm.messageVisibility = true;
            } else {
                vm.messageVisibility = false;
                $location.path('adress');
            }
        }

        function prev() {
            $location.path('payment');
        }

    }

})();