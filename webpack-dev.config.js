module.exports = require('./webpack.config-helper')({
  isProduction: false,
  devtool: 'cheap-eval-source-map',
  port: process.env.PORT,
  host: process.env.IP,
  https:true
});