const el = require('vdux/element').default

module.exports = {
  render
}

function render ({ props }) {
  return el('div', [
    el('h1', {
      textContent: 'TodoMVC'
    },
    el('div', props.children))
  ])
}
