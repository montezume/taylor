!function(){"use strict";angular.module("taylor",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(t){return e(),t||(t=10),o.slice(0,t)}function e(){o.sort(function(){return.5-Math.random()})}var o=[{quoteText:"I never want to change so much that people can't recognize me.",author:0},{quoteText:"I suffer from girlnextdooritis where the guy is friends with you and that's it.",author:0},{quoteText:"Just be yourself, there is no one better",author:0},{quoteText:"I know my flaws before other people point them out to me",author:0},{quoteText:"You can write a book on how to ruin someone’s perfect day",author:0},{quoteText:"Life is like walking you take one step at a time",author:0},{quoteText:"I'm intimidated by the fear of being average",author:0},{quoteText:"I know I got angels watching me from the other side",author:1},{quoteText:"My greatest pain in life is that I will never be able to see myself perform live.",author:1},{quoteText:"My music isn’t just music — it’s medicine",author:1},{quoteText:"George Bush doesn't care about black people.",author:1},{quoteText:"Nothing in life is promised except death",author:1},{quoteText:"I was never really good at anything except for the ability to learn",author:1},{quoteText:"I still think I am the greatest.",author:1}];this.getQuotes=t}angular.module("taylor").service("quotes",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],e}angular.module("taylor").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,o,n,r){var a,i=t(o[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});o.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),a=e.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){a()})}function o(t,e){function o(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(t){return r.contributors=t,r.contributors})}var r=this;r.contributors=[],o()}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:o,controllerAs:"vm"};return o.$inject=["$log","githubContributor"],n}angular.module("taylor").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,e){function o(o){function r(t){return t.data}function a(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return o||(o=30),e.get(n+"/contributors?per_page="+o).then(r)["catch"](a)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",r={apiHost:n,getContributors:o};return r}angular.module("taylor").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){function t(t){var e=this;e.score=0,e.currentQuestion=0,t.$on("updateScore",function(t,o){e.score+=o.points,e.currentQuestion++})}function e(){return{restrict:"E",scope:{},templateUrl:"app/components/directives/score.html",link:function(){},controller:"ScoreController as scoreCtrl"}}t.$inject=["$scope"],angular.module("taylor").controller("ScoreController",t).directive("score",e)}(),function(){function t(t){var e=this;e.quote=t.quote,e.title=t.title,t.$on("nextQuote",function(t,o){e.quote=o.quote})}function e(){return{restrict:"E",scope:{quote:"=",title:"="},templateUrl:"app/components/directives/quote.html",link:function(){},controller:"QuoteController as quoteCtrl"}}t.$inject=["$scope"],angular.module("taylor").controller("QuoteController",t).directive("displayQuote",e)}(),function(){"use strict";function t(t,e,o,n){function r(){s.quotes=e.getQuotes()}function a(e){s.message=1==e?"Nice guess!":"Wrong, sorry.",t.$broadcast("updateScore",{points:e})}function i(){s.quotes.splice(0,1),s.quote=s.quotes[0],t.$broadcast("nextQuote",{quote:s.quote}),0==s.quotes.length&&(s.showButtons=!1,s.message="Game Over - refresh to play again.")}var s=this;s.appConfig=o,s.gameLength=o.GAME_LENGTH,s.quotePosition,s.showButtons=!0,s.message="",s.answering=!1,s.numQuestions=10,s.select=function(t){if(s.showButtons){s.showButtons=!1;var e=s.quote.author==t?1:0;a(e),n(function(){i(),s.quotes.length>0&&(s.showButtons=!0)},2e3)}},r(s.numQuestions),s.quote=s.quotes[0]}angular.module("taylor").controller("MainController",t),t.$inject=["$scope","quotes","AppConfig","$timeout"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("taylor").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController as mainCtrl",controllerAs:"main"}),e.otherwise("/")}angular.module("taylor").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("taylor").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}angular.module("taylor").constant("AppConfig",{KANYE:1,TAYLOR:0,GAME_LENGTH:5}).config(t),t.$inject=["$logProvider","toastrConfig"]}(),angular.module("taylor").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="main-backdrop"><div class="main-image-container"><div class="inside"><display-quote ng-show="mainCtrl.showButtons" title="\'Taylor or Kanye?\'" quote="mainCtrl.quote"></display-quote><div class="col-sm-6 col-sm-offset-3"><div ng-if="mainCtrl.showButtons"><div class="half"><button ng-click="mainCtrl.select(mainCtrl.appConfig.TAYLOR)" class="btn awesome-button block-center" type="button">Taylor</button></div><div class="half"><button ng-click="mainCtrl.select(mainCtrl.appConfig.KANYE)" class="btn awesome-button block-center" type="button">Kanye</button></div></div><div ng-if="!mainCtrl.showButtons"><h1 class="text-center" ng-bind="mainCtrl.message"></h1></div></div></div></div><figure class="taylor"></figure><figure class="kanye"></figure><score></score></div>'),t.put("app/components/directives/quote.html",'<div><h1 class="text-center" ng-bind="quoteCtrl.title"></h1><h1 class="quote text-center margin top"><span class="card" ng-bind="quoteCtrl.quote.quoteText"></span></h1></div>'),t.put("app/components/directives/results.html",""),t.put("app/components/directives/score.html",'<span class="score">{{ scoreCtrl.score }} / {{ scoreCtrl.currentQuestion}}</span>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-8e6e19aa6a.js.map
