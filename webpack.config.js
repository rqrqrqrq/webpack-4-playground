const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const IS_PROD = process.env.NODE_ENV === 'production';

const getFilenameFormat = ext =>
  IS_PROD ? `[name]-[contenthash].${ext}` : `[name].${ext}`;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: getFilenameFormat('js'),
    chunkFilename: getFilenameFormat('js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    process.env.ANALYZE &&
      new BundleAnalyzerPlugin({
        defaultSizes: 'gzip',
      }),
    IS_PROD &&
      new MiniCssExtractPlugin({
        filename: getFilenameFormat('css'),
      }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
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
        use: [IS_PROD && MiniCssExtractPlugin.loader, 'css-loader'].filter(
          Boolean,
        ),
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
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: !IS_PROD,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  devtool: !IS_PROD && 'eval-source-map',
  target: 'web',
  mode: IS_PROD ? 'production' : 'development',
};
