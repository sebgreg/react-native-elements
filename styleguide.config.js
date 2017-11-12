const path = require('path');

// require: [path.join(__dirname, 'src/form/FormLabel')],

const getExampleFilename = componentPath => {
  let baseName = path.basename(componentPath).replace(/\.jsx?$/, '.md');
  if (baseName.includes('FormInput')) baseName = 'Forms.md';
  if (baseName === 'List.md') baseName = 'Lists.md';
  const fullPath = path.resolve(`docs/styleguide/examples/${baseName}`);
  return fullPath;
};

module.exports = {
  verbose: true,
  context: {
    RN: 'react-native',
  },
  skipComponentsWithoutExample: false,
  components: 'src/**/+([A-Z]*|badge).js',
  sections: [
    {
      name: 'Buttons',
      components: 'src/buttons/[A-Z]*.js',
    },
    {
      name: 'Cards',
      components: 'src/+(card|pricing)/[A-Z]*.js',
    },
    {
      name: 'Forms',
      components: 'src/form/[A-Z]*.js',
    },
    {
      name: 'Icons',
      components: 'src/+(icons|social)/[A-Z]*.js',
    },
    {
      name: 'Inputs',
      components: 'src/+(checkbox|rating|slider)/[A-Z]*.js',
    },
    {
      name: 'Lists',
      components: 'src/list/[A-Z]*.js',
    },
    {
      name: 'Tiles',
      components: 'src/tile/[A-Z]*.js',
    },
    {
      name: 'misc',
      components: 'src/+(avatar|badge|divider|header|text)/[A-Z]*.js',
    },
  ],
  ignore: [
    '**/NavButton.js',
    '**/DummyNavButton.js',
    '**/Title.js',
    '**/config/**',
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
  ],
  template: 'docs/styleguide/template.html',
  styleguideDir: 'docs/styleguide',
  getExampleFilename,
  webpackConfig: {
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
            'node_modules/react-native-vector-icons/Fonts'
          ),
        },
      ],
    },
  },
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.resolve.alias['react-native'] = 'react-native-web';
    webpackConfig.resolve.extensions = ['.web.js', '.js'];
    return webpackConfig;
  },
};
