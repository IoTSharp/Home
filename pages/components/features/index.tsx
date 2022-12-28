import {FC} from "react";
import { Col, Row } from '@douyinfe/semi-ui';
import Image from "next/image";
import styles from "./styles.module.scss";
import UserIcon from "@/public/user.svg";
import RuleIcon from "@/public/rule.svg";
import PlatformIcon from "@/public/platform.svg";
import SafetyIcon from "@/public/safety.svg";
import InformationIcon from "@/public/information.svg";
import GatewayIcon from "@/public/gateway.svg";

export interface IFeaturesProps {
}

export const Features: FC<IFeaturesProps> = ({}) => {
  const Options = [{
    icon: UserIcon,
    title: '多租户管理'
  }, {
    icon: RuleIcon,
    title: '规则链引擎'
  }, {
    icon: GatewayIcon,
    title: '网关设计器'
  }, {
    icon: PlatformIcon,
    title: '跨平台管理'
  }, {
    icon: SafetyIcon,
    title: '安全通讯保障'
  }, {
    icon: InformationIcon,
    title: '组态多样性'
  }]
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.list}>
        <Row>
          {
            Options?.map((option, index) => {
              return (
                <Col xs={24} sm={12} md={12} lg={12} xl={8} key={index}>
                  <div className={styles.item}>
                    <Image src={option?.icon} alt="" width={90} height={90}/>
                    <div className={styles.title}>{option?.title}</div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  );
};
