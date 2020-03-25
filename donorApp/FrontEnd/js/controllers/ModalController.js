
(function() {
  'use strict';

  angular
      .module('app')
      .controller('ModalController', ModalController);
   
    ModalController.$inject = [ '$location', '$uibModalInstance','ApiServices'];
    function ModalController( $location, $uibModalInstance,ApiServices) { 
      var vm = this;
      vm.message=ApiServices.message;
      
      vm.ok = function(){
        $uibModalInstance.close("Ok");
        $location.path('history');
      }
     
      vm.cancel = function(){
        $uibModalInstance.dismiss();
      } 
    
  };
})();