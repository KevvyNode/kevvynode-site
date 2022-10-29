const { default: build } = require("next/dist/build");
const { Octokit } = require("octokit");

module.exports =  {
    httpAgentOptions: {
        keepAlive: false,
    },
    generateBuildId: async () => {
        const octokit = new Octokit({
            auth: process.env.auth
        })

        await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}', {
            owner: 'ItsCryptic',
            repo: 'kevvynode-site',
            ref: 'main'
        })
        return 'Testing'
    }
}