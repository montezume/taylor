(function() {
  'use strict';

  angular
    .module('taylor')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, quotes, AppConfig, $timeout) {
    var vm = this;
    vm.appConfig = AppConfig;
    vm.gameLength = AppConfig.GAME_LENGTH;
    vm.quotePosition;
    vm.showButtons = true;
    vm.message = '';
    vm.answering = false;
    vm.numQuestions = 10;

    vm.select = function(index) {

        if (!vm.showButtons) return;

        vm.showButtons = false;
        var points = vm.quote.author == index ? 1 : 0;
        updateScore(points);

        $timeout(function() {
            nextQuote();
            if (vm.quotes.length > 0) {
                vm.showButtons = true;
            }
        }, 2000);
    }
    
    function getQuotes() {
        vm.quotes = quotes.getQuotes();
    }

    function updateScore(points) {
        vm.message = (points == 1) ? 'Nice guess!' : 'Wrong, sorry.';
        $scope.$broadcast('updateScore', { 'points' : points });
    }

    function nextQuote() {
        // remove used quote from array.
        vm.quotes.splice(0, 1);
        vm.quote = vm.quotes[0];
        $scope.$broadcast('nextQuote', { 'quote': vm.quote });
        
        if (vm.quotes.length == 0) {
            vm.showButtons = false;
            vm.message = 'Game Over - refresh to play again.';
        }
    }
    // get 10 quotes.
    getQuotes(vm.numQuestions);
    vm.quote = vm.quotes[0];
  }
})();
