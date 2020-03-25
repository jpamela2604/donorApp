(function() {
  'use strict';

    angular
    .module('app')
    .controller('DetailTransactionController', DetailTransactionController);
    

    DetailTransactionController.$inject = ['$uibModalInstance','ApiServices'];
    
    
    function DetailTransactionController( $uibModalInstance,ApiServices){
      var vm = this;
      /* fill values */
      vm.SpecificRecord=ApiServices.SpecificRecord;

      /* ok method */
      vm.ok = function(){
        $uibModalInstance.close("Ok");
      }     
    
  };
})();