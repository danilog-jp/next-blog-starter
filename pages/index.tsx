import * as React from "react";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@/api";
import MainHeader from "@/includes/mainHeader";

const Blog: React.FC<any> = ({ config, posts }) => {
  return (
    <DefaultLayout config={config}>
      <MainHeader config={config} />
      <section className="tiles">
        {posts.map(function (post) {
          return (
            <article className={post.className || "style1"} key={post.slug}>
              <span className="image">
                <img
                  src={
                    post.thumbnail ||
                    "https://via.placeholder.com/450x450.png?text=+"
                  }
                  alt={post.title}
                />
              </span>
              <Link href={"/posts/" + post.slug}>
                <a>{post.title}</a>
              </Link>
            </article>
          );
        })}
      </section>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      config,
    },
  };
}

export default Blog;
