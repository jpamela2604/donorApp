(function() {
    'use strict';
  
    angular
        .module('app')
        .service('ValidationServices', ValidationServices);
  
    ValidationServices.$inject = [];
  
    function ValidationServices() {
        var service = this;

        /* GET  TOTAL ANNUAL AMOUNT */

        function TotalAnnaulAmount(Frecuency,amount){
            let result=amount;
            if(Frecuency==2)
            {
                result = result *12;
            }else  if(Frecuency==3)
            {
                result = result *4;
            }else if(Frecuency==4)
            {
                result = result *2;
            }
            return result;
          }
        /* CARD VALIDATIONS */
       
        function ValidateCards(credit,number)
        {
            var RegularExpressions=[
            /*visa*/        /^4[0-9]{12}(?:[0-9]{3})?$/,
            /*mastercard*/  /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
            /*american*/    /^3[47][0-9]{13}$/,
            /*discover*/    /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            /*diner*/       /^3(?:0[0-5]|[68][0-9])[0-9]{11}/
                                    ];

            if (String(number).match(RegularExpressions[credit-1])) {
                return true;
            } 
             return false;
          
        }
         /* VALIDATE DATE CREDIT CARD */
        function ValidateDate(fecha){
            let myDate = new Date(fecha);
            let today = new Date();
            if ( myDate > today ) { 
                return true;
            }
            return false;
        }
                
        service.TotalAnnaulAmount=TotalAnnaulAmount;
        service.ValidateCards=ValidateCards;
        service.ValidateDate=ValidateDate;
  
        return service;
    }
  })();