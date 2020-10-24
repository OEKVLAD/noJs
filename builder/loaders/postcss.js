const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
module.exports = function(path_base, publicPath) {
  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: publicPath+'[name].css?[contenthash]',
        chunkFilename: publicPath+'module/module.[name].css?[contenthash]',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
    ],
    module: {
      rules: [
        
        {
          test: /\.css$/,
          use: [
            
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-sass-loader',
              options: {
                plugins: () => [require('autoprefixer')({
                  'overrideBrowserslist': ['> 1%', 'last 2 versions'],
                })],
              },
            },
            'sass-loader',
          
          
          ],
        },
        {
          test: /\.scss$/,
          // include: paths,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-sass-loader',
              options: {
                plugins: () => [
                  require('postcss-csso'),
                  require('postcss-nested'),
                  require('postcss-minify-font-values'),
                  require('postcss-minify-selectors'),
                  require('postcss-normalize-url'),
                  require('postcss-reduce-idents'),
                  require('postcss-discard-duplicates'),
                  require('postcss-discard-comments'),
                  require('postcss-discard-unused'),
                  require('postcss-mq-optimize'),
                  require('postcss-combine-media-query'),
                  require('postcss-strip-zero-length-units'),
                  require('postcss-remove-rules')({
                    'rulesToRemove': {
                      '.my-class': '*', // Or an array of CSS rule props
                    },
                  }),
                  require('autoprefixer')({
                    'overrideBrowserslist': ['> 1%', 'last 2 versions'],
                  }),
                ],
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new CssnanoPlugin({
          cssnanoOptions: {
            preset: ['default', {
              discardComments: { removeAll: true },
              mergeIdents: true,
              reduceIdents: true,
            }],
          },
        }),
      ],
    },
  };
};
