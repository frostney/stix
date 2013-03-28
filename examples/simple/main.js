(function() {
  (function($, stix) {
    var content, i, _i;

    content = '';
    for (i = _i = 0; _i <= 10; i = ++_i) {
      content += stix.compile({
        li: function() {
          return {
            span: function() {
              return "This is item " + i;
            }
          };
        }
      })();
    }
    return $('body').prepend(content);
  })(this.jQuery, this.stix);

}).call(this);
