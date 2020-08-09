const path = require('path'); // eslint-disable-line import/no-extraneous-dependencies
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';


const config = {
  entry: './src/index.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
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
    extensions: ['.js', '.jsx', '.json'],
    symlinks: false,
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
    new CompressionPlugin(),
  ],
};


if (isDevelopment) {
  config.module.rules.push({
    enforce: 'pre',
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      configFile: './.eslintrc.json',
    },
  });

  config.devServer = {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    compress: true,
  };

  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  config.plugins.push(new StylelintPlugin({
    configFile: './.stylelintrc.json',
    files: '**/*.js',
  }));
}


module.exports = config;
