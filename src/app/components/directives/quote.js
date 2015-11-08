(function() {

    // @ngInject
    function quoteController($scope) {

        var vm = this;
        vm.quoteText = $scope.quoteText.quoteText;
    }

    // @ngInject
    function quote() {
        return {
            restrict: 'E',
            scope: {
                quoteText: '='
            },
            templateUrl: 'app/components/directives/quote.html',
            link: function () {
            },
            controller: 'QuoteController as quoteCtrl'
        }
    }
    angular.module('taylor')
        .controller('QuoteController', quoteController)
        .directive('displayQuote', quote);
})();