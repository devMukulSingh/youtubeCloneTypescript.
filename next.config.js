/** @type {import('next').NextConfig} */


module.exports = {
    images:{
        remotePatterns : [
            {
                protocol:'https',
                hostname:'yt3.ggpht.com',
            },
            {
                protocol:'https',
                hostname:'i.ytimg.com'
            },
            {
                protocol:'https',
                hostname:'yt3.googleusercontent.com'
            },
            {
                protocol:'https',
                hostname : 'www.youtube.com'
            }
        ],
    },
}

