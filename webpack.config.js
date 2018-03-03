'use strict';

const env = process.env.NODE_ENV || 'development';

const path = require('path');

const isProduction = env === 'production';

const PATHS = {
  root: path.join(__dirname, ''),
  example: path.join(__dirname, 'example')
};

const config = {
  mode: env,
  entry: {
    'dist/react-star-rating-component': './index.jsx',
    'example/bundle': `${PATHS.example}/index.jsx`
  },

  output: {
    path: PATHS.root,
    filename: `[name]${isProduction ? '.min' : ''}.js`,
    library: 'ReactStarRatingComponent',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      }
    ]
  },
  devtool: isProduction
    ? 'cheap-module-source-map'
    : 'cheap-module-eval-source-map'
};


module.exports = config;
