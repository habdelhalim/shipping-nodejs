var Aramex = require('./aramex/aramex.js')

var getProvider = function(name) {
  switch(name.toLowerCase()) {
    case 'aramex': 
      return Aramex;
  }
}

module.exports = { getProvider: getProvider }
