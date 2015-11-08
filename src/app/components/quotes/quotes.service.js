(function() {
  'use strict';

  angular
      .module('taylor')
      .service('quotes', quotes);

  /** @ngInject */
  function quotes() {
    var data = [
      {
        'quoteText': 'I never want to change so much that people can\'t recognize me.',
        'author': 0
        },
       {
        'quoteText': 'I know I got angels watching me from the other side',
        'author': 1
      }  
    ];

    this.getQuotes = getQuotes;

    function getQuotes() {
      return data;
    }
  }

})();
