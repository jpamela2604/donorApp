(function() {
    'use strict';

    angular
        .module('app')
        .controller('HistoryController', HistoryController)
        .component('historyComponent', {
            controller: 'HistoryController as info', 
            templateUrl: 'js/history/history.html',
            bindings: {
                apiPrepHistory: '='
            }
        });
  
        HistoryController.$inject = [ 'ApiServices','$uibModal'];

    function HistoryController( ApiServices,$uibModal) {
        var vm = this;
        vm.$onInit = onInit;
           
        function onInit() {
        /* fill data */
            vm.Data = vm.apiPrepHistory.data.Data;
            vm.form=ApiServices.paymentValues;
        }
        /* detail method */
        vm.detail = detail;

        function detail(record) {
            ApiServices.SpecificRecord=record;
            $uibModal.open({
                templateUrl: "js/history/detailTransaction.html",
                controller: "DetailTransactionController as info",
                size: '',
            });
        }
    }

  })();