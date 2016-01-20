const thunk = require('redux-thunk')

if (process.env.NODE_ENV === 'development') {
  var logger = require('redux-logger')
}

let middleware = [ thunk ]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger())
}

module.exports = middleware
