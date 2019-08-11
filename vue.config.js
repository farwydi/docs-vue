module.exports = {
    runtimeCompiler: false,
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
