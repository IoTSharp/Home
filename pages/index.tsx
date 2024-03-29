import React, {useContext, useEffect, useRef} from 'react';
import type {NextPage} from 'next';
import dynamic from 'next/dynamic';
import styles from './index.module.scss';
import Banner from "@/pages/components/banner";
import Technology from "@/pages/components/technology";
import Features from "@/pages/components/features";

import Contributors from "@/pages/components/contributors";
import cName from 'classnames';
import {ThemeContext} from '@/stores/theme';
import {IComponentProps} from './_app';
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
const Platform = dynamic(() => import("@/pages/components/platform"), { ssr: false });
interface IProps {
}

const Home: NextPage<IProps & IComponentProps> = ({}) => {

  const mainRef = useRef<HTMLDivElement>(null);
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    mainRef.current?.classList.remove(styles.withAnimation);
    window.requestAnimationFrame(() => {
      mainRef.current?.classList.add(styles.withAnimation);
    });
  }, [theme]);

  return (
    <div>
      <NavBar/>
      <div className={styles.container}>
        <main className={cName([styles.main, styles.withAnimation])} ref={mainRef}>
          <Banner/>
          <Technology/>
          <Features/>
          <Platform/>
          <Contributors/>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
