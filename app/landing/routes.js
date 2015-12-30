const el = require('virtex-element').default
const createRouter = require('wayfarer')

const component = require('./components/landing')

const router = createRouter('/')

router.on('/', function (params, props) {
  return el(component, props)
})

module.exports = router
