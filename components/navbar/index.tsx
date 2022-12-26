import {FC} from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoIcon from "@/public/logo-icon.svg";
import logoText from "@/public/logo-text.svg";

export interface INavBarProps {
}

export const NavBar: FC<INavBarProps> = ({}) => {
  return (
    <div className={styles.navBar}>
      <a href="http://localhost:3000/">
        <Image src={logoIcon} alt="Demo" width={35} height={35}/>
        <Image src={logoText} alt="Demo" width={135} height={40}/>
      </a>
    </div>
  );
};
