const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve('./web-support/sampleParser.js'),
  output: {
    path: path.resolve('./web-support/styleguide/scripts'),
    filename: 'genStyleguideExamples.js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: fileName => {
          if (
            fileName.indexOf(
              path.join('node_modules', 'react-native-vector-icons', 'lib')
            ) != -1
          )
            return true;

          if (
            fileName.indexOf(
              path.join('node_modules', 'react-native-elements', 'src')
            ) != -1
          )
            return true;

          if (fileName.indexOf(path.join('node_modules', 'cli')) != -1)
            return true;

          if (fileName.indexOf('node_modules') != -1) return false;
          return true;
        },
        loader: 'babel-loader',
        options: {
          plugins: ['react-native-web/babel'],
          presets: ['es2015', 'stage-0', 'react-native'],
          babelrc: false,
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader',
        ],
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader', // or directly file-loader
        include: path.resolve(
          __dirname,
          '../../node_modules/react-native-vector-icons/Fonts'
        ),
      },
    ],
  },
  devtool: 'inline-source-map',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['.json', '.js', '.web.js'],
  },
  externals: {
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
  },
};
