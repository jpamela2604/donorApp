
(function() {
  'use strict';

  angular
      .module('app')
      .controller('ModalController', ModalController);
   
    ModalController.$inject = [ '$location', '$uibModalInstance','ApiServices'];
    function ModalController( $location, $uibModalInstance,ApiServices) { 
      var vm = this;
      vm.message=ApiServices.message;
      vm.ok = ok;
      vm.cancel = cancel;

      function ok(){
        $uibModalInstance.close("Ok");
        $location.path('history');
      }
     
      function cancel(){
        $uibModalInstance.dismiss();
      } 
    
  };
})();