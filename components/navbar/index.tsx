import {FC, useContext, useEffect} from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoIcon from "@/public/logo-icon.svg";
import logoTextDark from "@/public/logo-text-dark.svg";
import logoText from "@/public/logo-text.svg";
import {ThemeContext} from "@/stores/theme";
import {IconGithubLogo, IconMoon, IconSun} from '@douyinfe/semi-icons';
import {Themes} from "@/constants/enum";

export interface INavBarProps {
}

const NavBar: FC<INavBarProps> = ({}) => {
  const {setTheme, theme} = useContext(ThemeContext);
  const icon = theme === Themes.light ? logoTextDark : logoText;
  const iconTheme = theme === Themes.light ? <IconMoon size="extra-large"/> : <IconSun size="extra-large"/>;
  return (
    <div className={styles.navBar}>
      <a href="https://iotsharp.io/">
        <Image src={logoIcon} alt="" width={35} height={35}/>
        <Image src={icon} alt="" width={135} height={40}/>
      </a>
      <div className={styles.themeArea}>
        <div
          className={styles.icon}
          onClick={(): void => {
            if (localStorage.getItem("theme") === Themes.light) {
              setTheme(Themes.dark);
            } else {
              setTheme(Themes.light);
            }
          }}
        >
          {iconTheme}
        </div>
        <div className={styles.icon} onClick={(): void => {
          window.open(
            "https://github.com/IoTSharp",
            "blank",
            "noopener=yes,noreferrer=yes"
          );
        }}>
          <IconGithubLogo size="extra-large"/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
