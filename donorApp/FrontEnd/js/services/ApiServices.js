(function() {
  'use strict';

  app
      .service('ApiServices', ApiServices);

  ApiServices.$inject = ['$http', 'url', 'apiKey'];

  function ApiServices($http, url, apiKey) {
      var service = this;
      service.appToken = "";
      service.donorToken = "";
      service.paymentValues = {
          Amount: 6,
          Frecuency: 2
      }
      /* API QUERIES */

      function authApp() {
          return $http({
                  "method": "GET",
                  "url": url + "/api/Application/Authenticate",
                  "data": {},
                  "params": {
                      "apikey": apiKey
                  },
                  "headers": {
                      'Authorization': "Basic QVBJVXNlci1UZXN0OkFQSVVzZXItVGVzdA=="
                  }
              })
              .then(function(data) {
                  return data;
              })
              .catch(function(err) {
                  console.log(err);
                  return err;
              });
      }

      function DonorAuthenticate(compaing, user, pass) {
          return $http({
                  "method": "GET",
                  "url": url + "/api/Donor/Authenticate",
                  "data": {},
                  "params": {
                      "apikey": apiKey,
                      "campaignCode": compaing,
                      "username": user,
                      "password": pass
                  },
                  "headers": {
                      'Authorization': "Bearer " + this.appToken,
                      'apiKey': apiKey
                  }
              })
              .then(function(data) {
                  return data;
              })
              .catch(function(err) {
                  console.log(err);
                  return err;
              });

      }

      function Countries() {
          return $http({
                  "method": "GET",
                  "url": url + "/api/Configuration/Countries",
                  "data": {},
                  "params": {
                      "apikey": apiKey
                  },
                  "headers": {
                      'Authorization': "Bearer " + this.appToken,
                      'apiKey': apiKey
                  }
              })
              .then(function(data) {
                  return data;
              })
              .catch(function(err) {
                  console.log(err);
                  return err;
              });
      }

      function State() {
          return $http({
                  "method": "GET",
                  "url": url + "/api/Configuration/USStates",
                  "data": {},
                  "params": {
                      "apikey": apiKey
                  },
                  "headers": {
                      'Authorization': "Bearer " + this.appToken,
                      'apiKey': apiKey
                  }
              })
              .then(function(data) {
                  return data;
              })
              .catch(function(err) {
                  console.log(err);
                  return err;
              });
      }

      function PaymentTypeConfiguration() {
          return $http({
                  "method": "GET",
                  "url": url + "/api/Configuration/PaymentTypeConfiguration",
                  "data": {},
                  "params": {
                      "apikey": apiKey,
                      "donorToken": this.donorToken,
                      "paymentType": 2
                  },
                  "headers": {
                      'Authorization': "Bearer " + this.appToken,
                      'apiKey': apiKey
                  }
              })
              .then(function(data) {
                  return data;
              })
              .catch(function(err) {
                  console.log(err);
                  return err;
              });
      }

      function IntroductoryPanel(){
        return $http({
            "method": "GET",
            "url": url + "/api/Configuration/IntroductoryPanel",
            "data": {},
            "params": {
                "apikey": apiKey,
                "donorToken": this.donorToken,
            },
            "headers": {
                'Authorization': "Bearer " + this.appToken,
                'apiKey': apiKey
            }
        })
        .then(function(data) {
            return data;
        })
        .catch(function(err) {
            console.log(err);
            return err;
        });
      }

      function SaveDonation(amount,CFCAgencyId,cardtype,name,cardnumber,expiration,email,cardverificacion){
        return $http({
            "method": "GET",
            "url": url + "/api/Donation/Save",
            "data": {},
            "params": {
                "apikey": apiKey,
                "donorToken": this.donorToken,
                "pledges": {
                    "CampaignId" : "ac58aac5-2baa-41a0-9395-898bcb939cda",
                    "PledgeStatusType" : 0,
                    "DonationSourceType" : 9,
                    "Pa" : 2,
                    "FrequencyType" : 1, 
                    "PaymentAmountType" : 1,
                    "PaymentTotalValue" : amount,
                    "AddOnTotalValue" : 0,
                    "PaymentAmount" : amount,
                    "TotalValue" : amount,
                    "Payment" : { 
                    },
                    "AddOnList" : [],
                    "AddOnTotalList": [],
                    "DesignationAmountType" : 1,
                    "DesignationWriteInList" : [],
                    "NegativeDesignation" : "",
                    "DesignationList" : [
                      {
                     
                        "CFCAgencyId" : CFCAgencyId,
                        "DesignateableEntityType" : "", /* DesignateableEntityTypeCode.Code debe ser usado o  DesignateableEntityType, en caso que uno sea nulo, usar el otro*/
                        "DesignationId" : "",
                        "DisplayName" : "",
                        "DistributionDesignationId" : "",
                        "EIN": "",
                        "EntityId" : "",
                        "IsDefaultPanelItem" : false,
                        "IsRejected" : false,
                        "MinimumDonation" : "",
                        "MinimumTotalDonationForDesignation" : "",
                        "Name" : "",
                        "OrganizationNumber" : "",
                        "DesignationAmount" : amount,
                        "StandardAccountCode" : ""
                      }
                    ],
                    "PaymentIncreaseAmountType" : 1,
                    "PaymentIncreaseAmount" : 0,
                    "IsImpersonated" : false,
                    "ImpersonatedUser" : "",
                    "IsConfirmed" : true,
                    "CustomField1" : cardtype,
                    "CustomField2" : name,
                    "CustomField3" : cardnumber,
                    "CustomField4" : expiration,
                    "CustomField5" : email,
                    "CustomField6" : cardverificacion
                   }
            },
            "headers": {
                'Authorization': "Bearer " + this.appToken,
                'apiKey': apiKey,
                'Accept': 'application/json'
            }
        })
        .then(function(data) {
            return data;
        })
        .catch(function(err) {
            console.log(err);
            return err;
        });
      }

      function GivingHistory(){
        return $http({
            "method": "GET",
            "url": url + "/api/Donor/GivingHistory",
            "data": {},
            "params": {
                "apikey": apiKey,
                "donorToken": this.donorToken,
                "paymentType": 2
            },
            "headers": {
                'Authorization': "Bearer " + this.appToken,
                'apiKey': apiKey
            }
        })
        .then(function(data) {
            return data;
        })
        .catch(function(err) {
            console.log(err);
            return err;
        });
      }
      
 

      service.authApp = authApp;
      service.DonorAuthenticate = DonorAuthenticate;
      service.Countries = Countries;
      service.State = State;
      service.PaymentTypeConfiguration = PaymentTypeConfiguration;
      service.IntroductoryPanel=IntroductoryPanel;
      service.SaveDonation=SaveDonation;
      service.GivingHistory=GivingHistory;

      return service;
  }
})();