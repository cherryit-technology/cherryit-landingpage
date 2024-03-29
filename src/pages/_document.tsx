/* eslint-disable @next/next/no-sync-scripts */
import * as React from "react";
import Script from 'next/script';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { AppType } from "next/app";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import { MyAppProps } from "./_app";

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Federant&family=Podkova:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Federant&family=Podkova:wght@400;500;600;700;800&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>

        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />

        {/*         <script
          type="text/javascript"
          src="https://testimonial.to/js/iframeResizer.min.js"
        />
        <script type="text/javascript">
          {iFrameResize(
            { log: false, checkOrigin: false },
            "#testimonialto-carousel-all-cherry-it-tag-all-light"
          )}
        </script> */}

        {/* rastreamento do CRM. favor manter */}
         <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/40071122.js"
        ></script>

        {/* rastreamento do analytivs. favor manter */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
                  w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
                  m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://mautic.lion.cherryit.co/mtc.js','mt');

              mt('send', 'pageview');
          `}
        </Script>

        {/*
        <script
          charset="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/embed/v2.js"
        ></script> */}

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener("DOMContentLoaded", function () {
              hbspt.forms.create({
                region: "na1",
                portalId: "40071122",
                formId: "9b5bc9e3-a5e5-4d5a-8a39-8c8e05f68ed4",
              });
            });
          `,
          }}
        /> */}

        {/*  <script>
          hbspt.forms.create({
            region: "na1",
            portalId: "40071122",
            formId: "9b5bc9e3-a5e5-4d5a-8a39-8c8e05f68ed4",
          })
        </script> */}
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (
        App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
