import {FC} from "react";
import { Col, Row } from '@douyinfe/semi-ui';
import cNames from 'classnames';
import styles from "./styles.module.scss";

export interface ITechnologyProps {
}

export const Technology: FC<ITechnologyProps> = ({}) => {
  return (
    <div className={styles.technologyContainer}>
      <Row gutter={40}>
        <Col span={8}>
          <div className={cNames([styles.item, styles.item3])}>

          </div>
        </Col>
        <Col span={8}>
          <div className={cNames([styles.item, styles.item2])}>

          </div>
        </Col>
        <Col span={8}>
          <div className={cNames([styles.item, styles.item1])}>

          </div>
        </Col>
      </Row>
    </div>
  );
};
