const feathers = require('feathers')
const R = require('ramda')

const services = require('app/services')

module.exports = createServices

function createServices(config) {
  const app = feathers()

  useAll(app, services)

  return app
}

function useAll (app, services) {
  return R.reduce((app, pair) => {
    const name = pair[0]
    const service = pair[1]
    return app.use(`/${name}`, service)
  }, app, R.toPairs(services))
}

