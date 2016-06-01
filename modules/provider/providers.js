var Provider = require('../model/provider.js')
var Aramex = require('./aramex/aramex.js')
var Naqel = require('./naqel/naqel.js')

var getProvider = function (name) {
    switch (name.toLowerCase()) {
    case 'aramex':
        return new Provider(Aramex.track);
    case 'naqel':
        return new Provider(Naqel.track);
    }
}

module.exports = {
    getProvider: getProvider
}
