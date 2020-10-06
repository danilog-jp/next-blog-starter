const rehypeSlug = require("rehype-slug");
const rehypeAutoLinkHeadings = require("rehype-autolink-headings");
const rehypeToc = require("rehype-toc");
const rehypePrism = require("@mapbox/rehype-prism");

const withMDX = require("@next/mdx")({
    options: {
        remarkPlugins: [],
        rehypePlugins: [
            rehypeSlug,
            [rehypeToc, {headings: "h2"}],
            rehypeAutoLinkHeadings,
            rehypePrism,
        ],
    },
});

module.exports = withMDX({
    target: 'serverless',
    webpack: (config) => {
        config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
        return config
    }
});
