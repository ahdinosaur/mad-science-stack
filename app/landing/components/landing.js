var el = require('virtex-element').default

module.exports = {
  render
}

function render ({ props }) {
  return el('div', {
    textContent: "landing!"
  })
}
