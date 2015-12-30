const routes = require('./routes')

module.exports = App

function App (state) {
  return routes(
    state.url || '/',
    state
  )
} 
