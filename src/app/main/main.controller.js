(function() {
  'use strict';

  angular
    .module('taylor')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(quotes) {
    var vm = this;

    
    function getQuotes() {
      vm.quotes = quotes.getQuotes();

      angular.forEach(vm.quotes, function(quote) {
        quote.rank = Math.random();
      });
    }

    getQuotes();

    vm.quoteText = vm.quotes[0];
  }
})();
