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
            <div className={styles.description}>IoTSharp 是一个开源的物联网基础平台，集设备属性数据管理、遥测数据监测、RPC多模式远程控制、规则链设计引擎等强大能力，依据数字孪生概念将可见与不可见的物理设备统一孪生到数字世界，在落地上IoTSharp结合了资产管理、产品化发展的理念，让平台应用更加贴合复杂的应用场景，在协议支持上支持HTTP、MQTT 、CoAp 等多种标准物联网协议接入和非标协议的转换。</div>
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
