const { default: build } = require("next/dist/build");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
  }
  
  module.exports = nextConfig


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