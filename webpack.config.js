const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const packageInfo = require('./package.json');

const _IS_DEVELOPMENT_ = process.env.NODE_ENV !== 'production'; // eslint-disable-line no-underscore-dangle


const config = {
  entry: path.join(__dirname, 'src', 'index.jsx'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
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
        include: path.join(__dirname, 'src', 'assets'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[contenthash:8].[ext]',
            outputPath: 'img',
          },
        }],
      },
    ],
  },

  resolve: {
    alias: {
      assets: path.join(__dirname, 'src', 'assets'),
      components: path.join(__dirname, 'src', 'components'),
      lib: path.join(__dirname, 'src', 'lib'),
      pages: path.join(__dirname, 'src', 'pages'),
      store: path.join(__dirname, 'src', 'store'),
    },
    extensions: ['.js', '.jsx', '.json'],
    symlinks: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-base',
      meta: {
        description: packageInfo.description,
        author: packageInfo.author,
        keywords: packageInfo.keywords.join(', '),
        noCache1: { 'http-equiv': 'Cache-Control', content: 'no-cache' },
        noCache2: { 'http-equiv': 'Pragma', content: 'no-cache' },
        noCache3: { 'http-equiv': 'Expires', content: '0' },
      },
      favicon: path.join(__dirname, 'src', 'assets', 'favicon.ico'),
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
    new webpack.DefinePlugin({ _IS_DEVELOPMENT_ }),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },
};


if (_IS_DEVELOPMENT_) {
  config.module.rules.push({
    enforce: 'pre',
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      configFile: '.eslintrc.json',
    },
  });

  config.devServer = {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    compress: true,
  };

  config.devtool = 'eval-source-map';

  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  config.plugins.push(new StylelintPlugin({
    configFile: '.stylelintrc.json',
    files: '**/*.js',
  }));
}


module.exports = config;
