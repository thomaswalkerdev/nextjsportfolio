import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Box, grommet, Grommet } from "grommet";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AppBar } from "../components/header/app-bar";
import { AppBarContent } from "../components/header/app-bar-content";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Grommet theme={grommet}>
        <Head>
          <title>Thomas Walker</title>
        </Head>
        <AppBar>
          <AppBarContent />
        </AppBar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <AppBar>
          <AppBarContent />
        </AppBar>
      </Grommet>
    </Provider>
  );
}

export default MyApp;
