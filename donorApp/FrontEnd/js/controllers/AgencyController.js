(function() {
    'use strict';

    app
        .controller('AgencyController', AgencyController);

    AgencyController.$inject = ['$scope', 'ApiServices','$location'];

    function AgencyController($scope, ApiServices,$location) {

        // fill form
        $scope.form=ApiServices.paymentValues;
        ApiServices.IntroductoryPanel().then(function(data) {
            $scope.PanelTitle = data.data.Data.PanelTitle;
            $scope.Agencias = data.data.Data.PanelItemList;
        });

        

        
        // prev y continue button methods

        $scope.prev = function() {
            $location.path('adress');
        }
        $scope.next = function() {
            //            console.log($scope.form);
            /*console.log($scope.form.checkAmount)
            console.log($scope.form.Agency.MinimumDonation)*/
            if($scope.form.checkAmount<$scope.form.Agency.MinimumDonation)
            {
                $scope.respuesta = 'Amount of donation is not enough';
                $scope.visible = true;
            }else
            {
                /*console.log($scope.form);
                console.log($scope.form.Agency);*/
                $scope.visible = false;
                $location.path('sumary');
            }
        }
    }
})();