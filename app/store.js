const { createStore, compose, applyMiddleware } = require('redux')
const thunk = require('redux-thunk')
const { createHistory } = require('history')

if (process.env.NODE_ENV === 'development') {
  var logger = require('redux-logger')
}

const reducer = require('app/reducer')

let appMiddleware = [ thunk ]

if (process.env.NODE_ENV === 'development') {
  appMiddleware.push(logger())
}

function finalCreateStore(client, initialState) {
  const appStore = client.apply(null, appMiddleware)
  const store = appStore(reducer, initialState)

  if (module.hot) {
    module.hot.accept('app/reducer', () => {
      store.replaceReducer(require('app/reducer'))
    })
  }

  return store
}

module.exports = finalCreateStore
