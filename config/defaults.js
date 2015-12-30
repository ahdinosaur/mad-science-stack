const join = require('path').join
const env = process.env
const nodeEnv = env.NODE_ENV

module.exports = {
  static: {
    url: {
      port: 5000,
    },
    root: join(__dirname, '..', 'build')
  },
  api: {
    url: {
      port: 5001
    }
  }
}
