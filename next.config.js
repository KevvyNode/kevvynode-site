const { default: build } = require("next/dist/build");
const { Octokit } = require("octokit");

module.exports =  {
    httpAgentOptions: {
        keepAlive: false,
    },
   generateBuildId: async () => {

        return 'Testing'
    }
}