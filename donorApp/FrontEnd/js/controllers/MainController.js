(function() {
  'use strict';

  app
      .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$location', 'ApiServices'];

  function MainController($scope, $location, ApiServices) {
    $scope.form=ApiServices.paymentValues;
      $scope.log = async function() {
          ApiServices.authApp().then(function(data) {
              if(data.status == 200) {
                ApiServices.appToken = data.data;
                ApiServices.DonorAuthenticate(/*$scope.compaing*/"sp25camp1", $scope.user, $scope.pass).then(function(data2) {
                    if (data2.status == 200) {
                        ApiServices.donorToken = data2.data.Data.DonorToken;
                        $scope.form.compaing=$scope.compaing;
                        $location.path('payment');
                    } else {
                        $scope.respuesta = 'Invalid user/password';
                        $scope.visible = true;
                    }
                });
             }else {
                $scope.respuesta = 'Invalid user/password';
                $scope.visible = true;
            }
          });
      }
  }

})();