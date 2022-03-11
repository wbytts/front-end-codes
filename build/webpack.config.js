const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      // template: '',
      title: '标题'
    }),
  ],

  devServer: {
    port: 8181,
    open: 'msedge',
  }
};
