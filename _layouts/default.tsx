import * as React from "react";
import Head from "next/head";
import Header from "@/includes/header";
import Footer from "@/includes/footer";

const DefaultLayout: React.FC<any> = (props) => {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

export default DefaultLayout;
