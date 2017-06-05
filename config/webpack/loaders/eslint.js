module.exports = {
  enforce: 'pre',
  test: /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    cache: false,
    failOnWarning: true,
    configFile: '.eslintrc.json'
  }
}

