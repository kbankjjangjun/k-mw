import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import { css, Global } from "@emotion/react";
import normalize from "emotion-normalize";

import "../styles/globals.css";
import { globalStyles } from "@/styles/global";
import Error from "next/error";

import "@/styles/app.scss";
import { createContext } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { OverlayProvider } from "@toss/use-overlay";
import Head from "next/head";

const globalData = {
  bdu: "123", // TODO: bdu?
  sid: "1234", // TODO: 세션 id
};

export const globalDataContext = createContext(globalData);

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }

  return (
    <>
      {pageProps.importKbankCss === true && (
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://m.kbanknow.com/resource/css/mmk/kbankform.css"
          ></link>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://m.kbanknow.com/resource/css/mmk/common.css"
          ></link>
        </Head>
      )}
      <Global
        styles={css`
          ${normalize}
          ${globalStyles}
        `}
      />

      <ErrorBoundary>
        <OverlayProvider>
          <Component {...pageProps} />
        </OverlayProvider>
      </ErrorBoundary>
    </>
  );
}
