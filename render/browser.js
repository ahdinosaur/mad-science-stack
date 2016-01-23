const vdux = require('vdux/dom').default
const h = require('vdux/element').default

const reducer = require('app/reducer')
const middleware = require('app/middleware')

vdux({
  reducer,
  middleware,
  initialState: window.__state,
  app: (state) => h(require('app'), state),
  node: document.querySelector('main')
})
