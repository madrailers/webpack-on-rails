const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')

module.exports = {
  test: /\.(scss|sass|css)$/i,
  use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: env.NODE_ENV === 'production' ,
          modules: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        }
      },
      'postcss-loader',
      'sass-loader'
    ]
  }))
}
