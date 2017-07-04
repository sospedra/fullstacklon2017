const RESPONSE = 'Mocked React response'

global.React = {
  createElement: function (tag) {
    console.log('#1 Tag has to be [ h1 ] --', tag)
    return RESPONSE
  }
}

global.ReactDOM = {
  render: function (el) {
    console.log('#2 React element has to be [', RESPONSE, '] --', el)
  }
}

global.document = {
  getElementById: function () {}
}

require('./build/app')
