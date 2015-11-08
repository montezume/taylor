(function() {
  'use strict';

  angular
    .module('taylor')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, quotes, AppConfig) {
    var vm = this;
    vm.appConfig = AppConfig;
    vm.gameLength = AppConfig.GAME_LENGTH;
    vm.currentScore = 0;
    vm.quotePosition;
    vm.showButtons = true;
    vm.message = '';

    vm.select = function(index) {

        if (vm.quote.author == index) {
            console.log('win');
            vm.currentScore ++;
        } else {
            console.log('lose');
        }
        nextQuote();
    }
    
    function getQuotes() {
        vm.quotes = quotes.getQuotes();
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function nextQuote() {
        // remove used quote from array.

        vm.quotes.splice(vm.quotePosition, 1);
        vm.quotePosition = getRandomInt(0, vm.quotes.length);
        vm.quote = vm.quotes[vm.quotePosition];
        $scope.$broadcast('nextQuote', { 'quote': vm.quote });
        
        if (vm.quotes.length == 0) {
            vm.showButtons = false;
            vm.message = 'game over';
        }
    }

    getQuotes();
    vm.quotePosition = getRandomInt(0, vm.quotes.length);
    vm.quote = vm.quotes[vm.quotePosition];
  }
})();
