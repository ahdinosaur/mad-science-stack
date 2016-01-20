const el = require('vdux/element').default

const component = require('./components/landing')

module.exports = routes

function routes (route) {
  return route('/', (params, state) => {
    return el(component, state)
  })
}
