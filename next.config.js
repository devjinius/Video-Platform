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

        //config.devServer.proxy = 'http://localhost:7000/api'

        return config
    }
}   