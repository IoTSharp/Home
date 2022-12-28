import {FC, useContext} from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoIcon from "@/public/logo-icon.svg";
import logoTextDark from "@/public/logo-text-dark.svg";
import logoText from "@/public/logo-text.svg";
import {ThemeContext} from "@/stores/theme";
import {Themes} from "@/constants/enum";

export interface INavBarProps {
}

export const NavBar: FC<INavBarProps> = ({}) => {
  const {setTheme, theme} = useContext(ThemeContext);
  const icon = theme === Themes.light ?  logoTextDark : logoText;
  return (
    <div className={styles.navBar}>
      <a href="http://localhost:3000/">
        <Image src={logoIcon} alt="" width={35} height={35}/>
        <Image src={icon} alt="" width={135} height={40}/>
      </a>
      <div className={styles.themeArea}>
        <div
          className={styles.popupText}
        >
          弹窗示范
        </div>
        <div
          className={styles.themeIcon}
          onClick={(): void => {
            if (localStorage.getItem("theme") === Themes.light) {
              setTheme(Themes.dark);
            } else {
              setTheme(Themes.light);
            }
          }}
        ></div>
      </div>
    </div>
  );
};
