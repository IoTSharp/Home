import {FC} from "react";
import {Footer, IFooterProps} from "../footer";
import {INavBarProps, NavBar} from "../navbar";
import styles from "./styles.module.scss";

export interface ILayoutProps {
  navbarData: INavBarProps;
  footerData: IFooterProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
                                                                       navbarData,
                                                                       footerData,
                                                                       children,
                                                                     }) => {
  return (
    <div className={styles.layout}>
      <NavBar {...navbarData} />
      <main className={styles.main}>{children}</main>
      <Footer {...footerData} />
    </div>
  );
};
