import {FC} from "react";
import { Col, Row } from '@douyinfe/semi-ui';
import cNames from 'classnames';
import styles from "./styles.module.scss";

export interface ITechnologyProps {
}

export const Technology: FC<ITechnologyProps> = ({}) => {
  return (
    <div className={styles.technologyContainer}>
      <div className={styles.titleContainer}>
        <h2>技术方向</h2>
        <div className={styles.line} />
      </div>
      <Row gutter={40}>
        <Col lg={24} xl={8} xs={24} sm={24} md={24}>
          <div className={cNames([styles.item, styles.item3])}>
            <div className={styles.title}>RT-Thread</div>
            <div className={styles.description}>
              针对RT-Thread， 通过 IoTSharp.Edge.RT-Thread 来演示使用 RT-Thread IoT-Board SDK 的IoTSharp对接协议， 项目基于 STM32L4 + Wi-Fi、温度传感器等
            </div>
          </div>
        </Col>
        <Col lg={24} xl={8} xs={24} sm={24} md={24}>
          <div className={cNames([styles.item, styles.item2])}>
            <div className={styles.title}>.NET NANOFRAMEWORK</div>
            <div className={styles.description}>
              针对.Net nanoFramework，通过 IoTSharp.Edge.nanoFramework来演示了在 ST NUCLEO-F746ZG 向 的IoTSharp发送遥测数据
            </div>
          </div>
        </Col>
        <Col lg={24} xl={8} xs={24} sm={24} md={24}>
          <div className={cNames([styles.item, styles.item1])}>
            <div className={styles.title}>针对Java和其他语言</div>
            <div className={styles.description}>
              针对Java，通过 IoTSharp.Sdks.Java来演示了如何通过Java连接IoTSharp 针对C语言， 通过 IoTSharp.Sdks.MQTT-C来演示了如何通过MQTT-C连接IoTSharp
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
