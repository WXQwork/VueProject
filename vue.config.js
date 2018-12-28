const path = require('path')

function resolve(url) {
    return path.resolve(__dirname, url)
}

module.exports = {
    //配置webpack的路劲
    chainWebpack: (config) => {
        config.resolve.alias
            .set('components', resolve('./src/components'))
            .set('styles', resolve('./src/assets/styles'))
            .set('views',resolve('./src/views'))
            .set('images', resolve('./src/assets/images'))
            .set('utils',resolve('./src/utils'))
    },

    //baseUrl:'/dist'

    devServer: {
        proxy: {
          '/mall-c': {
            target: 'https://mall.bilibili.com',
            changeOrigin: true
          },
          '/index': {
            target: 'http://h5.jumei.com',
            changeOrigin: true
          }
        }
      }
}