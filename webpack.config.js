const path = require('path');
// const extractTextPlugin = require("extract-text-webpack-plugin");
// const extractSass = new extractTextPlugin({
//   filename: "[name].[contenthash].css",
//   disable: process.env.NODE_ENV === "development"
// });

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      //純css
      // {
      //   use:['style-loader','css-loader'],
      //   test: /\.css$/
      // },
      //scss
      {
        use: ['style-loader','css-loader','sass-loader'],
        test: /\.(scss|sass)$/,
      },
    ]
  }
}