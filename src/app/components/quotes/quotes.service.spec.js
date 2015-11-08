(function() {
  'use strict';

  describe('service quotes', function() {
    var quotes;

    beforeEach(module('taylor'));
    beforeEach(inject(function(_quotes_) {
      quotes = _quotes_;
    }));

    it('should be registered', function() {
      expect(quotes).not.toEqual(null);
    });

    describe('getQuotes function', function() {
      it('should exist', function() {
        expect(quotes.getQuotes).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = quotes.getQuotes();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 1).toBeTruthy();
      });
    });
  });
})();
