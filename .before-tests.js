require('babel-register')({})
require('babel-polyfill')
require('chai').should()

function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.svg'] = noop;
