const env = process.env.NODE_ENV || 'development';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const isProduction = env === 'production';

const PATHS = {
  root: path.join(__dirname, ''),
  example: path.join(__dirname, 'example')
};

const pluginsList = [];

const config = {
  mode: env,
  entry: {
    'dist/react-star-rating-component': './index.jsx',
    'example/bundle': `${PATHS.example}/index.jsx`
  },

  output: {
    path: PATHS.root,
    filename: `[name]${isProduction ? '.min' : ''}.js`,
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

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          output: { comments: false },
          compress: { warnings: false }
        }
      })
    ]
  },

  devtool: isProduction
    ? 'cheap-module-source-map'
    : 'cheap-module-eval-source-map',

  plugins: pluginsList,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
