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
        'quoteText': 'You can write a book on how to ruin someone’s perfect day',
        'author': 0
      },
      {
        'quoteText': 'Life is like walking you take one step at a time',
        'author': 0
      },
      {
        'quoteText': 'I\'m intimidated by the fear of being average',
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
      },
      {
        'quoteText': 'Nothing in life is promised except death',
        'author': 1
      },
      {
        'quoteText': 'I was never really good at anything except for the ability to learn',
        'author': 1
      },
      {
        'quoteText': 'I still think I am the greatest.',
        'author': 1
      }
    ];

    this.getQuotes = getQuotes;

    function getQuotes(num) {
        shuffle();
        if (!num) {
            num = 10;
        }
        return data.slice(0, num);
    }

    function shuffle() {
        data.sort(function() { return 0.5 - Math.random() });
    }

  }

})();
