var path = require("path");

module.exports = {
  entry: {
    app: ["./src/js/main.js"]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  }
}
