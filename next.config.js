const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true
    },
    future: {
        webpack5: true
    },
    pageExtensions: ['jsx', 'js'],
    webpack: function (config, options) {
        config.experiments = {}
        return config
    }
})
