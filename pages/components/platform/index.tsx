import {FC, useRef, useState} from "react";
import {Col, Row} from '@douyinfe/semi-ui';
import Image from "next/image";
import {IPopupRef, Popup} from "@/components/popup";
import TenantImage from '@/public/img_5.png';
import RuleImage from '@/public/img_7.png';
import DeviceImage from '@/public/img_8.png';
import ResourceImage from '@/public/img_6.png';
import styles from "./styles.module.scss";

export interface IPlatformProps {
}

const Platform: FC<IPlatformProps> = ({}) => {
  const popupRef = useRef<IPopupRef>(null);
  const [currentImage, setCurrentImage] = useState(null)
  const Options = [{
    image: TenantImage,
    title: '多租户',
    description: '通过多租户，充分的利用系统资源为多个客户提供服务并确保数据彻底隔离。'
  }, {
    image: DeviceImage,
    title: '数字孪生',
    description: '通过数字孪生使得设备的属性数据、遥测数据、数据清洗、告警更容易管理和使用'
  }, {
    image: RuleImage,
    title: '规则链引擎',
    description: '通过规则链引擎利用多种语言脚本来扩展你对数据的分析和处理。'
  }, {
    image: ResourceImage,
    title: '资产管理',
    description: '使用多个设备及其属性和遥测可抽象为资产更利于管理设备和数据分析。'
  },
  {
    image: ResourceImage,
    title: '产品管理',
    description: '为设备或者网关提供简洁有效的数据模板、字典、认证、素材组织能力。'
  }]
  const viewImage = (image: any): void => {
    setCurrentImage(image)
    popupRef.current?.open();
  }
  return (
    <div className={styles.platformContainer}>
      {
        Options?.map((option, index) => {
          return (
            <Row type="flex" gutter={100} className={styles.row} key={index}>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} order={index % 2 == 0 ? 1 : 2}>
                <Image src={option?.image} width={400} height={500} alt="" onClick={() => viewImage(option?.image)}/>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} order={index % 2 == 0 ? 2 : 1}>
                <div className={styles.content}>
                  <div className={styles.title}>{option?.title}</div>
                  <div className={styles.line}/>
                  <p>{option?.description}</p>
                </div>
              </Col>
            </Row>
          )
        })
      }
      <Popup ref={popupRef}>
        {/*// @ts-ignore*/}
        <Image src={currentImage} width={1000} height={550} alt=""/>
      </Popup>
    </div>
  );
};

export default Platform;