import * as React from "react";
import PostLayout from "@/layouts/post";
import { getPostBySlug, getAllPosts } from "@/api";

const Post: React.FC<any> = (props) => {
  return <PostLayout title={props.title} content={props.content} />;
};

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug),
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
