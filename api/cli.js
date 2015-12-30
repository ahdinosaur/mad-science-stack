require('babel-register')

const config = require('config/cli')(process.argv, 'api')
const createApi = require('./')

const server = createApi(config.api)

server.listen(config.api.url.port)
