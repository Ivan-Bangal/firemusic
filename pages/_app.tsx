import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ActionIcon, ColorScheme, ColorSchemeProvider, Container, createStyles, Flex, Group, MantineProvider } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Footer from '../components/Footer/footer';
import { HeaderResponsive } from '../components/Header/Header';
import { links } from '../lib/model/navLinks';

export default function App({ Component, pageProps }: AppProps) {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }
    

  useHotkeys([['mod+J', () => toggleColorScheme()]]);



  return (
    <>
      <Head>
        <title>App Upload</title>
        <meta name='viewport' content='minimum-scale=1,initial-scale=1,width=device-width' />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{colorScheme}}
          
        >
          <HeaderResponsive links={links}  />
          <Flex
            mih={'50vh'}

            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Component {...pageProps} />

          </Flex>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}
