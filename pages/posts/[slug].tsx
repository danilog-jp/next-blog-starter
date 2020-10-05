import * as React from "react";
import PostLayout from "@/layouts/post";
import { getPostBySlug, getAllPosts, getConfig } from "@/api";

const Post: React.FC<any> = ({ post, config }) => {
  return <PostLayout post={post} config={config} />;
};

export async function getStaticProps(context) {
  const config = await getConfig();
  const post = await getPostBySlug(context.params.slug);
  return {
    props: {
      post,
      config,
    },
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default Post;
