import {FC} from "react";
import { Col, Row } from '@douyinfe/semi-ui';
import Image from "next/image";
import TenantImage from '@/public/img_5.png';
import RuleImage from '@/public/img_7.png';
import DeviceImage from '@/public/img_8.png';
import ResourceImage from '@/public/img_6.png';
import styles from "./styles.module.scss";

export interface IPlatformProps {
}

export const Platform: FC<IPlatformProps> = ({}) => {
  return (
    <div className={styles.platformContainer}>
      <Row gutter={100} className={styles.row}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Image src={TenantImage} width={400} height={500} alt="" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.content}>
            <div className={styles.title}>租户管理</div>
            <div className={styles.line} />
            <p>利用租户管理，您可以为您的客户建立IoTSharp的私有云， 无需租用额外的服务器，一套系统负担所有客户。而不是一对一浪费更多资源。</p>
          </div>
        </Col>
      </Row>
      <Row gutter={100} className={styles.row}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.content}>
            <div className={styles.title}>设备管理</div>
            <div className={styles.line} />
            <p>你可以随时点开设备查看实时变化的遥测数据、规则链绑定、以及修改和增加服务侧的属性或者查看设备侧属性</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Image src={DeviceImage} width={400} height={500} alt="" />
        </Col>
      </Row>
      <Row gutter={100} className={styles.row}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Image src={RuleImage} width={400} height={500} alt="" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.content}>
            <div className={styles.title}>规则链引擎</div>
            <div className={styles.line} />
            <p> 你可以监视遥测数据、熟悉数据，并允许你使用规则链通过数字孪生控制远在千里之外的物联网资产</p>
          </div>
        </Col>
      </Row>
      <Row gutter={100} className={styles.row}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.content}>
            <div className={styles.title}>资产管理（未来）</div>
            <div className={styles.line} />
            <p>未来， IoTSharp针对设备和网关管理的同时，我们更要针对无数个设备和规则链组成的一套系统， 这套系统可能一栋大厦， 也可能是一套产品系统。</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Image src={ResourceImage} width={400} height={500} alt="" />
        </Col>
      </Row>
    </div>
  );
};
