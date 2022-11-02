const { default: build } = require("next/dist/build");

module.exports =  {
    httpAgentOptions: {
        keepAlive: false,
    },
    images: {
        unoptimized: true,
    },
   generateBuildId: async () => {

        return 'Testing'
    },
    exportPathMap: async function (
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': {page: '/'},
            '/services': {page: '/services'}
        }
    },
}