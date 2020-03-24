app.controller('ModalController', function($scope, $location, $uibModalInstance,ApiServices) {
    $scope.respuesta=ApiServices.valor;
    $scope.ok = function(){
      $uibModalInstance.close("Ok");
      $location.path('history');
    }
     
    $scope.cancel = function(){
      $uibModalInstance.dismiss();
    } 
    
  });