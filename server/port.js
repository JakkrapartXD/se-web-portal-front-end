const argv = require('./argv');

module.exports = parseInt(argv.port || process.env.PORT || '80', 10);

// port 8801 for deploy

// module.exports = parseInt(argv.port || process.env.PORT || '3000', 10);
