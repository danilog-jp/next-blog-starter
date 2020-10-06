const withMDX = require("@next/mdx")({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

module.exports = withMDX({
    target: 'serverless',
    webpack: (config) => {
        config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
        return config
    }
});
