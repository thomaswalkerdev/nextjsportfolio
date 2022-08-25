import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { grommet, Grommet } from "grommet";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AppBar } from "../components/header/app-bar";
import { HeaderContent } from "../components/header/header-content";
import Head from "next/head";
import { FooterContent } from "../components/header/footer-content";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Grommet theme={grommet}>
        <Head>
          <title>Thomas Walker</title>
        </Head>
        <AppBar>
          <HeaderContent />
        </AppBar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <AppBar>
          <FooterContent />
        </AppBar>
      </Grommet>
    </Provider>
  );
}

export default MyApp;
