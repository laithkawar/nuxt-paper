// Docs https://github.com/rosshettel/the-noun-project
// API Explorer https://api.thenounproject.com/explorer

const NounProject = require('the-noun-project')

// From: https://thenounproject.com/developers/apps/105311b747b34a4ea1bc10bc9ae8c258/
const nounProject = new NounProject({
  key: '105311b747b34a4ea1bc10bc9ae8c258',
  secret: 'd66ce3820613479c8d767f8d7fe0f7ba',
})

exports.handler = function (event, context, callback) {
  const term = event.queryStringParameters.term

  if (!term) {
    callback(null, {
      statusCode: 403,
      body: JSON.stringify({
        error: true,
        message: 'You need to enter a term to search the NP.',
      }),
    })
  }

  nounProject.getIconsByTerm(
    term,
    { limit: 50, limit_to_public_domain: true },
    function (err, data) {
      if (!err) {
        // successful return
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(data.icons),
        })
      } else {
        console.error('Got error from NP.' + err)
        // error, so we return 404 relaying the msg from NP.
        callback(null, {
          statusCode: 404,
          body: JSON.stringify({
            error: true,
            message: err,
          }),
        })
      }
    }
  )
}
