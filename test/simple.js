(function() {
  var chai, stix;

  chai = require('chai');

  chai.should();

  stix = require('../lib/stix').stix;

  describe('stix', function() {
    return describe('.compile', function() {
      return it('Simple template', function() {
        var template;

        stix.compress = true;
        template = stix.compile({
          div: function() {
            return {
              span: function() {
                return "Sample text";
              }
            };
          }
        });
        return template().should.equal('<div><span>Sample text</span></div>');
      });
    });
  });

}).call(this);
