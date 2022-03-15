import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";

import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";

export const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "DJ events | Find the hottest DJ parties",
  description: "Find the latest electronic music events",
  keywords: "music, edm, dj, events",
};

export default Layout;
