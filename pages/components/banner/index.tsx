import {FC, useContext, useEffect, useRef} from "react";
import styles from "./styles.module.scss";
import {Col, Row} from '@douyinfe/semi-ui';
import cName from "classnames";
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
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <div className={styles.container}>
            <div className={styles.title}>连接物理设备与数字世界</div>
            <div className={styles.description}>基于.Net 6.0 使用C#开发的数据采集、数据清洗、数据可视化与设备资产管理的开源物联网(IoT)基础服务平台。</div>
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
        <Col xs={24} sm={24} md={24} lg={14} xl={14} offset={2}>
          <div className={styles.bannerImage}>
            <div className={styles.background}/>
            <div className={styles.icon}/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
