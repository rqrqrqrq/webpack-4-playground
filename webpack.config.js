const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const STATIC_DIR = 'static';
const OUTPUT_DIR = 'dist';
const CLIENT_OUTPUT_DIR = 'client';
const SRC_DIR = 'src';

const isProd = process.env.NODE_ENV === 'production';

const getFilenameFormat = (dir, ext) =>
  `${STATIC_DIR}/${dir}/[name]${isProd ? '-[contenthash:8]' : ''}${ext}`;

module.exports = {
  entry: `./${SRC_DIR}/index.js`,
  output: {
    path: path.resolve(__dirname, `${OUTPUT_DIR}/${CLIENT_OUTPUT_DIR}`),
    filename: getFilenameFormat('js', '.js'),
    chunkFilename: getFilenameFormat('js', '.chunk.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${SRC_DIR}/index.html`,
    }),
    process.env.ANALYZE &&
      new BundleAnalyzerPlugin({
        defaultSizes: 'gzip',
      }),
    isProd &&
      new MiniCssExtractPlugin({
        filename: getFilenameFormat('css', '.css'),
        chunkFilename: getFilenameFormat('css', '.chunk.css'),
      }),
    new ManifestPlugin({
      fileName: '../manifest.json',
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
                  browsers: ['last 2 versions', 'not IE <= 11'],
                },
                modules: false,
                loose: true,
                useBuiltIns: 'usage',
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
      '@': path.resolve(__dirname, SRC_DIR),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: isProd
      ? [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
          }),
          new OptimizeCSSAssetsPlugin({}),
        ]
      : [],
  },
  devtool: !isProd && 'cheap-module-source-map',
  target: 'web',
  mode: isProd ? 'production' : 'development',
};
