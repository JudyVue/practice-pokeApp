const merge = require('webpack-merge');
const common = require('./webpack.common');

//recompiles code after a change without a manual browser refresh
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: `${__dirname}/dist`, // determines where to serve files from 
    hot: true, // enables webpack's hot module replacement feature
    historyApiFallback: true, // serves index.html in place of 404 responses
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      },
    ],
  },
});