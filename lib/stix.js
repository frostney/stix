(function() {
  var _ref;

  (function(root) {
    var fragment;

    fragment = function(template, options) {
      var content, key, value;

      if (options == null) {
        options = {
          compress: root.stix.compress,
          recursive: true
        };
      }
      content = '';
      if (typeof template === 'string') {
        return template;
      } else {
        for (key in template) {
          value = template[key];
          content += "<" + key + ">";
          if (typeof value === 'function') {
            if (!options.compress) {
              content += '\n\t';
            }
            if (options.recursive) {
              content += fragment(value());
            }
          } else {
            content += value;
          }
          content += "</" + key + ">";
          if (!options.compress) {
            content += '\n';
          }
        }
      }
      return content;
    };
    return root.stix = {
      compress: false,
      fragment: fragment,
      compile: function(template) {
        return function() {
          return fragment(template);
        };
      }
    };
  })((_ref = typeof module !== "undefined" && module !== null ? module.exports : void 0) != null ? _ref : this);

}).call(this);
