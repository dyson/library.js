/*! library.js v0.0.3 | MIT License | dysonsimmons.com/library.js */

(function (window, undefined) {

  var document = window.document,
      L = function(elements) {
        return new Library(elements);
      },
      Library = function(elements) {
        this.length = elements.length;
        if (elements.length === undefined) { // only have one element
          this.length = 1;
          this[0] = elements;
        } else { // we have a collection of elements
          for (var i = 0; i < this.length; i++) {
            this[i] = elements[i];
          }
        }
        return this;
      };

  L.fn = Library.prototype = {
    ready: function(fn) {
      if (document.readyState != 'loading'){
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    },
    each: function(fn) {
      for (var i = 0; i < this.length; i++) {
        fn.call(this[i], i, this[i]);
      }
      return this;
    }
  };

  if(! window.L) {
    window.L = L;
  }

})(window);

