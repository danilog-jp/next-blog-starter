import * as React from "react";
import PageLayout from "@/layouts/page";
import { getArticleBySlug, getConfig } from "@/api";
import dynamic from "next/dynamic";
import { PostType } from "../definitions/postMeta";

const Page: React.FC<any> = ({ slug, post, config }) => {
  const MDXContent = dynamic(() => import(`../_articles/page/${slug}.mdx`));
  return <PageLayout post={post} config={config} content={<MDXContent />} />;
};

export async function getStaticProps() {
  const config = await getConfig();
  const post = await getArticleBySlug(PostType.page, "sample-page");
  return {
    props: {
      slug: "sample-page",
      post,
      config,
    },
  };
}

export default Page;
