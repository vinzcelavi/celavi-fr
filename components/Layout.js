import React from 'react';
import { Normalize } from 'styled-normalize';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';
import useDarkMode from '../theme/useDarkMode';
import GlobalStyles from '../theme/global';
import ThemeToggle from './ThemeToggle';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Normalize />

      <Head>
        <title>Vincent Bianciotto | Front-End Designer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          sizes="32x32"
          href="/favicon-32.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="64x64"
          href="/favicon-64.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="96x96"
          href="/favicon-96.png"
          type="image/png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Mada:300,400,500,600,700|Overpass+Mono:300,400,600,700"
          rel="stylesheet"
        />
      </Head>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {children}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
