import * as React from "react";
import DefaultLayout from "@/layouts/default";
import Head from "next/head";

const PageLayout: React.FC<any> = ({ config, post, content }) => {
  return (
    <DefaultLayout config={config}>
      <Head>
        <title>{post.metadata.title}</title>
      </Head>
      <article>
        <h1>{post.metadata.title}</h1>
        {content}
      </article>
    </DefaultLayout>
  );
};

export default PageLayout;
