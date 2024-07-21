const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
      static: './dist',
      hot: true,
      open: true,
    },
    entry: './src/index.js',
    output: {
        filename: '.bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    plugins: [
        // new cleanWebpackPlugin(),
        new htmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        )
    ],
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.html$/i,
          use: 'html-loader',
        },
        {
          test: /\.(svg|png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: 'single',
    },
}