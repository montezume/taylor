(function() {

    // @ngInject
    function scoreController($scope) {

        var vm = this;
        vm.score = 0;
        vm.currentQuestion = 0;

        // when score is updated in main controller, listen for it here
        $scope.$on('updateScore', function (event, data) {
            vm.score += data.points;
            vm.currentQuestion ++;
        });
    }

    // @ngInject
    function score() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/directives/score.html',
            link: function () {},
            controller: 'ScoreController as scoreCtrl'
        }
    }
    angular.module('taylor')
        .controller('ScoreController', scoreController)
        .directive('score', score);
})();