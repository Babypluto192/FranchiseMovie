/** @type {import('next').NextConfig} */
const nextConfig = {}
const withCSS = require('@zeit/next-css')
module.exports = withCSS()
module.exports = nextConfig
module.exports = {
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
                pathname: '/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
            },  {
                protocol: "https",
                hostname: "*.googleusercontent.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "sun**-**.userapi.com",
                port: "",
                pathname: "**",
            },{
            protocol: "https",
            hostname: "youtu.be",
            port: ""    ,
            pathname: "**********"
            },{
                protocol: "https",
                hostname: "whey.kz",
                port: ""    ,
                pathname: "/wp-content/uploads/2020/11/placeholder.png"
            },

        ],
    },
}