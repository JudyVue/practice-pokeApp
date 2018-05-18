'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common');
// This plugin will cause the relative path of the module to be displayed when HMR is enabled. Suggested for use in development.
const { NamedModulesPlugin } = require('webpack');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlExcludeEmptyAssets = require('html-webpack-exclude-empty-assets-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebPackPlugin(['dist']),
    new MiniCssExtractPlugin({ filename: 'styles.[hash].css'}),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});