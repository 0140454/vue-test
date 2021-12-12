var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.package.config')
var MiniCssExtractPlugin = require('extract-css-chunks-webpack-plugin')
var path = require('path')

module.exports = merge(baseWebpackConfig, {
  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hot: true,
                  reloadAll: true,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[path][name]__[local]',
                  },
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    config: path.resolve(__dirname, '../postcss.config.js'),
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  implementation: require('sass'),
                },
              },
            ],
          },
          {
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hot: true,
                  reloadAll: true,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    config: path.resolve(__dirname, '../postcss.config.js'),
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  implementation: require('sass'),
                },
              },
            ],
          },
        ],
      },
    ],
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    https: true,
    overlay: true,
    hot: true,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/' },
      ],
    },
  },
})
