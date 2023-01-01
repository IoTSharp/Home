import {FC, useContext, useEffect, useRef} from "react";
import styles from "./styles.module.scss";
import {Col, Row} from '@douyinfe/semi-ui';
import Image from "next/image";
import cName from "classnames";
import bannerIcon from "@/public/banner.svg";
import IoTIcon from "@/public/iot.svg";
import logoText from "@/public/logo-text.svg";
import {ThemeContext} from "@/stores/theme";

export interface IBannerProps {
}

const Banner: FC<IBannerProps> = ({}) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    mainRef.current?.classList.remove(styles.withAnimation);
    window.requestAnimationFrame(() => {
      mainRef.current?.classList.add(styles.withAnimation);
    });
  }, [theme]);
  return (
    <div className={cName([styles.banner, styles.withAnimation])} ref={mainRef}>
      <Row type="flex" align="middle">
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <div className={styles.container}>
            <div className={styles.subTitle}><Image src={IoTIcon} alt="" width={30} height={30}/>Internet of Things</div>
            <div className={styles.title}><Image src={logoText} alt="" width={260} height={60}/></div>
            <div className={styles.label}>基于.Net 6.0、C# 的开源IoT平台</div>
            <div className={styles.description}>设备管理与数据收集、处理、可视化的解决方案</div>
            <div className={styles.button} onClick={(): void => {
              window.open(
                "https://docs.iotsharp.net/",
                "blank",
                "noopener=yes,noreferrer=yes"
              );
            }}>快速上手
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <Image src={bannerIcon} alt="" width={400} height={400} className={styles.icon}/>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
