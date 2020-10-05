import * as React from "react";
import DefaultLayout from "@/layouts/default";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

const PostLayout: React.FC<any> = ({ config, post }) => {
  return (
    <DefaultLayout config={config}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        <ReactMarkdown source={post.content} />
      </article>
    </DefaultLayout>
  );
};

export default PostLayout;
