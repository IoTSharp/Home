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

export const Platform: FC<IPlatformProps> = ({}) => {
  const popupRef = useRef<IPopupRef>(null);
  const [currentImage, setCurrentImage] = useState(null)
  const Options = [{
    image: TenantImage,
    title: '租户管理',
    description: '您可以为您的客户建立私有云，无需租用额外的服务器，一套系统负担所有客户，而不是一对一浪费资源。'
  }, {
    image: DeviceImage,
    title: '设备管理',
    description: '您可以随时点开设备查看实时变化的遥测数据、规则链绑定、以及修改和增加服务侧的属性或查看设备侧属性。'
  }, {
    image: RuleImage,
    title: '规则链引擎',
    description: '您可以监视遥测数据、熟悉数据，并允许您使用规则链通过数字孪生控制远在千里之外的物联网资产。'
  }, {
    image: ResourceImage,
    title: '资产管理（未来）',
    description: '未来，IoTSharp针对设备和网关管理的同时，更要针对无数个设备和规则链组成一套系统，这套系统可能是一栋大厦，也可能是一套产品系统。'
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
