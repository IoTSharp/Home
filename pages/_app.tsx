import type {AppContext, AppProps} from 'next/app';
import App from 'next/app';
import React from 'react';
import type {ILayoutProps} from '@/components/layout';
import Layout from '@/components/layout';
import Head from 'next/head';
import {getIsMobile, getIsSupportWebp} from '@/utils';
import {ThemeContextProvider} from '@/stores/theme';
import {UserAgentProvider} from '@/stores/userAgent';
import {LanguageContextProvider} from '@/stores/language';
import QRCode from '@/public/code.jpg';
import './global.scss';
import {isEmpty} from "lodash";
import {appWithTranslation} from 'next-i18next'

export interface IComponentProps {
  isMobile?: boolean;
  isSupportWebp?: boolean;
}

const MyApp = (data: AppProps & ILayoutProps & IComponentProps): JSX.Element => {
  const {Component, pageProps, navbarData, footerData, isMobile, isSupportWebp} = data;
  return (
    <div>
      <Head>
        <title>IoTSharp官网</title>
        <meta name="description" content={`IoTSharp官网(${isMobile ? '移动端' : 'pc端'})`}/>
        <meta name="viewport" content="user-scalable=no"/>
        <meta name="viewport" content="initial-scale=1,maximum-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <UserAgentProvider>
            <Layout navbarData={navbarData} footerData={footerData}>
              <Component {...pageProps} isMobile={isMobile} isSupportWebp={isSupportWebp}/>
            </Layout>
          </UserAgentProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);

  return {
    ...pageProps,
    isMobile: getIsMobile(context),
    isSupportWebp: getIsSupportWebp(context),
  };
};

export default appWithTranslation(MyApp);
