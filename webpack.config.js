const path = require('path');

module.exports = {
  entry: './src',
  mode: 'development',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  "devServer": {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}