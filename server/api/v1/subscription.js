let fetch = require('node-fetch')

module.exports = (req, res) => {
  let email = req.body.email
    , mailChimpID = process.env.REACT_APP_MAILCHIMP_ID
    , apiKey = process.env.REACT_APP_MAILCHIMP_API
    , instance = apiKey.slice(-4)
    , url = `https://${instance}.api.mailchimp.com/3.0/lists/${mailChimpID}/members`
    , method = 'POST'
    , encryptedAPIKey = new Buffer('any:' + apiKey).toString('base64')
    , headers = {
      'Authorization': 'Basic ' + encryptedAPIKey,
      'Content-Type': 'application/json'
    }
    , body = JSON.stringify({
      email_address: email,
      status: 'subscribed',
      email_type: 'html',
      timestamp_signup: Date.now()
    })

  if(!email) throw new Error('No email given')
  console.log('subscribing...: ' + url)

  return fetch(url, { method, body, headers })
    .then(res => {
      console.log(res.status)
      console.log(res.statusText)
      return res.text()
    })
    .then(body => {
      let b = JSON.parse(body)
      if(!b.status != 200) { throw new Error(body) }
      console.log('Subscribed ' + JSON.parse(body).email_address)
      return body
    })
    .catch(err => console.error('MailChimp - ', err))
}
