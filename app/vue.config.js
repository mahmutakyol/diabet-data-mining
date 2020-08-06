var path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {

  chainWebpack: config => {
    config.plugins.delete('prefetch')

    // if (process.env.NODE_ENV === 'production') {
    //   config.plugin('webpack-report').use(BundleAnalyzerPlugin)
    // }

    config.module
      .rule('svg')
      .use('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: ''
      })
  },

  configureWebpack: () => {
    const optimization = {}

    if (process.env.NODE_ENV === 'production') {
      optimization.minimize = true
      optimization.minimizer = [
        new TerserPlugin()
      ]
    }

    return {
      plugins: [
        new MomentLocalesPlugin({
          localesToKeep: ['de']
        })
      ],
      resolve: {
        alias: {
          'v': path.resolve(__dirname),
          'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
        }
      },
      optimization
    }
  },

  css: {
    sourceMap: true
  },

  devServer: {
    proxy: 'http://localhost:80',
    port: 8080,
    https: false
  }

}
