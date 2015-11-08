(function() {
  'use strict';

  angular
    .module('taylor')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, quotes, AppConfig) {
    var vm = this;
    vm.appConfig = AppConfig;
    vm.currentScore = 0;

    vm.select = function(index) {
        if (vm.quote.author == index) {
            console.log('win');
        } else {
            console.log('lose');
        }
        nextQuote();
        console.log(vm.quote);
    }
    
    function getQuotes() {
        vm.quotes = quotes.getQuotes();
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function nextQuote() {
        // remove used quote from array
        vm.quotes.slice(position, 1);
        var nextPosition = getRandomInt(0, vm.quotes.length);
        vm.quote = vm.quotes[nextPosition];
        
        $scope.$broadcast('nextQuote', { 'quote': vm.quote });
    }

    getQuotes();
    var position = getRandomInt(0, vm.quotes.length);

    vm.quote = vm.quotes[position];
  }
})();
