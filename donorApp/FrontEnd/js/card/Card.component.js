
(function() {
    'use strict';
  
    angular
        .module('app')
        .component('cardComponent', {
            controller: 'CardController as info', 
            templateUrl: 'js/card/card.html'         
        });    
      
  })();
