var random = require('./random.js');
var convert = require('./convertDollars.js');

exports.findBalance = function() {
    var randomBalance = random.randomNumber(100, 999999);
    var balance = convert.convert(randomBalance);

    return ("Account Balance: \n" + balance + '\n');
};
