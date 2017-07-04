const proxyquire = require('proxyquire')

const RESPONSE = 'Mocked React response'
const React = {
  createElement: function (tag) {
    console.log('#1 Tag has to be [ h1 ] --', tag)
    return RESPONSE
  }
}
const ReactDOM = {
  render: function (el) {
    console.log('#2 React element has to be [', RESPONSE, '] --', el)
  }
}

global.document = {
  getElementById: function () {}
}

// Cannot test webpack bundle files because all the deps are already there,
// hence they're not mockable
proxyquire('./app', {
  'react': React,
  'react-dom': ReactDOM
})
