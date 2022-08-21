import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Box, grommet, Grommet } from "grommet";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AppBar } from "../components/header/app-bar";
import { AppBarContent } from "../components/header/app-bar-content";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Grommet theme={grommet}>
        <AppBar>
          <AppBarContent />
        </AppBar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Grommet>
    </Provider>
  );
}

export default MyApp;
