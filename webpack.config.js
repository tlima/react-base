const path = require('path'); // eslint-disable-line import/no-extraneous-dependencies
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[hash:base64:8].[ext]',
            outputPath: 'img',
          },
        }],
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      store: path.resolve(__dirname, 'src/store'),
    },
    extensions: ['.js', '.jsx', '.css', '.json'],
    symlinks: false,
  },
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true,
    compress: true,
  },
  devtool: isDevelopment ? 'source-map' : false,
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-base',
      meta: { description: 'React boilerplate for modern web projects.' },
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin(),
  ],
};
