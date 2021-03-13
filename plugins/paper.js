const paper = require('paper')

export default ({ app }, inject) => {
  inject('paper', paper)
  // console.log('paper.js plugin loaded. Injected @ this.$paper', paper)
}
