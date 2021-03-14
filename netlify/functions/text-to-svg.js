const TextToSVG = require('text-to-svg')

const textToSVG = TextToSVG.loadSync('netlify/fonts/Redressed-Regular.ttf')

exports.handler = function (event, context, callback) {
  const text = event.queryStringParameters.text || 'Test Co'

  const attributes = { fill: 'red', stroke: null }
  const options = {
    x: 0,
    y: 0,
    fontSize: 72,
    anchor: 'top',
    attributes: attributes,
  }

  const svg = textToSVG.getSVG(text, options)

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
    },
    body: svg,
  })
}
