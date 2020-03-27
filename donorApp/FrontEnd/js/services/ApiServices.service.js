(function() {
  'use strict';

  angular
      .module('app')
      .service('ApiServices', ApiServices);

  ApiServices.$inject = ['apiRepository'];

  function ApiServices(apiRepository) {
      var service = this;
      service.appToken = "";
      service.donorToken = "";
      service.paymentValues = {
          Amount: 6,
          Frecuency: 2
      }
      service.myData=[];
      /* API QUERIES */

      function authApp() {
        return apiRepository.authApp()
                  .then(function (response){
                      return response;
                  });
         
        }
      function Countries() {
        return apiRepository.Countries(this.appToken)
                  .then(function (response){
                      return response;
                  });
     }

      function DonorAuthenticate(compaing, user, pass) {         
              return apiRepository.DonorAuthenticate(compaing, user, pass,this.appToken)
                  .then(function (response){
                      return response;
                  });

      }

      function GivingHistory(){
        return apiRepository.GivingHistory(this.donorToken,this.appToken)
        .then(function (response){
              return response;
          });

      }
      function IntroductoryPanel(){
        return apiRepository.IntroductoryPanel(this.donorToken,this.appToken)
        .then(function (response){
            return response;
        });
      }
      function PaymentTypeConfiguration() {
            return apiRepository.PaymentTypeConfiguration(this.donorToken,this.appToken)
                .then(function (response){
                      return response;
                  });

      }    

      function SaveDonation(amount,CFCAgencyId,cardtype,name,cardnumber,expiration,email,cardverificacion){
        return apiRepository.SaveDonation(amount,CFCAgencyId,cardtype,name,
            cardnumber,expiration,email,cardverificacion,this.donorToken,this.appToken)
        .then(function (response){
            return response;
        });
      }

      function State() {
        return apiRepository.State(this.appToken)
        .then(function (response){
            return response;
        });
      }


      service.authApp = authApp;
      service.Countries = Countries;
      service.DonorAuthenticate = DonorAuthenticate;  
      service.GivingHistory=GivingHistory;
      service.IntroductoryPanel=IntroductoryPanel;
      service.PaymentTypeConfiguration = PaymentTypeConfiguration;
      service.SaveDonation=SaveDonation;
      service.State = State;
      //service.myData=myData;

      return service;
  }
})();