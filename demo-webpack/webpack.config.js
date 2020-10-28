/* eslint-env node */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    leaflet: './main.js'
  },
  output: {
    publicPath: ''
  },
  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};
