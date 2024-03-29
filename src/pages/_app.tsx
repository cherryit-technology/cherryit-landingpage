import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";

import createEmotionCache from "../createEmotionCache";
import ProviderTheme from "../contexts/theme";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Cherry IT - Tecnologia que cultiva um mundo melhor</title>
      </Head>
      <ProviderTheme>
        <Component {...pageProps} />
      </ProviderTheme>
    </CacheProvider>
  );
}
