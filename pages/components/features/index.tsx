import {FC} from "react";
import {Col, Row} from '@douyinfe/semi-ui';
import Image from "next/image";
import styles from "./styles.module.scss";
import PlatformIcon from "@/public/platform.svg";
import SafetyIcon from "@/public/safety.svg";
import InformationIcon from "@/public/information.svg";

export interface IFeaturesProps {
}

const Features: FC<IFeaturesProps> = ({}) => {
  const Options = [{
    icon: SafetyIcon,
    title: '安全'
  }, {
    icon: PlatformIcon,
    title: '跨平台'
  }, {
    icon: InformationIcon,
    title: '多样'
  }]
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.list}>
        <Row>
          {
            Options?.map((option, index) => {
              return (
                <Col xs={24} sm={24} md={8} lg={8} xl={8} key={index}>
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

export default Features;