'use strict'

module.exports = async url => `https://www.google.com/s2/favicons?domain_url=${url}`

module.exports.supported = {
  email: false,
  username: false,
  domain: true
}
