'use strict'

const GrqphQLRequest = require('grqphal-request')

const githubHost = 'https://api.github.com/graphql'
const query = `
`

module.exports.hello = async event => {
  const response = await GrqphQLRequest.request(githubHost, query)

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
