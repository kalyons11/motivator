const assert = require('assert'),
      utils = require('../utils')

describe('Config', () => {
  before(() => {
    utils.loadEnv()
  })

  it('Should load all env variables.', () => {
    assert.equal(process.env.TEST_KEY, 'test_value')
    assert(process.env.SLACK_URL)
  })
})

describe('Slack', () => {
  xit('Should send a message without an error.', (done) => { // skipping
    utils.sendMessage('Test message!').then(res => {
      assert(res.success)
      done()
    })
  })
})