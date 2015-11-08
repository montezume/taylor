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
        'quoteText': 'I suffer from girlnextdooritis where the guy is friends with you and that\'s it.',
        'author': 0
      },
      {
        'quoteText': 'Just be yourself, there is no one better',
        'author': 0
      },
      {
        'quoteText': 'I know my flaws before other people point them out to me',
        'author': 0
      },
      {
        'quoteText': 'I know I got angels watching me from the other side',
        'author': 1
      },
      {
        'quoteText': 'My greatest pain in life is that I will never be able to see myself perform live.',
        'author': 1
      },
      {
        'quoteText': 'My music isn’t just music — it’s medicine',
        'author': 1
      },
      {
        'quoteText': 'George Bush doesn\'t care about black people.',
        'author': 1
      }
    ];

    this.getQuotes = getQuotes;

    function getQuotes() {
      return data;
    }
  }

})();
