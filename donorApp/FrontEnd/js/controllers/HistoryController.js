(function() {
    'use strict';

    app
        .controller('HistoryController', HistoryController);

    HistoryController.$inject = ['$scope', 'ApiServices','$uibModal'];

    function HistoryController($scope, ApiServices,$uibModal) {
        /* fill data */
        $scope.form=ApiServices.paymentValues;
        ApiServices.GivingHistory().then(function(data) {
            if (data.status == 200) {
                $scope.Records= data.data.Data.PledgeList;
            }
        });
        /* detail method */
        $scope.detail = function(record) {
            ApiServices.SpecificRecord=record;
            $uibModal.open({
                templateUrl: "views/detailTransaction.html",
                controller: "DetailTransactionController",
                size: '',
            });
            console.log(record)
        }
    }
})();