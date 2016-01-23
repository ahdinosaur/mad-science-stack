var h = require('vdux/element').default

module.exports = {
  render
}

function render ({ props }) {
  return h('div', {
    textContent: "todos!"
  })
}
