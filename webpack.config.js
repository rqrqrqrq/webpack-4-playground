const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const getFilenameFormat = ext =>
  isProd ? `[name]-[contenthash].${ext}` : `[name].${ext}`;

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
    isProd &&
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
          cacheDirectory: !isProd,
          plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            [
              '@babel/plugin-proposal-object-rest-spread',
              { useBuiltIns: true },
            ],
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                helpers: false,
                polyfill: false,
                regenerator: true,
              },
            ],
            isProd && [
              'transform-react-remove-prop-types',
              {
                removeImport: true,
              },
            ],
            !isProd && 'react-hot-loader/babel',
          ].filter(Boolean),
          presets: [
            [
              '@babel/preset-react',
              {
                development: !isProd,
                useBuiltIns: true,
              },
            ],
            [
              '@babel/preset-env',
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
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
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
        sourceMap: !isProd,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  devtool: !isProd && 'eval-source-map',
  target: 'web',
  mode: isProd ? 'production' : 'development',
};
