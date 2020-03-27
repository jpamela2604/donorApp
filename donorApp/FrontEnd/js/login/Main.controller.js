(function() {
  'use strict';

  angular
      .module('app')
      .controller('MainController', MainController);

  MainController.$inject = [ '$location', 'ApiServices'];

  function MainController( $location, ApiServices) {
    var vm = this;
    vm.form=ApiServices.paymentValues;
    vm.alerts = [];
    vm.log = log;

    async function log()
    {
        ApiServices.authApp().then(function(data) {
            if(data.status == 200) {
              ApiServices.appToken = data.data;
              ApiServices.DonorAuthenticate(/*$scope.compaing*/"sp25camp1",vm.user, vm.pass).then(function(data2) {
                  if (data2.status == 200) {
                      ApiServices.donorToken = data2.data.Data.DonorToken;
                      vm.form.compaing=vm.compaing;
                      $location.path('payment');
                  } else {
                      addAlert('Invalid user/password');
                  }
              });
           }else {
            addAlert('Invalid user/password');
          }
        });
    }
    // alert methods
    vm.addAlert=addAlert;
    vm.closeAlert=closeAlert;
    function addAlert(message) {
      vm.alerts.push({msg: message});
    };
  
    function closeAlert(index) {
        vm.alerts.splice(index, 1);
    };
  }

})();