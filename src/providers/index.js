const {
  always, cond, equals, T,
} = require('ramda')
const bradesco = require('./bradesco')
const development = require('./development')
const boletoApiBradescoShopfacil = require('./boleto-api-bradesco-shopfacil')
const { NotFoundError } = require('../lib/errors/index')

const findProvider = cond([
  [equals('bradesco'), always(bradesco)],
  [equals('development'), always(development)],
  [equals('boleto-api-bradesco-shopfacil'), always(boletoApiBradescoShopfacil)],
  [T, () => {
    throw new NotFoundError({
      message: 'Provider not found',
    })
  }],
])

module.exports = {
  findProvider,
}
