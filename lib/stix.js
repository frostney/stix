(function() {
  var _ref;

  (function(root) {
    return root.sticks = function(template, options) {
      var content, key, value;

      if (options == null) {
        options = {
          compress: false
        };
      }
      content = '';
      for (key in template) {
        value = template[key];
        content += "<" + key + ">";
        if (typeof value === 'function') {
          if (!options.compress) {
            content += '\n\t';
          }
          content += sticks(value());
        } else {
          content += value;
        }
        content += "</" + key + ">";
        if (!options.compress) {
          content += '\n';
        }
      }
      return content;
    };
  })((_ref = typeof module !== "undefined" && module !== null ? module.exports : void 0) != null ? _ref : this);

}).call(this);
