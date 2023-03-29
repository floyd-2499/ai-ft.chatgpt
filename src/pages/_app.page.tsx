import React from "react";

import type { AppProps } from "next/app";
import { SSRProvider } from "@react-aria/ssr";
import { Provider } from "react-redux";
import Head from "next/head";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "../view/layout/styles/global/_style.scss";

const LayoutIndex = dynamic(() => import("../view/layout/Index"));

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SSRProvider>
      <LayoutIndex>
        <Head>
          <title>AI</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </LayoutIndex>
    </SSRProvider>
  );
};

export default MyApp;
