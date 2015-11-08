(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('taylor'));
    beforeEach(inject(function(_$controller_, _quotes_) {
      spyOn(_quotes_, 'getQuotes').and.returnValue([{}, {}]);

      vm = _$controller_('MainController');
    }));

    it('should define more than 2 awesome quotes', function() {
      expect(angular.isArray(vm.quotes)).toBeTruthy();
      expect(vm.quotes.length === 2).toBeTruthy();
    });
  });
})();
