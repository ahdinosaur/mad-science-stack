const el = require('vdux/element').default
const createRouter = require('wayfarer')

const component = require('./components/todos')

const router = createRouter('/')

router.on('/', function (params, props) {
  return el(component, props)
})

module.exports = router
