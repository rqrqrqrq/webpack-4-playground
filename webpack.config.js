const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    process.env.ANALYZE && new BundleAnalyzerPlugin(),
    process.env.NODE_ENV === 'production' &&
      new MiniCssExtractPlugin({
        filename: '[name]-[hash].css',
      }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
            '@babel/plugin-syntax-dynamic-import',
            'react-hot-loader/babel',
          ],
          presets: [
            '@babel/react',
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
                modules: false,
                loose: true,
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use:
          process.env.NODE_ENV === 'production'
            ? [MiniCssExtractPlugin.loader, 'css-loader']
            : ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: process.env.NODE_ENV !== 'production' && 'eval-source-map',
  target: 'web',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
