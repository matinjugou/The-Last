module.exports = {
  devServer: {
    proxy: {
      '/cave': {
        target: 'http://192.168.6.112:8888/', // 设置你调用的接口域名和端口号
        changeOrigin: true,     // 跨域
        pathRewrite: {
          '^/cave': '/'
        }
      }
    }
  },
}