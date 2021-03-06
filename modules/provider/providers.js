var Provider = require('../model/provider.js')
var Aramex = require('./aramex/aramex.js')
var Naqel = require('./naqel/naqel.js')
var Smsa = require('./smsa/smsa.js')
var PostaPlus = require('./postaplus/postaplus.js')

var getProvider = function(name) {
    switch (name.toLowerCase()) {
        case 'aramex':
            return new Provider(Aramex.track);
        case 'naqel':
            return new Provider(Naqel.track);
        case 'smsa':
            return new Provider(Smsa.track);
        case 'postaplus':
            return new Provider(PostaPlus.track);
    }
}

module.exports = {
    getProvider: getProvider
}
