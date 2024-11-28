import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Akshay Jadhav</title>
        <meta
          name="description"
          content="I dedicated to serving the community with integrity and ensuring safety as a part of the Maharashtra Police."
        />
        <meta name="author" content="Akshay Jadhav" />

      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
