const { default: build } = require("next/dist/build");

module.exports =  {
    httpAgentOptions: {
        keepAlive: false,
    },
   generateBuildId: async () => {

        return 'Testing'
    }
}