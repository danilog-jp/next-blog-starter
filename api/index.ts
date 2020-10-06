import yaml from "js-yaml";
import { PostType } from "../definitions/postMeta";

export const getPosts = async () => {
  const context = require.context("../_articles/post", false, /\.mdx$/);
  const articles = [];
  for (const key of context.keys()) {
    const fileName = key.slice(2);
    const mdxContent = await import(`../_articles/post/${fileName}`);
    articles.push({
      slug: fileName.replace(".mdx", ""),
      metadata: mdxContent.metadata,
    });
  }
  return articles;
};

export const getPages = async () => {
  const context = require.context("../_articles/page", false, /\.mdx$/);
  const articles = [];
  for (const key of context.keys()) {
    const fileName = key.slice(2);
    const mdxContent = await import(`../_articles/page/${fileName}`);
    articles.push({
      slug: fileName.replace(".mdx", ""),
      metadata: mdxContent.metadata,
    });
  }
  return articles;
};

export const getArticleBySlug = async (postType: PostType, slug: string) => {
  const mdxContent = await import(`../_articles/${postType}/${slug}.mdx`);
  return {
    slug,
    metadata: mdxContent.metadata,
  };
};

export const getConfig: any = async () => {
  const config = await import(`../config.yml`);
  return yaml.safeLoad(config.default);
};
