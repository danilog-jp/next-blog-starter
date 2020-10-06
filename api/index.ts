import yaml from "js-yaml";
import { PostStatus } from "../definitions/postMeta";

export const getPublishedPosts = async () => {
  const context = require.context("../_posts", false, /\.mdx$/);
  const posts = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const mdxContent = await import(`../_posts/${post}`);
    if (mdxContent.metadata.status === PostStatus.published) {
      posts.push({
        slug: post.replace(".mdx", ""),
        metadata: mdxContent.metadata,
      });
    }
  }
  return posts;
};

export const getPostBySlug = async (slug) => {
  const mdxContent = await import(`../_posts/${slug}.mdx`);
  return {
    slug,
    metadata: mdxContent.metadata,
  };
};

export const getPageByName = async (name) => {
  const mdxContent = await import(`../_pages/${name}.mdx`);
  return {
    metadata: mdxContent.metadata,
  };
};

export const getConfig: any = async () => {
  const config = await import(`../config.yml`);
  return yaml.safeLoad(config.default);
};
