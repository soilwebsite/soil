let fetch = require('node-fetch')

module.exports = (req, res) => {
  return res.send(req.method)

  let email = req.body.email
  let mailChimpID = process.env.REACT_APP_MAILCHIMP_ID
  let apiKey = process.env.REACT_APP_MAILCHIMP_API
  let instance = apiKey.slice(-4)
  let url = `https://${instance}.api.mailchimp.com/3.0/lists/${mailChimpID}/members/`
  let headers = {
    'Authorization': 'Basic ' + new Buffer('any:' + apiKey).toString('base64'),
    'Content-Type': 'application/json'
  }
  let body = {
    "email_address": email,
    "status": "subscribed"
  }

  console.log('subscribe: ' + url);
  fetch(url, { method: 'POST', body, headers })
    .then(res => res.json())
    .then(body => {
      console.log(body);
      // models.User.save({ include: models.Tag }).then(function(data) {
      //   return res.json(data);
      // })

      return body
    });
}
