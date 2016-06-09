var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var childProcess = require('child_process');
var fs = require('fs');

// Récupération du hash court du dernier commit
var VERSION = childProcess.execSync('git rev-parse --short HEAD').toString();
fs.writeFileSync('version.json', JSON.stringify({version: VERSION}));

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
    path: __dirname+'/dist',
    filename: "bundle.js"
  },
  devtool: "source-map",
  plugins: [
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  }),
  new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    })
]
}
