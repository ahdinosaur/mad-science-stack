const el = require('vdux/element').default

const component = require('./component')

module.exports = routes

function routes (route) {
  return route('/404', (params, state) => {
    return el(component, state)
  })
}
