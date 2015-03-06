
/**
 * Cookie.
 */

var cookie = document.cookie;

/**
 * Enable enables cookies.
 */

exports.enable = function(){
  document.cookie = cookie;
};

/**
 * Disable disables cookies.
 */

exports.disable = function(){
  if (document.__defineSetter__) {
    document.__defineSetter__('cookie', noop);
  } else if (Object.defineProperty) {
    Object.defineProperty(document, 'cookie', { get: noop });
  } else {
    console.warn && console.warn('cant disable cookie');
  }
};

/**
 * Noop.
 */

function noop(){}