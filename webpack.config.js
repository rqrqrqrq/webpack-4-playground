module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
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
              },
            ],
          ],
        },
      },
    ],
  },
  target: 'web',
};
