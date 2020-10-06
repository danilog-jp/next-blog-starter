import * as React from "react";
import PageLayout from "@/layouts/page";
import { getPageByName, getAllPosts, getConfig } from "@/api";
import dynamic from "next/dynamic";

const Page: React.FC<any> = ({ slug, post, config }) => {
  const MDXContent = dynamic(() => import(`../_pages/${slug}.mdx`));
  return <PageLayout post={post} config={config} content={<MDXContent />} />;
};

export async function getStaticProps() {
  const config = await getConfig();
  const post = await getPageByName("sample-page");
  return {
    props: {
      slug: "sample-page",
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

export default Page;
