import * as React from "react";
import PostLayout from "@/layouts/post";
import { getPostBySlug, getPublishedPosts, getConfig } from "@/api";
import dynamic from "next/dynamic";

const Post: React.FC<any> = ({ slug, post, config }) => {
  const MDXContent = dynamic(() => import(`../../_articles/posts/${slug}.mdx`));
  return <PostLayout post={post} config={config} content={<MDXContent />} />;
};

export async function getStaticProps(context) {
  const config = await getConfig();
  const post = await getPostBySlug(context.params.slug);
  return {
    props: {
      slug: context.params.slug,
      post,
      config,
    },
  };
}

// Return each post's paths for static build
export async function getStaticPaths() {
  let paths = await getPublishedPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default Post;
