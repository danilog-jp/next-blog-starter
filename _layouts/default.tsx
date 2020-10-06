import * as React from "react";
import Head from "next/head";
import Header from "@/includes/header";
import Footer from "@/includes/footer";
import Menu from "@/includes/menu";

const DefaultLayout: React.FC<any> = ({ config, children }) => {
  return (
    <main>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link href="/vendor/prism.css" rel="stylesheet" />
      </Head>
      <div id="wrapper">
        <Header config={config} />
        <Menu items={config.menu} />
        <div id="main">
          <div className="inner">{children}</div>
        </div>
        <Footer config={config} />
      </div>
      <>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/browser.min.js"></script>
        <script src="/js/breakpoints.min.js"></script>
        <script src="/js/util.js"></script>
        <script src="/js/main.js"></script>
        <script src="/vendor/prism.js"></script>
      </>
    </main>
  );
};

export default DefaultLayout;
