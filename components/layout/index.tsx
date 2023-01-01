import {FC} from "react";
import type {IFooterProps} from "../footer/index";
import Footer from "../footer/index";
import type {INavBarProps} from "../navbar/index";
import NavBar from "../navbar/index";
import styles from "./styles.module.scss";

export interface ILayoutProps {
  navbarData: INavBarProps;
  footerData: IFooterProps;
}

const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
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

export default Layout;
