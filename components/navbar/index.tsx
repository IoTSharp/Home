import {FC, useContext, useState} from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoIcon from "@/public/logo-icon.svg";
import logoTextDark from "@/public/logo-text-dark.svg";
import logoText from "@/public/logo-text.svg";
import {ThemeContext} from "@/stores/theme";
import { Tooltip, SideSheet } from '@douyinfe/semi-ui';
import {IconGithubLogo, IconMoon, IconSun, IconBox} from '@douyinfe/semi-icons';
import {Themes} from "@/constants/enum";

export interface INavBarProps {
}

const NavBar: FC<INavBarProps> = ({}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const {setTheme, theme} = useContext(ThemeContext);
  const icon = theme === Themes.light ? logoTextDark : logoText;
  const iconTheme = theme === Themes.light ? <IconMoon size="extra-large"/> : <IconSun size="extra-large"/>;
  const onChange = () => {
    setVisible(!visible);
  };
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
          <Tooltip position="bottom" content={Themes.light ? '切换到暗色模式' : '切换到亮色模式'}>
            {iconTheme}
          </Tooltip>
        </div>
        <div className={styles.icon} onClick={onChange}>
          <Tooltip position="bottom" content="查看安装包">
            <IconBox size="extra-large"/>
          </Tooltip>
        </div>
        <div className={styles.icon} onClick={(): void => {
          window.open(
            "https://github.com/IoTSharp",
            "blank",
            "noopener=yes,noreferrer=yes"
          );
        }}>
          <Tooltip position="bottom" content="查看Github">
            <IconGithubLogo size="extra-large"/>
          </Tooltip>
        </div>
      </div>
      <SideSheet title="安装包" visible={visible} onCancel={onChange} placement="right">
        <p>Here is more content...</p>
      </SideSheet>
    </div>
  );
};

export default NavBar;
