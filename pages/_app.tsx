import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import 'aos/dist/aos.css';

import '../components/Hero/style.css';
import '../components/About/style.css';
import '../components/Contact/style.css';
import '../components/Projects/style.css';
import '../components/NavBar/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
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
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
