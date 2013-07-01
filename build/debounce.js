// Generated by CoffeeScript 1.6.3
Ember.debounce = function(func, wait) {
  var timeout;
  timeout = {};
  return function() {
    var args, context, immediate, lastArg, later;
    context = this;
    args = arguments;
    lastArg = args[args.length - 1];
    if (lastArg && lastArg.now) {
      immediate = true;
    }
    later = function() {
      timeout[context] = null;
      return func.apply(context, args);
    };
    clearTimeout(timeout[context]);
    if (immediate) {
      return func.apply(context, args);
    } else {
      return timeout[context] = setTimeout(later, wait);
    }
  };
};