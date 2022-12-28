import React, {useContext, useEffect, useRef} from 'react';
import type {NextPage} from 'next';
import styles from './index.module.scss';
import {Banner} from "@/pages/components/banner";
import {Technology} from "@/pages/components/technology";
import cName from 'classnames';
import {ThemeContext} from '@/stores/theme';
import {IComponentProps} from './_app';

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
    <div className={styles.container}>
      <main className={cName([styles.main, styles.withAnimation])} ref={mainRef}>
        <Banner />
        <Technology />
      </main>
    </div>
  );
};

export default Home;
