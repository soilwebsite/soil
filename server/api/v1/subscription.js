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
      timestamp_signup: `${Date.now()}`
    })

  if(!email) throw new Error('No email given')
  console.log(`subscribing ${email}...`)

  return fetch(url, { method, body, headers })
    .then(response => {
      console.log(response.status, response.statusText)
      return response.text()
    })
    .then(data => {
      data = JSON.parse(data)
      if(data.status === 200) {
        console.log('Subscribed ' + JSON.parse(data).email_address)
        return data
      } else {
        console.error('MailChimp:', data)
        return res.status(data.status || 500).json(data)
      }
    })
}
