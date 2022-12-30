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
import QRCode from '@/public/code.png';
import './global.scss';
import {isEmpty} from "lodash";
import publicLogo from "@/public/public_logo.png";

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
  const data = {
    "title": "IoTSharp",
    "qr_code": "",
    "copy_right": "Copyright © 2022 The IoTSharp Authors",
    "site_number": "",
    "public_number": "冀ICP备18039206号",
    "qr_code_image": {
      "data": {
        "name": "code.png",
        "alternativeText": "code.png",
        "caption": "code.png",
        "width": 56,
        "height": 56,
        "formats": {},
        "hash": "code_67191e1aba",
        "ext": ".png",
        "mime": "image/png",
        "size": 1.45,
        "url": "/uploads/code_67191e1aba.png",
        "previewUrl": {},
        "provider": "local",
        "provider_metadata": {}
      }
    },
    "link_lists": {
      "data": [
        {
          "title": "关于",
          "links": {
            "data": [
              {
                "label": "Demo",
                "link": "http://demo.iotsharp.net/"
              },
              {
                "label": "Docs",
                "link": "https://docs.iotsharp.net/",
              },
            ]
          }
        },
        {
          "title": "了解更多",
          "links": {
            "data": [
              {
                "label": "Github",
                "link": "https://github.com/IoTSharp"
              },
              {
                "label": "Gitee",
                "link": "https://gitee.com/IoTSharp"
              },
            ]
          }
        },
        {
          "title": "联系我们",
          "links": {
            "data": [
              {
                "label": "QQ",
                "link": "https://jq.qq.com/?_wv=1027&k=u1ZzTmVd"
              }, {
                "label": "微博",
                "link": "https://weibo.com/iotsharp"
              }, {
                "label": "Discord",
                "link": "https://discord.com/invite/My6PaTmUvu"
              }
            ]
          }
        }
      ]
    }
  }
  const {copy_right, link_lists, public_number, qr_code, qr_code_image, site_number, title} = data || {};
  return {
    ...pageProps,
    navbarData: {},
    footerData: {
      title,
      linkList: link_lists?.data?.map((item: any) => ({
        title: item.title,
        list: item?.links?.data?.map((_item: any) => ({
          label: _item.label,
          link: isEmpty(_item.link) ? '' : _item.link,
        })),
      })),
      qrCode: {
        image: QRCode,
        text: qr_code,
      },
      copyRight: copy_right,
      siteNumber: site_number,
      publicNumber: public_number,
    },
    isMobile: getIsMobile(context),
    isSupportWebp: getIsSupportWebp(context),
  };
};

export default MyApp;
