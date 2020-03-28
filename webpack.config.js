const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const webpack = require('webpack');


module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [{
        // test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        // use: {
        //   loader: 'babel-loader',
        // }
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
        use: [{
          loader: 'html-loader'
        }]
      },
      // {
      //   test: require.resolve('jquery'),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: 'jQuery'
      //   }, {
      //     loader: 'expose-loader',
      //     options: '$'
      //   }]
      // },
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
  // devtool: 'inline-source-map',
  devServer: {
    writeToDisk: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    // new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
};
