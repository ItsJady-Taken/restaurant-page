const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
      static: './dist',
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        )
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(svg|png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ],
    },
}