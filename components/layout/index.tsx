import {FC} from "react";
import type {IFooterProps} from "../footer/index";
import type {INavBarProps} from "../navbar/index";
import styles from "./styles.module.scss";

export interface ILayoutProps {
  navbarData: INavBarProps;
  footerData: IFooterProps;
}

const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
                                                                       children,
                                                                     }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export default Layout;
