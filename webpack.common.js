const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/components/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      },
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {loader: 'html-loader'}
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
            publicPath: 'assets/',
          },
        }, ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      inlineSource: '.(js|css)$',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      }

      /* 
      |   TODO: Implement a more elegant solution to remove the main.css and main.js file.
      */

    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
};
