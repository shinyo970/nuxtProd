const env = require('./env');
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxtProd',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css,全局样式导入,比如reset,可自定义目录,css
    css: [
        'element-ui/lib/theme-chalk/index.css',

    ],

    //自定义加载进度条
    loading: { color: '#ff0' },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui',
        '~/plugins/axios'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules ,这里相当于main.js全局注册,同时,在这里引入的插件可以进行配置
    modules: [
        '@nuxtjs/axios',
        //有参数配置的
        'cookie-universal-nuxt', ['cookie-universal-nuxt', {
            parseJSON: true
        }],

    ],
    axios: {
        proxy: true // Can be also an object with default options
    },

    proxy: {
        '/api': {
            target: env[process.env.MODE].ENV_API,
        },

    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },
    server: {
        port: 3002, // default: 3000,修改为了3002
        host: 'localhost', // default: localhost
    },
}
