import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import Head from 'next/head';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { useEffect } from 'react';

import theme from '../theme';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import '../components/Hero/style.css';
import '../components/About/style.css';
import '../components/Contact/style.css';
import '../components/Projects/style.css';
import '../components/NavBar/style.css';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // duration: 700,
      // once: true,
      // disable: 'mobile',
    });
  }, []);

  return (
    <>
      <Head>
        <title>Emmanuel Oloke</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
