const vdux = require('vdux/dom').default

const reducer = require('app/reducer')
const middleware = require('app/middleware')
const app = require('app')

vdux({
  reducer,
  middleware,
  initialState: window.__state,
  app,
  node: document.querySelector('main')
})
