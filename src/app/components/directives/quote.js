(function() {

    // @ngInject
    function quoteController($scope) {

        var vm = this;
        vm.quote = $scope.quote;

        // when quote is updated in main controller, listen for it here
        $scope.$on('nextQuote', function (event, data) {
            vm.quote = data.quote;
        });
    }

    // @ngInject
    function quote() {
        return {
            restrict: 'E',
            scope: {
                quote: '='
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