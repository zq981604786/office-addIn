var fs = require('fs')
var path = require('path')
var homedir = require('os').homedir()

module.exports = {
  devServer: {
    port: 3000,
    https: true,
    key: fs.readFileSync(path.resolve(`${homedir}/.office-addin-dev-certs/localhost.key`)),
    cert: fs.readFileSync(path.resolve(`${homedir}/.office-addin-dev-certs/localhost.crt`)),
    ca: fs.readFileSync(path.resolve(`${homedir}/.office-addin-dev-certs/ca.crt`)),
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
