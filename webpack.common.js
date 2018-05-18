'use strict';

const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    filename: '[name].[hash].js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader', 'url-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-2', 'react'],
            plugins: ['transform-react-jsx-source'],
            cacheDirectory: true,
          },
        }
      }
    ]
  }
}