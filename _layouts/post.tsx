import * as React from "react";
import DefaultLayout from "@/layouts/default";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const PostLayout: React.FC<any> = (props) => {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <h1>{props.title}</h1>
        <ReactMarkdown source={props.content} />
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </article>
    </DefaultLayout>
  );
};

export default PostLayout;
