var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    './src/js/main.js',
    'babel-polyfill'
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: "source-map",
  plugins: [
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  })
]
}
