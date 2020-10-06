import * as React from "react";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";
import { getConfig, getPublishedPosts } from "@/api";
import MainHeader from "@/includes/mainHeader";
import classNames from "classNames";
import dayjs from "dayjs";
import { useRouter } from "next/router";

const Blog: React.FC<any> = ({ config, allPosts }) => {
  const router = useRouter();
  const page = Number(router.query?.page) || 1;
  const postPerPage = Number(config.postPerPage || 9);
  const posts = allPosts
    .sort((p1, p2) => {
      const d1 = dayjs(p1.metadata.date);
      const d2 = dayjs(p2.metadata.date);
      return d1 < d2 ? 1 : d1 > d2 ? -1 : 0;
    })
    .slice((page - 1) * postPerPage, page * postPerPage);

  const hasPrev = page > 1;
  const hasNext = allPosts.length > page * postPerPage - 1;

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
                  alt={post.metadata.title}
                />
              </span>
              <Link href={"/posts/" + post.slug}>
                <a>
                  <h2>{post.metadata.title}</h2>
                  <div className="content">{post.metadata.excerpt}</div>
                </a>
              </Link>
            </article>
          );
        })}
      </section>
      <div className="pagination-container">
        <div
          className={classNames("pagination", {
            disabled: !hasPrev,
          })}
        >
          <Link href={`/?page=${page - 1}`}>
            <a className="icon fa solid fa-caret-left" />
          </Link>
        </div>
        <div className={classNames("pagination current")}>{page}</div>
        <div
          className={classNames("pagination", {
            disabled: !hasNext,
          })}
        >
          <Link href={`/?page=${page + 1}`}>
            <a className="icon fa solid fa-caret-right" />
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getPublishedPosts();

  return {
    props: {
      allPosts,
      config,
    },
  };
}

export default Blog;
