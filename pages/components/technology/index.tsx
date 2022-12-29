import {FC} from "react";
import {Col, Row} from '@douyinfe/semi-ui';
import cNames from 'classnames';
import styles from "./styles.module.scss";

export interface ITechnologyProps {
}

export const Technology: FC<ITechnologyProps> = ({}) => {
  const Options = [{
    title: '数字孪生',
    description: '通过服务侧、客户端侧属性、遥测数据、RPC 等实现了数字孪生， 实现了所有设备统一接口提供给业务调用。',
    classGroup: [styles.item, styles.item3]
  }, {
    title: '规则链引擎',
    description: '通过脚本处理数据并结合动态 Linq 表达式处理节点与节点之间的走向以实现数据清洗、告警、事件等相应手段。',
    classGroup: [styles.item, styles.item2]
  }, {
    title: '中间件支持',
    description: '支持如消息中间件 RabbitMQ、AmazonSQS，时序数据库 InfluxDB、TDengine，关系数据库 PostgreSQL等。',
    classGroup: [styles.item, styles.item1]
  }]
  return (
    <div className={styles.technologyContainer}>
      <div className={styles.titleContainer}>
        <h2>技术方向</h2>
        <div className={styles.line}/>
      </div>
      <Row gutter={40}>
        {
          Options?.map((option, index) => {
            return (
              <Col lg={24} xl={8} xs={24} sm={24} md={24} key={index}>
                <div className={cNames(option?.classGroup)}>
                  <div className={styles.title}>{option?.title}</div>
                  <div className={styles.description}>
                    {option?.description}
                  </div>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </div>
  );
};
