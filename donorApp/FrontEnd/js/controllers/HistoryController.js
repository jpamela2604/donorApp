(function() {
    'use strict';

    angular
        .module('app')
        .controller('HistoryController', HistoryController);

    HistoryController.$inject = [ 'ApiServices','$uibModal','ApiPrepHistory'];

    function HistoryController( ApiServices,$uibModal,ApiPrepHistory) {
        var vm = this;
        /* fill data */
        vm.Data = ApiPrepHistory.data.Data;
        vm.form=ApiServices.paymentValues;
        
        /* detail method */
        vm.detail = function(record) {
            ApiServices.SpecificRecord=record;
            $uibModal.open({
                templateUrl: "views/detailTransaction.html",
                controller: "DetailTransactionController as info",
                size: '',
            });
        }
    }
})();