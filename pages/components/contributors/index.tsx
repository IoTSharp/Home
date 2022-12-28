import {FC} from "react";
import { Col, Row } from '@douyinfe/semi-ui';
import Image from "next/image";
import styles from "./styles.module.scss";

export interface IContributorsProps {
}

export const Contributors: FC<IContributorsProps> = ({}) => {
  return (
    <div className={styles.contributorsContainer}>
      <Row className={styles.row}>
        <Col span={7}>
          <div className={styles.title}>参与建设</div>
          <div className={styles.description}>很多小伙伴在和我们一同建设 IoTSharp，如果你有兴趣，欢迎加入我们 。</div>
        </Col>
        <Col span={10} offset={2}>
          <a href="https://github.com/iotsharp/iotsharp/graphs/contributors">
            <img src="https://contrib.rocks/image?repo=iotsharp/iotsharp" />
          </a>
          <a href="https://github.com/iotsharp/ClientAppWithVue3/graphs/contributors">
            <img src="https://contrib.rocks/image?repo=iotsharp/ClientAppWithVue3" />
          </a>
        </Col>
      </Row>
    </div>
  );
};
