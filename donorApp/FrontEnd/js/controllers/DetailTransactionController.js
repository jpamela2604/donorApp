app.controller('DetailTransactionController', function($scope, $uibModalInstance,ApiServices) {
    
    /* fill values */
    $scope.SpecificRecord=ApiServices.SpecificRecord;

    /* ok method */
    $scope.ok = function(){
      $uibModalInstance.close("Ok");
    }
     
    
  });