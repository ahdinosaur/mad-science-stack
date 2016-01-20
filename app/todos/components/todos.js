var el = require('vdux/element').default

module.exports = {
  render
}

function render ({ props }) {
  return h('div', {
    textContent: "todos!"
  })
}
