import "../styles/globals.css";
import type {AppContext, AppProps} from "next/app";
import App from "next/app";
import {ILayoutProps, Layout} from "@/components/layout";
import code from "@/public/code.png";
import Head from "next/head";

const MyApp = (data: AppProps & ILayoutProps) => {
  const {Component, pageProps, navbarData, footerData} = data;

  return (
    <div>
      <Head>
        <title>A Demo for 《深入浅出SSR官网开发指南》</title>
        <meta
          name="description"
          content="A Demo for 《深入浅出SSR官网开发指南》"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout navbarData={navbarData} footerData={footerData}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);

  return {
    ...pageProps,
    navbarData: {},
    footerData: {
      title: "IoTSharp",
      linkList: [
        {
          title: "关于",
          list: [
            {
              label: "Demo",
              link: "http://demo.iotsharp.net/",
            },
            {
              label: "Docs",
              link: "https://docs.iotsharp.net/",
            },
          ],
        },
        {
          title: "了解更多",
          list: [
            {
              label: "Github",
              link: "https://github.com/IoTSharp",
            },
            {
              label: "Gitee",
              link: "https://gitee.com/IoTSharp",
            },
          ],
        },
        {
          title: "联系我",
          list: [{label: "微信"}, {label: "QQ"}],
        },
      ],
      qrCode: {
        image: code,
        text: "",
      },
      copyRight: "Copyright © 2022 The IoTSharp Authors",
      siteNumber: "",
      publicNumber: "冀ICP备18039206号",
    },
  };
};

export default MyApp;
