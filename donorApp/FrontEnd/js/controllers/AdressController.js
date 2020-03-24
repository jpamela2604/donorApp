(function() {
    'use strict';

    app
        .controller('AdressController', AdressController);

    AdressController.$inject = ['$scope', '$location', 'ApiServices'];

    function AdressController($scope,$location, ApiServices) {

        // fill form
        $scope.form=ApiServices.paymentValues;
        ApiServices.Countries().then(function(data) {
            $scope.contries = data.data.Data;
        });

        ApiServices.State().then(function(data) {
            $scope.state = data.data.Data;
        });

    
        
        // prev y continue button methods

        $scope.prev = function() {
            $location.path('card');
        }
        $scope.next = function() {
            $location.path('agency');
        }
    }
})();