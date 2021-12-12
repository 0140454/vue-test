const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('extract-css-chunks-webpack-plugin')

module.exports = {
  entry: {
    'vue-test': './src/main.ts',
  },
  output: {
    publicPath: '/',
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true,
        },
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  chrome: '68',
                  firefox: '61',
                  safari: '10',
                  ie: '10',
                  edge: '15',
                },
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3,
              },
            ],
          ],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              fallback: 'file-loader',
              name: '[hash].[ext]',
              outputPath: 'style/assets',
              publicPath: (url, resourcePath, context) => {
                return 'assets/' + url
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['vue-test'],
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      publicPath: '/',
      filename: 'style/[name].css',
    }),
  ],
}
