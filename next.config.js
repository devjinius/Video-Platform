var path = require('path')

module.exports = {
  webpack(config, { dev }) {
    config.devServer = config.devServer || {}
    config.devServer.proxy = {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        onProxyReq(request, req, res) {
          request.setHeader('origin', 'http://localhost:8080')
        }
        //pathRewrite: { '^/api': '/api' }
      }
    }
    config.resolve.alias = {
      components: path.resolve('./components/'),
      common: path.resolve('./common/')
    }

    config.module.loaders = [
      {
        test: /\.js/,
        use: 'babel',
        include: __dirname + '/common'
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader'],
        include: __dirname + '/common'
      }
    ]

    //config.devServer.proxy = 'http://localhost:7000/api'
    return config
  },

  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/index' }
    }
  }
}
