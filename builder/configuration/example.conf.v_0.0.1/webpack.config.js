// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

const Config = require("./config");
const config = new Config();

const path = require('path');
const merge = require('webpack-merge');
const entry = require('webpack-glob-entry');

const babel_loaders = require('./../../loaders/babelJQ');
const postcss_loader = require('./../../loaders/postcss');
const umd_require_webpack_plugin = require("./../../plugings/UmdRequireWebpackPlugin.js");
const environment_plugin = require('./../../plugings/EnvironmentPlugin.js');
const progressBar_views_plugin = require("./../../plugings/progress_bar_webpack.js");

const pathBase= __dirname + './../../../';

const pathIN = {
  source: pathBase + config.getTemplatePath,
  resources: pathBase + config.getTemplatePath,
  service: pathBase + config.getService,
};

const pathOUT = {
  source: pathBase + config.getRealPublicPath,
  resources: pathBase + config.getRealPublicPath,
};

const PATHS = {
  source: path.join( pathIN.source),
  public: path.join( pathOUT.source),
  service: path.join( pathIN.service),
};

const common = merge([
  {
    resolve: {
      modules: ['node_modules'],
      alias: {
        _template: path.resolve(pathBase, config.getTemplatePath),
        _service: path.resolve(pathBase, config.getService),
      }
    },
    entry:Object.assign(
{
        "bundle":     [ path.resolve(PATHS.source,'index.js')],
      },
        entry(path.resolve( PATHS.source, '*.index.js')),
        entry(path.resolve( PATHS.source, '**/*.index.js')),

        entry(path.resolve( PATHS.service, '*.index.js')),
        entry(path.resolve( PATHS.service, '**/*.index.js')),
    ),

    output: {
      filename: config.getPublicPath + '[name].js?[contenthash]',
      chunkFilename: config.getPublicPath + 'module.[name].js?[contenthash]',
      publicPath: '/',
      path: path.resolve(__dirname, PATHS.public),
    },
  },

  babel_loaders(),
  postcss_loader(config.getRealPublicPath, config.getPublicPath),

  umd_require_webpack_plugin(),
  environment_plugin(pathBase + "/entery.json"),

  progressBar_views_plugin(),
]);

module.exports = function (env, argv) {
  console.log('webpack start');
  if (argv.mode === 'production') {
    return merge([
      common,
    ]);
  }
  if (argv.mode === 'development') {
    return merge([
      common,
    ]);
  }
};
